import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchPopularMovies } from "../../services/MoviesApi";

function HomePage() {
  //   const route = useRouteMatch();
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
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HomePage;
