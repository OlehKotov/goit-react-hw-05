import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes, Link, useParams } from "react-router-dom";
import { requestMovieDetailsById } from "../../services/api";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const location = useLocation();
  console.log(location);

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

  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  return (
    <div>
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
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
