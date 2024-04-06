import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestMovieReviewById } from "../../services/api";


const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieCast() {
      try {
        const data = await requestMovieReviewById(movieId);
        setMovieReview(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieCast();
  }, [movieId]);


  return (
    <div>
    <ul>
      {movieReview && movieReview.length > 0 ? (
        movieReview.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We don&apos;t have any reviews for this movie</p>
      )}
    </ul>
  </div>
  )
}

export default MovieReviews




