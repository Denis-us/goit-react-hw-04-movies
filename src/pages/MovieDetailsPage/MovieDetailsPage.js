import { useState, useEffect, lazy, Suspense } from "react";
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

import * as moviesAPI from "../../services/movieApi";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import CustomLoader from "../../components/Loader/Loader";
import style from "./MovieDetailsPage.module.css";

const CastPage = lazy(() =>
  import("../CastPage/CastPage.js" /* webpackChunkName: "CastPage" */)
);
const ReviewsPage = lazy(() =>
  import("../ReviewsPage/ReviewsPage" /* webpackChunkName: "ReviewsPage" */)
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const match = useRouteMatch();
  const history = useHistory();

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
        <MovieDetails
          poster_path={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
          genres={movie.genres}
          vote_average={movie.vote_average}
          id={movie.movieId}
        />
      )}

      <div>
        <h3 className={style.addInfo}>Additional information</h3>
        <hr />
        <ul className={style.list}>
          <li className={style.listEl}>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
              }}
              className={style.name}
            >
              Cast
            </NavLink>
          </li>
          <li className={style.listEl}>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
              }}
              className={style.name}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />

      <Suspense fallback={<CustomLoader />}>
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

MovieDetailsPage.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  vote_average: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
