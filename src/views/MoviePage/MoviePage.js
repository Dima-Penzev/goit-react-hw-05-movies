import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fetchMoviebyQuery } from "../../services/MoviesApi";

function MoviePage() {
  const history = useHistory();
  const location = useLocation();
  const [movieQuery, setMovieQuery] = useState("");
  const [movieFound, setMovieFound] = useState(null);
  console.log(history);
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();

    const movie = e.currentTarget.query.value;
    const movieLow = movie.toLowerCase().trim();
    setMovieQuery(movieLow);
  };

  useEffect(() => {
    if (!movieQuery) {
      return;
    }
    fetchMoviebyQuery(movieQuery).then((response) =>
      setMovieFound(response.data.results)
    );
    setMovieQuery("");
  }, [movieQuery]);

  console.log(movieFound);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="query" type="text" placeholder="Search movies" />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

export default MoviePage;
