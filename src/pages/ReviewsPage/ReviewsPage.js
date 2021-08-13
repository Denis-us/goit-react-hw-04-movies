import React, { useEffect, useState } from "react";
import * as moviesAPI from "../../services/movieApi";
import { useParams } from "react-router-dom";

export default function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesAPI.fetchMoviesReviews(movieId).then(({ results }) => {
      if (results) {
        setReviews(results);
      }
    });
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </div>
  );
}
