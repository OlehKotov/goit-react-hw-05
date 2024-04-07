import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes, Link, useParams } from "react-router-dom";
import { requestMovieDetailsById } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true);
        const data = await requestMovieDetailsById(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  return (
    <div>
      {loading && <Loader />}
      <Link className={css.goBack} to={backLinkRef.current}>
        Go Back
      </Link>
      <br />
      <div className={css.details}>
        <img
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <div className={css.detailsWrapper}>
          <h1>{movieDetails.original_title}</h1>
          <p>Users score: {Math.floor(movieDetails.popularity)}%</p>
          <h2>Overview</h2>
          <p className={css.overview}>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <div className={css.genres}>
            {movieDetails.genres &&
              movieDetails.genres.map((genre) => (
                <p key={genre.id} >
                  {genre.name}
                </p>
              ))}
          </div>
        </div>
      </div>

      <h3 className={css.additionalHeader}>Additional Information</h3>
      <ul className={css.additionalLink}>
        <li>
          <Link to="cast" className={css.additionalLinkItem}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" className={css.additionalLinkItem}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
