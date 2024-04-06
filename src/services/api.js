import axios from 'axios';


const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
headers: {
Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjZjMTA5ZjUxNjA1N2JkYTYyZjkyZTU3YTJlM2IzZCIsInN1YiI6IjY2MGZkYzY3ODhjNjU5MDE3YzljZTRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6-zrAow6l_ehri9Th2OKE6zz_DBa9rFdNjzahThjsP0'
}
};


export const requestTrendingMovies = async() => {
    const { data} = await axios.get(url, options);
    return data.results
}

export const requestMovieDetailsById = async(movieId) => {
    const { data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    return data
}

export const requestMovieCastById = async(movieId) => {
    const { data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options);
    return data.cast
}

export const requestMovieReviewById = async(movieId) => {
    const { data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options);
    return data.results
}



