import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { useApi } from "../components/useApi";
import { Pagination } from "../components/Pagination";
import { Search } from "../components/Search";
import "../style/Movies.css";

const Main = () => {
  const { movies, setMovies } = useApi();
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20);
  const [showMovies, setShowMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState({
    value: "",
    searched: false,
  });

  const indexOfLastMovie = moviesPerPage * currentPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div>
      <Search
        movies={movies}
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        setMovies={setMovies}
      />
      <main className="main">
        <div className="container">
          <h2>{`${movies.length} Movies found`}</h2>
          <Pagination
            movies={movies}
            searchMovie={searchMovie}
            showMovies={showMovies}
            moviesPerPage={moviesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <section className="movies-container">
            {currentMovies.map((movie) => (
              <Card
                key={movie.id}
                bckimg={movie.medium_cover_image}
                rating={movie.rating}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
              />
            ))}
          </section>
          <Pagination
            movies={movies}
            searchMovie={searchMovie}
            showMovies={showMovies}
            moviesPerPage={moviesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </main>
    </div>
  );
};

export { Main };
