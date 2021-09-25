import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <NavLink exact className={s.navItem} activeClassName={s.active} to="/">
        Home
      </NavLink>
      <NavLink className={s.navItem} activeClassName={s.active} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
