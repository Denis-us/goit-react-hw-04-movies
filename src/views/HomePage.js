// key b4cae661bd383c29838501f5623954e9
import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as fetch from "../services/services";

export default function HomePage() {
  // const {match} = useRouteMatch();
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    fetch.getTrending().then(setTrendingMovies);
  }, []);

  return (
    <>
      {trendingMovies &&
        trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
    </>
  );
}
