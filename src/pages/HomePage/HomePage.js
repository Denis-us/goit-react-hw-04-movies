// import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import * as moviesAPI from "../../services/movieApi";
import PageHeading from "../../components/PageHeading/PageHeading";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  console.log(url);

  useEffect(() => {
    moviesAPI
      .fetchTrend()
      .then((results) => setMovies((movies) => [...movies, ...results]))
      .catch(console.log(Error));
  }, []);
  console.log(movies);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
