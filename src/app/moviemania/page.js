"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import "./MovieCard.css";
import searchIcon from "../../../public/search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=35573564";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data); // Inspect the response
      setMovies(data.Search || []); // Handle empty or missing `Search`
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); // Handle fetch errors
    }
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
      {movies.length > 0 ? (
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
