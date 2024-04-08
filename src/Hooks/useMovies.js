import { useEffect, useState } from "react";
import {
  requestTrendingMovies,
  requestMovieBySearch,
} from "../services/api.js";
import { useSearchParams } from "react-router-dom";

export const useMovies = ({ isSearchPage = false }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (isSearchPage) return;
    async function fetchTrendingMovies() {
      try {
        setIsLoading(true);
        const data = await requestTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrendingMovies();
  }, [isSearchPage]);

  useEffect(() => {
    if (!query) return;
    async function fetchSearchMovies() {
      try {
        setIsLoading(true);
        const data = await requestMovieBySearch(query);
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSearchMovies();
  }, [query]);

  const onSetSearchQuery = (value) => {
    setSearchParams({ query: value });
  };

  return { movies, isLoading, onSetSearchQuery };
};
