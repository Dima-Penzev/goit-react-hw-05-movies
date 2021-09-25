import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import s from "./FilmsList.module.css";

function FilmsList({ films }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {films.map((film) => (
        <li className={s.item} key={film.id}>
          <Link
            to={{
              pathname: `/movies/${film.id}`,
              state: { from: location },
            }}
          >
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default FilmsList;
