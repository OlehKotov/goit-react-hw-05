import { Link } from "react-router-dom"


const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Not found</h2>
      <p>The resource requested could not be found on this server!</p>
     <Link to="/">Home</Link> 
    </div>
    
  )
}

export default NotFoundPage