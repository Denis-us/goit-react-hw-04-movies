// key b4cae661bd383c29838501f5623954e9
import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import * as fetch from "../services/services";

export default function MoviesPage() {
  // const {match} = useRouteMatch();
  const [searchMovies, setSearchMovies] = useState(null);

  useEffect(() => {
    fetch.searchMovies().then(setSearchMovies);
  }, []);

  return (
    <>
      <form type="submit">
        <input type></input>

        <button>Search</button>
      </form>
    </>
  );
}
