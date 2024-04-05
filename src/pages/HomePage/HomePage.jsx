import { useEffect, useState } from "react";
import { requestTrendingMovies } from "../../services/api";


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
      HomePage
    </div>
  )
}

export default HomePage