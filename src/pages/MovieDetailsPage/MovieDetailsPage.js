import { useParams } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import {
  Route,
  useRouteMatch,
  // useLocation,
  useHistory,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import * as moviesAPI from "../../services/movieApi";
import MovieDatails from "../../components/MovieDetails/MovieDetails";
// import routes from "../../routes";
// import PropTypes from "prop-types";
// import CastPage from "../CastPage/CastPage";
// import ReviewsPage from "../ReviewsPage/ReviewsPage";
const CastPage = lazy(() =>
  import("../CastPage/CastPage.js" /* webpackChunkName: "CastPage" */)
);
const ReviewsPage = lazy(() =>
  import("../ReviewsPage/ReviewsPage" /* webpackChunkName: "ReviewsPage" */)
);

export default function MovieDatailsPage() {
  const { movieId } = useParams();
  const match = useRouteMatch();
  // const location = useLocation();
  const history = useHistory();
  console.log(history);
  const [movie, setMovie] = useState({
    poster_path: null,
    title: null,
    overview: null,
    vote_average: null,
    genres: null,
    id: null,
  });

  useEffect(() => {
    moviesAPI
      .fetchMovieDetails(movieId)
      .then(({ poster_path, title, overview, vote_average, genres, id }) =>
        setMovie({
          poster_path,
          title,
          overview,
          genres,
          vote_average,
          id,
        })
      )
      .catch(console.log(Error));
  }, [movieId]);

  const buttonGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <Button
        type="button"
        onClick={buttonGoBack}
        variant="outlined"
        color="primary"
      >
        Go back
      </Button>

      {movie && (
        <MovieDatails
          poster_path={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
          genres={movie.genres}
          vote_average={movie.vote_average}
          id={movie.movieId}
        />
      )}

      <div>
        <h3>Additional information</h3>
        <hr />
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Route path={`${match.path}/cast`}>
          <CastPage />
        </Route>

        <Route path={`${match.path}/reviews`}>
          <ReviewsPage />
        </Route>
      </Suspense>
    </>
  );
}

// MovieDatailsPage.propTypes = {
//   poster_path: PropTypes.string,
//   title: PropTypes.string,
//   overview: PropTypes.string.isRequired,
//   genres: PropTypes.array.isRequired,
//   vote_average: PropTypes.number.isRequired,
//   id: PropTypes.number.isRequired,
// }
