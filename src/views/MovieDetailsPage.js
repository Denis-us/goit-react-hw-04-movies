// key b4cae661bd383c29838501f5623954e9
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as fetch from "../services/services";

export default function MovieDetailsPage({ movies }) {
  const { movieId } = useParams();
  console.log(movies);
  const movie = movies.find((movie) => movie.id === Number(movieId));

  // const [movie, setMovie] = useState();

  // useEffect(() => {
  //   const getMovieDetales = async (movieId) => {
  //     try {
  //         const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b4cae661bd383c29838501f5623954e9`);
  //         const json = await response.json();
  //         console.log(json);
  //         setMovie(json);
  //     } catch (error) {
  //         console.log("error", error);
  //     }

  // };
  // getMovieDetales()

  //   fetch.getMovieDetales(movieId).then(console.log).then(setMovie(json.backdrop_path))
  //   setMovie(backdrop_path)
  // }, [movieId]);

  console.log(movie);

  return (
    <>
      <h2>{movieId}</h2>
      {/* {movie && (
        <>
          <img src={movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.genres}</p>
          <p>{movie.overview}</p>
          <p>{movie.vote_average}</p>
          <p>{movie.id}</p>
        </>
      )} */}
    </>
  );
}
