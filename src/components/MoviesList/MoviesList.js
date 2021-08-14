import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MoviesList.module.css";

function MoviesList({ movies }) {
  return (
    <div>
      <ul className={styles.list}>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesList;
