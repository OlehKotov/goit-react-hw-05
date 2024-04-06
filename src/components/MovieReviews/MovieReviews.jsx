

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState(null);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        const data = await requestMovieCastById(movieId);
        setMovieCast(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieCast();
  }, [movieId]);



  return (
    <div>MovieReviews gfbHu</div>
  )
}

export default MovieReviews