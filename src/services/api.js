import axios from 'axios';


const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
headers: {
Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjZjMTA5ZjUxNjA1N2JkYTYyZjkyZTU3YTJlM2IzZCIsInN1YiI6IjY2MGZkYzY3ODhjNjU5MDE3YzljZTRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6-zrAow6l_ehri9Th2OKE6zz_DBa9rFdNjzahThjsP0'
}
};


export const requestTrendingMovies = async() => {
    const responce = await axios.get(url, options);
    return responce.data
}



// axios.get(url, options)
// .then(response => console.log(response))
// .catch(err => console.error(err));
