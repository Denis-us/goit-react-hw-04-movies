// key b4cae661bd383c29838501f5623954e9
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as fetch from "../services/services";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch.getMovieDetales(movieId).then(setMovie).console.getMovieDetales();
  }, [movieId]);

  return (
    <>
      <h2>{movieId}</h2>
      {movie && (
        <>
          <img src={movie.poster_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.genres}</p>
          <p>{movie.overview}</p>
          <p>{movie.vote_average}</p>
          <p>{movie.id}</p>
        </>
      )}
    </>
  );
}
