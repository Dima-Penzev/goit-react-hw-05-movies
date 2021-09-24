import { useState, useEffect } from "react";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { fetchMoviebyQuery } from "../../services/MoviesApi";
import Spiner from "../../components/Loader/Loader";

function MoviePage() {
  const { url } = useRouteMatch();
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
      <form onSubmit={handleSubmit}>
        <input name="query" type="text" placeholder="Search movies" />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      {status === "pending" && <Spiner />}

      {status === "resolved" && (
        <ul>
          {movieFound.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {status === "rejected" && <h3>По вашему запросу ничего не найдено</h3>}
    </div>
  );
}

export default MoviePage;
