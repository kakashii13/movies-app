import React, { useEffect, useState } from "react";
import "../style/components/Search.css";

const Search = ({ movies, searchMovie, setSearchMovie, setShowMovies }) => {
  const [state, setState] = useState({
    quality: undefined,
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

  if (searchMovie != "") {
    searchedMovies = searchedMoviesByTerm;
  } else if (state.quality != undefined) {
    searchedMovies = searchMoviesByQuality;
  } else {
    return searchedMovies;
  }

  const handleClick = (event) => {
    event.preventDefault();

    // seteando que se busco una pelicula
    setSearchMovie({
      ...searchMovie,
      searched: true,
    });

    // seteando peliculas buscadas para renderizar
    setShowMovies(searchedMovies);
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
                onChange={(event) =>
                  setSearchMovie({
                    ...searchMovie,
                    value: event.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="select-container">
              <p>Quality:</p>
              <select
                onChange={(event) =>
                  setState({
                    quality: event.target.value,
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
              <select>
                <option>All</option>
                <option>9+</option>
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
