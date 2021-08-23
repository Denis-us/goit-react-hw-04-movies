import React from "react";
import PropTypes from "prop-types";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import styles from "./SearchFilmList.module.css";

export default function FilmsList({ films }) {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {films.map(({ id, original_title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `${url}/${id}`,
              state: { from: location },
            }}
          >
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};
