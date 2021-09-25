import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fetchMoviebyQuery } from "../../services/MoviesApi";
import Spiner from "../../components/Loader/Loader";
import FilmsList from "../../components/FilmsList/FilmsList";
import s from "./MoviePage.module.css";

function MoviePage() {
  const history = useHistory();
  const location = useLocation();
  const [movieFound, setMovieFound] = useState([]);
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();

    const movie = e.currentTarget.query.value;
    const movieLow = movie.toLowerCase().trim();

    history.push({
      ...location,
      search: `query=${movieLow}`,
    });
    e.target.reset();
  };

  const movieQuery = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!movieQuery) {
      return;
    }

    setStatus("pending");

    fetchMoviebyQuery(movieQuery).then((response) => {
      if (!response.data.results.length) {
        setStatus("rejected");
      } else {
        setStatus("resolved");
        setMovieFound(response.data.results);
      }
    });
  }, [movieQuery]);

  return (
    <div>
      <div className={s.container}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            name="query"
            type="text"
            placeholder="Search movies"
          />

          <button className={s.button} type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>

      {status === "pending" && <Spiner />}

      {status === "resolved" && <FilmsList films={movieFound} />}

      {status === "rejected" && (
        <h3 className={s.notFound}>По вашему запросу ничего не найдено</h3>
      )}
    </div>
  );
}

export default MoviePage;
