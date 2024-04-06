import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestMovieCastById } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieCast() {
      try {
        const data = await requestMovieCastById(movieId);
        setMovieCast(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieCast();
  }, [movieId]);


  return (
    <div>
      <ul>
      {movieCast !== null && movieCast.map(cast => {
        return <li key={cast.id}>
          <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={cast.name}></img>
          <p>{cast.name}</p>
          <p>{cast.character}</p>
        </li>
      })} 
    </ul> 
    </div>
  )
}

export default MovieCast