import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";
import Loader from "../../components/Loader/Loader";
import { useMovies } from "../../Hooks/useMovies";

const MoviesPage = () => {
  const { movies, isLoading, onSetSearchQuery } = useMovies({
    isSearchPage: true,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const value = form.elements.searchMovie.value;
    onSetSearchQuery(value);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="text"
          name="searchMovie"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
