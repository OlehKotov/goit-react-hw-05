import { useEffect, useState } from "react";
import {
  requestMovieBySearch,
  requestTrendingMovies,
} from "../../services/api";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MovieList = ({ isSearchPage, query }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  

  useEffect(() => {
    if (isSearchPage) return;
    async function fetchTrendingMovies() {
      try {
        const data = await requestTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTrendingMovies();
  }, [isSearchPage]);

  useEffect(() => {
    if (!query) return;
    async function fetchSearchMovies() {
      try {
        const data = await requestMovieBySearch(query);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSearchMovies();
  }, [query]);

  useEffect(() => {
    if (!isSearchPage) {
      async function fetchTrendingMovies() {
        try {
          const data = await requestTrendingMovies();
          setMovies(data);
        } catch (error) {
          console.log(error);
        }
      }

      fetchTrendingMovies();
    }
  }, [isSearchPage]);

  return (
    <div>
      {location.pathname === '/' && <h2>Home</h2>}
      {location.pathname === '/movies' && <h2>Movies</h2>}
      <ul>
        {movies.map((movies) => {
          return (
            <li key={movies.id}>
              <Link to={`/movies/${movies.id}>`}>{movies.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
