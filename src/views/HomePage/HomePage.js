import { useState, useEffect } from "react";

import { fetchPopularMovies } from "../../services/MoviesApi";
import FilmsList from "../../components/FilmsList/FilmsList";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then((response) => setMovies(response.data.results));
  }, []);

  return movies && <FilmsList films={movies} />;
}

export default HomePage;
