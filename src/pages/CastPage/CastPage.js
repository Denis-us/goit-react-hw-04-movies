import React, { useEffect, useState } from "react";
import * as moviesAPI from "../../services/movieApi";
import { useParams } from "react-router-dom";
import defaultImg from "../../static/default.jpg";
import s from "../CastPage/CastPage.module.css";

export default function CastPage() {
  const { movieId } = useParams();
  const [cast, setcast] = useState([]);
  console.log(movieId);

  useEffect(() => {
    moviesAPI
      .fetchMovieCredits(movieId)
      .then(({ cast }) => {
        if (cast) {
          setcast(cast);
        }
      })
      .catch(console.log(Error));
  }, [movieId]);
  console.log(cast);

  return (
    <ul className={s.castList}>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            alt={id}
            src={
              profile_path
                ? `https://themoviedb.org/t/p/w200/${profile_path}`
                : defaultImg
            }
          />
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
}
