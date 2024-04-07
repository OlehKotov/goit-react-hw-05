import MovieList from "../../components/MovieList/MovieList";

function HomePage() {

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList isSearchPage={false}/>
    </div>
    
  )
}

export default HomePage