// key b4cae661bd383c29838501f5623954e9
import { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { toast } from "react-toastify";
import * as fetch from "../services/services";

export default function MoviesPage() {
  // const {match} = useRouteMatch();
  const [searchMovie, setSearchMovie] = useState(null);

  useEffect(() => {
    fetch.searchMovies(searchMovie).then(setSearchMovie);
  }, [searchMovie]);

  // const onSubmit = (searchMovie) => {
  //   setSearchMovie(searchMovie);
  // };

  const handleNameChange = (e) => {
    setSearchMovie(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (searchMovie.trim() === "") {
    //   toast.error("Введите название фильма");
    //   return;
    // }

    // onSubmit(searchMovie);
    // setSearchMovie("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleNameChange} />

        <button type="submit">Search</button>
      </form>
    </>
  );
}
