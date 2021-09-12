import { useState, useEffect } from "react";
import { Link, useParams, Switch, Route } from "react-router-dom";
import { fetchMovieById } from "../../services/MoviesApi";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then((response) => setMovie(response.data));
  }, [movieId]);

  return (
    <div>
      {movie && (
        <div>
          <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>
            <span>User score:</span>
            {movie.vote_count}%
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
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Rewiews</Link>
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
