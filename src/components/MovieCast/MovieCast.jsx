import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestMovieCastById } from "../../services/api";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css"

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieCast() {
      try {
        setLoading(true);
        const data = await requestMovieCastById(movieId);
        setMovieCast(data);
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
      {movieCast && movieCast.length > 0 ? (movieCast.map(cast => {
        return <li key={cast.id}>
          <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name} width={120} className={css.castImg}></img>
          <p className={css.castText}>{cast.name}</p>
          <p className={css.castText}><span className={css.castTextSpan}>Character: </span>{cast.character}</p>
        </li>
      })) : (
        <p className={css.castText}>We don&apos;t have any cast for this movie</p>
      )} 
    </ul> 
    </div>
  )
}

export default MovieCast