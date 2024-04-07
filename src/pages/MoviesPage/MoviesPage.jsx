
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";



const MoviesPage = () => {
  
  
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query")

  const onSetSearchQuery = (value) => {
    setSearchParams({query: value});
  };
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const value = form.elements.searchMovie.value;
    onSetSearchQuery(value);
    form.reset();
  };


  return (
    <div >
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchMovie"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit">Search</button>
    </form>
    <MovieList isSearchPage={true} query={query}/>
  </div>
  )
}

export default MoviesPage