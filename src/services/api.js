import axios from "axios";


axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers = {
  Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjZjMTA5ZjUxNjA1N2JkYTYyZjkyZTU3YTJlM2IzZCIsInN1YiI6IjY2MGZkYzY3ODhjNjU5MDE3YzljZTRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6-zrAow6l_ehri9Th2OKE6zz_DBa9rFdNjzahThjsP0",
}
// const options = {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjZjMTA5ZjUxNjA1N2JkYTYyZjkyZTU3YTJlM2IzZCIsInN1YiI6IjY2MGZkYzY3ODhjNjU5MDE3YzljZTRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6-zrAow6l_ehri9Th2OKE6zz_DBa9rFdNjzahThjsP0",
//   },
// };

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(
    "/trending/movie/day?language=en-US"
  );
  return data.results;
};

export const requestMovieDetailsById = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}?language=en-US`
  );
  return data;
};

export const requestMovieCastById = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?language=en-US`
  );
  return data.cast;
};

export const requestMovieReviewById = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&page=1`
  );
  return data.results;
};

export const requestMovieBySearch = async (query) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data.results;
};
