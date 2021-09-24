import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/MoviesApi";
import defaultImg from "./defaultAvatar.jpg";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchCastById(movieId).then((response) => setCast(response.data.cast));
  }, [movieId]);

  return (
    <div>
      {cast.length > 0 ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `${IMG_URL}${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                width="100"
              />
              <p>{actor.name}</p>
              <p>
                <span>Character:</span>
                {actor.character}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any casts for this movie</p>
      )}
    </div>
  );
}

export default Cast;
