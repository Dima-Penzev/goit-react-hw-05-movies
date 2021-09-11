import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/MoviesApi";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then((response) => setMovie(response.data));
  }, [movieId]);
  console.log(movie);

  return (
    <div>
      {movie && (
        <div>
          <img src={movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
        </div>
      )}
    </div>
  );
}

export default MovieDetailsPage;
