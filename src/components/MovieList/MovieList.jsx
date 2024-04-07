import { useEffect, useState } from "react";
import {
  requestMovieBySearch,
  requestTrendingMovies,
} from "../../services/api";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./MovieList.module.css"


const MovieList = ({ isSearchPage, query }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    if (isSearchPage) return;
    async function fetchTrendingMovies() {
      try {
        setLoading(true);
        const data = await requestTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingMovies();
  }, [isSearchPage]);

  useEffect(() => {
    if (!query) return;
    async function fetchSearchMovies() {
      try {
        setLoading(true);
        const data = await requestMovieBySearch(query);
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      } 
    }

    fetchSearchMovies();
  }, [query]);

  useEffect(() => {
    if (!isSearchPage) {
      async function fetchTrendingMovies() {
        try {
          setLoading(true);
          const data = await requestTrendingMovies();
          setMovies(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      fetchTrendingMovies();
    }
  }, [isSearchPage]);

  return (
    <div>
      {location.pathname === '/' && <h2 className={css.header}>Trending today</h2>}
      {loading && <Loader />}
      <ul className={css.list}>
        {movies.map((movies) => {
          return (
            <li key={movies.id} >
              <Link className={css.listItem} state={location} to={`/movies/${movies.id}`}>{movies.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
