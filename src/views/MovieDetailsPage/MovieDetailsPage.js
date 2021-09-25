import { useState, useEffect, lazy, Suspense } from "react";
import {
  Link,
  useParams,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import { fetchMovieById } from "../../services/MoviesApi";
import defaultFilm from "../MovieDetailsPage/defaultFilm.jpg";
import Spiner from "../../components/Loader/Loader";
import s from "./MovieDetailsPage.module.css";
const Cast = lazy(() =>
  import("../Cast/Cast.js" /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import("../Reviews/Reviews.js" /* webpackChunkName: "reviews" */)
);
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

  return (
    <div>
      {movie && (
        <div>
          <button className={s.button} type="button" onClick={onGoBack}>
            Go back
          </button>
          <div className={s.container}>
            <img
              src={
                movie.poster_path
                  ? `${IMG_URL}${movie.poster_path}`
                  : defaultFilm
              }
              alt={movie.title}
              width="300"
            />
            <div className={s.discription}>
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
          </div>
        </div>
      )}
      <div className={s.infoContainer}>
        <h3 className={s.title}>Additional information</h3>
        <ul>
          <li>
            <Link
              to={{
                pathname: `/movies/${movieId}/cast`,
                state: { from: location },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/movies/${movieId}/reviews`,
                state: { from: location },
              }}
            >
              Rewiews
            </Link>
          </li>
        </ul>
      </div>

      <Suspense fallback={<Spiner />}>
        <Switch>
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>

          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;
