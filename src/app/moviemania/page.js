"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import "./MovieCard.css";
import searchIcon from "../../../public/search.svg";

const API_URL =
  "http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1 className="title">Moviemania</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Image
          src={searchIcon}
          alt="search icon"
          onClick={() => searchMovies(search)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="containerr">
          {movies.map((movie, index) => (
            <MovieCard key={movie.imdbID || index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Movie not found</h2>
        </div>
      )}
    </div>
  );
}
