import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import { useMovies } from "../../Hooks/useMovies";
import css from "./HomePage.module.css";

function HomePage() {
  const { movies, isLoading } = useMovies({
    isSearchPage: false,
  });

  return (
    <div>
      {isLoading && <Loader />}
      <h2 className={css.header}>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
