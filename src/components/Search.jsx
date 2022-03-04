import React, { useEffect, useState } from "react";
import "../style/components/Search.css";

const Search = ({ movies, searchMovie, setSearchMovie, setMovies }) => {
  const [state, setState] = useState({
    quality: undefined,
    rating: undefined,
  });
  let searchedMovies = [];

  // buscando peliculas por termino
  const searchedMoviesByTerm = movies.filter((movie) => {
    const lowSearchMovie = searchMovie.value.toLowerCase();
    const lowMovieTitle = movie.title.toLowerCase();
    return lowMovieTitle.includes(lowSearchMovie);
  });

  // buscar peliculas por calidad

  const searchMoviesByQuality = movies.filter((movie) => {
    const movieQuality = movie.torrents.map((quality) => quality.quality);
    return movieQuality.includes(state.quality);
  });

  // buscar peliculas por rating

  const searchMoviesByRating = movies.filter((movie) => {
    const movieRating = Math.floor(movie.rating);
    return movieRating >= state.rating;
  });

  searchedMovies = searchMoviesByRating;

  // if (searchMovie != "") {
  //   searchedMovies = searchedMoviesByTerm;
  // } else if (state.quality != undefined) {
  //   searchedMovies = searchMoviesByQuality;
  // } else if (state.rating != undefined) {
  //   searchedMovies = searchMoviesByRating;
  // } else {
  //   return searchedMovies;
  // }

  const handleClick = (event) => {
    event.preventDefault();

    // seteando que se busco una pelicula
    setSearchMovie({
      ...searchMovie,
      searched: true,
    });

    console.log(searchedMovies);
    // seteando peliculas buscadas para renderizar
    setMovies(searchedMovies);
  };

  return (
    <div className="main-search">
      <form className="container container-search">
        <div className="main-search-field">
          <div>
            <p className="term">Search Term:</p>
            <div className="d-flex">
              <input
                className="input me-3"
                type="text"
                value={searchMovie.value}
                onChange={(e) =>
                  setSearchMovie({
                    ...searchMovie,
                    value: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="select-container">
              <p>Quality:</p>
              <select
                onChange={(e) =>
                  setState({
                    quality: e.target.value,
                  })
                }
              >
                <option>All</option>
                <option>720p</option>
                <option>1080p</option>
                <option>2160p</option>
                <option>3D</option>
              </select>
            </div>
            <div className="select-container">
              <p>Genre:</p>
              <select>
                <option>All</option>
                <option>Action</option>
              </select>
            </div>
            <div className="select-container">
              <p>Rating:</p>
              <select
                onChange={(e) =>
                  setState({
                    rating: e.target.value,
                  })
                }
              >
                <option>All</option>
                <option value={9}>9+</option>
                <option value={8}>8+</option>
                <option value={7}>7+</option>
              </select>
            </div>
            <div className="select-container">
              <p>Year:</p>
              <select>
                <option>All</option>
                <option>2020</option>
              </select>
            </div>
            <div className="select-container">
              <p>Lenguage:</p>
              <select>
                <option>All</option>
                <option>English</option>
              </select>
            </div>
          </div>
        </div>
        <div className="main-search-btn">
          <button className="button-search" onClick={handleClick}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export { Search };
