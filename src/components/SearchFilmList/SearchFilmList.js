import React from "react";
import PropTypes from "prop-types";
import { NavLink, useRouteMatch } from "react-router-dom";

export default function FilmsList({ films }) {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <ul>
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
