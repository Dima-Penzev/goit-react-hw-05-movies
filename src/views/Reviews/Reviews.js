import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../services/MoviesApi";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsById(movieId).then((response) =>
      setReviews(response.data.results)
    );
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <li key={review.id}>
            <h4>
              <span>Author:</span>
              {review.author}
            </h4>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
}

export default Reviews;
