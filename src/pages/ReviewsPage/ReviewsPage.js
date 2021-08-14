import React, { useEffect, useState } from "react";
import * as moviesAPI from "../../services/movieApi";
import { useParams } from "react-router-dom";
import styles from "./ReviewsPage.module.css";

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
        <ul className={styles.list}>
          {reviews.map(({ author, content, id }) => (
            <li key={id} className={styles.listEl}>
              <h4 className={styles.author}>{author}</h4>
              <p className={styles.content}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.reviewNone}>
          We don`t have any reviews for this movie
        </p>
      )}
    </div>
  );
}
