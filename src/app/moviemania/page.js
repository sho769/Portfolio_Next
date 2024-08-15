// pages/index.js
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./MovieCard.css";
import searchIcon from "../../../public/search.svg";

// Use environment variable for API key
const API_URL = `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (title) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError(null);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("An error occurred while fetching the data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="App">
      <h1 className="title">Moviemania</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Image
          src={searchIcon}
          alt="search icon"
          onClick={() => {
            searchMovies(search);
          }}
        />
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : movies?.length > 0 ? (
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
