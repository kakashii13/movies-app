import React, { useEffect, useState } from "react";

const useApi = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?limit=50"
      );
      const data = await response.json();
      setMovies(data.data.movies);
      console.log(data.data.movies);
    };
    fetchApi();
  }, []);

  return { movies, setMovies };
};

export { useApi };
