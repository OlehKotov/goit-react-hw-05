import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import HomePage from "../../pages/HomePage/HomePage";

import css from "./Navigation.module.css";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
        
          
        </Routes>
      </main>
    </div>
  );
};

export default Navigation;
