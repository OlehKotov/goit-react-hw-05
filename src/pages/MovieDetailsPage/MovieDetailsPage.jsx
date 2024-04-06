import { useEffect, useState } from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import { requestMovieDetailsById } from "../../services/api";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await requestMovieDetailsById(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
        alt=""
      ></img>
      <h1>{movieDetails.original_title}</h1>
      <p>Users score: {Math.floor(movieDetails.popularity)}%</p>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>

      {movieDetails.genres &&
        movieDetails.genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
      <h3>Additional Information</h3>
<ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
