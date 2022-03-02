import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { useApi } from "../components/useApi";
import { Pagination } from "../components/Pagination";
import { Search } from "../components/Search";
import "../style/Movies.css";

const Main = () => {
  const { movies } = useApi();
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

  useEffect(() => {
    setShowMovies(currentMovies);
  }, [movies, currentPage]);

  return (
    <div>
      <Search
        movies={movies}
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        setShowMovies={setShowMovies}
      />
      <main className="main">
        <div className="container">
          <h2>{`${
            searchMovie.searched == false ? movies.length : showMovies.length
          } Movies found`}</h2>
          <Pagination
            movies={movies}
            searchMovie={searchMovie}
            showMovies={showMovies}
            moviesPerPage={moviesPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <section className="movies-container">
            {showMovies.map((movie) => (
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
