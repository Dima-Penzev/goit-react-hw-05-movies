import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchPopularMovies } from "../../services/MoviesApi";

function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then((response) => setMovies(response.data.results));
  }, []);

  return (
    <div>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HomePage;
