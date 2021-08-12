// key b4cae661bd383c29838501f5623954e9
import { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";
import * as fetch from "../services/services";
import MovieDetailsPage from "./MovieDetailsPage";

export default function HomePage() {
  // const {match} = useRouteMatch();
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    fetch.getTrending().then(setTrendingMovies);
  }, []);

  return (
    <>
      <ul>
        {trendingMovies &&
          trendingMovies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>
                {movie.original_title}
              </NavLink>
            </li>
          ))}
      </ul>

      <Route path="/movies/:movieId" exact>
        {trendingMovies && <MovieDetailsPage movies={trendingMovies} />}
      </Route>
    </>
  );
}
