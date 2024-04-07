import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestMovieReviewById } from "../../services/api";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css"


const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieCast() {
      try {
        setLoading(true);
        const data = await requestMovieReviewById(movieId);
        setMovieReview(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);


  return (
    <div>
    <ul>
    {loading && <Loader />}
      {movieReview && movieReview.length > 0 ? (
        movieReview.map(review => (
          <li key={review.id}>
            <p className={css.reviewText}><span className={css.reviewTextSpan}>Author: </span>{review.author}</p>
            <p className={css.reviewContent}>{review.content}</p>
          </li>
        ))
      ) : (
        <p className={css.reviewText}>We don&apos;t have any reviews for this movie</p>
      )}
    </ul>
  </div>
  )
}

export default MovieReviews




