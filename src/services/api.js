import axios from 'axios';


const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
headers: {
Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjZjMTA5ZjUxNjA1N2JkYTYyZjkyZTU3YTJlM2IzZCIsInN1YiI6IjY2MGZkYzY3ODhjNjU5MDE3YzljZTRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6-zrAow6l_ehri9Th2OKE6zz_DBa9rFdNjzahThjsP0'
}
};

axios.get(url, options)
.then(response => console.log(response))
.catch(err => console.error(err));
