import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import css from "./NotFoundPage.module.css"

const NotFoundPage = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (timer === 5) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className={css.notFoundWrap}>
      <h1>404</h1>
      <h2>Not found</h2>
      <p>The resource requested could not be found on this server!</p>
      <p>You will be redirected to Home in <span>{5 - timer}</span> </p>
      <Link className={css.goBack} to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
