import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.list}>
        {movies.map((movies) => {
          return (
            <li key={movies.id}>
              <Link
                className={css.listItem}
                state={location}
                to={`/movies/${movies.id}`}
              >
                {movies.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
