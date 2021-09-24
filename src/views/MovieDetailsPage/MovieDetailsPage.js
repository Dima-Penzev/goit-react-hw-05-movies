import { useState, useEffect } from "react";
import {
  Link,
  useParams,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import { fetchMovieById } from "../../services/MoviesApi";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import defaultFilm from "../MovieDetailsPage/defaultFilm.jpg";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then((response) => setMovie(response.data));
  }, [movieId]);

  const onGoBack = () => {
    if (location?.state?.from?.pathname === `/movies/${movieId}`) {
      history.push(location?.state?.from?.state?.from ?? "/");
      return;
    }
    history.push(location?.state?.from ?? "/");
  };
  console.log(location?.state?.from?.state?.from);
  console.log(location?.state?.from?.pathname);
  return (
    <div>
      {movie && (
        <div>
          <button type="button" onClick={onGoBack}>
            Go back
          </button>
          <br />
          <img
            src={
              movie.poster_path ? `${IMG_URL}${movie.poster_path}` : defaultFilm
            }
            alt={movie.title}
            width="300"
          />
          <h2>{movie.title}</h2>
          <p>
            <span>User score:</span>
            <span> </span>
            {movie.vote_count}
          </p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <Link
          to={{
            pathname: `/movies/${movieId}/cast`,
            state: { from: location },
          }}
        >
          Cast
        </Link>
        <Link
          to={{
            pathname: `/movies/${movieId}/reviews`,
            state: { from: location },
          }}
        >
          Rewiews
        </Link>
      </div>

      <Switch>
        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>
      </Switch>
    </div>
  );
}

export default MovieDetailsPage;
