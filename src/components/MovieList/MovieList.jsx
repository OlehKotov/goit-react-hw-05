import { useEffect, useState } from "react";
import { requestTrendingMovies } from "../../services/api";
import { Link } from "react-router-dom";

const MovieList = ({isSearchPage = false}) => {
  
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [query, setQuery] = useState('');



  useEffect(() => {
    if(isSearchPage) return
    async function fetchTrendingMovies() {
      try {
        const data = await requestTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        console.log(error);
      } 
    }

    fetchTrendingMovies();

  }, [isSearchPage]);


 


  return (
    <div>
      <h2>Trending today</h2>
      <ul>
      {trendingMovies.map(movies => {
        return <li key={movies.id}>
          <Link to={`/movies/${movies.id}>`}>{movies.title}</Link>
        </li>
      })}
    </ul>
    </div>
  )
}

export default MovieList