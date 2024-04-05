import { useEffect, useState } from "react";
import { requestTrendingMovies } from "../../services/api";



// {
//   "adult": false,
//   "backdrop_path": "/f5a9YRvJ7uSM0JAtEI59sqKRnVg.jpg",
//   "id": 353616,
//   "title": "Pitch Perfect 3",
//   "original_language": "en",
//   "original_title": "Pitch Perfect 3",
//   "overview": "After the highs of winning the world championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.",
//   "poster_path": "/iHxmTTFMuuPIwwj39C4Zkk9IL4m.jpg",
//   "media_type": "movie",
//   "genre_ids": [
//       35,
//       10402
//   ],
//   "popularity": 42.489,
//   "release_date": "2017-12-20",
//   "video": false,
//   "vote_average": 6.528,
//   "vote_count": 3206
// },

function HomePage() {

  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const data = await requestTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        console.log(error);
      } 
    }

    fetchTrendingMovies();

  }, []);

  
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
      {trendingMovies.map(movies => {
        return <li key={movies.id}><a href="">{movies.title}</a></li>
      })}
    </ul>
    </div>
    
  )
}

export default HomePage