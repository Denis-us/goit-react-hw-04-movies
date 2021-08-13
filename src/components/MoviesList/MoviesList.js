import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";

function MoviesList({ movies }) {
  const { url } = useRouteMatch();
  console.log(url);

  return (
    <div>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            {/* <Link to={`${url}/${id}`}>{original_title}</Link> */}
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
