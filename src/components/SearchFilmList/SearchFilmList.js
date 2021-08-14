import React from "react";
import PropTypes from "prop-types";
import { NavLink, useRouteMatch } from "react-router-dom";
import styles from "./SearchFilmList.module.css";

export default function FilmsList({ films }) {
  const { url } = useRouteMatch();

  return (
    <ul className={styles.list}>
      {films.map(({ id, original_title }) => (
        <li key={id}>
          <NavLink to={`${url}/${id}`}>{original_title}</NavLink>
        </li>
      ))}
    </ul>
  );
}

FilmsList.propTypes = {
  films: PropTypes.array.isRequired,
};
