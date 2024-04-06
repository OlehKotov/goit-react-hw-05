import { useState } from "react";



const MoviesPage = ( {onSearch} ) => {
  const [searchMovies, setSearchMovies] = useState([]);
  
  // const onSearch = (searchTerm) => {
  //   setQuery(searchTerm);
    
  // };


  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchTerm = form.elements.searchMovie.value;
    onSearch(searchTerm);
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
  </div>
  )
}

export default MoviesPage