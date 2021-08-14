import styles from "../MovieDetails/MovieDetails.module.css";

export default function MovieDetails({
  poster_path,
  title,
  overview,
  genres,
  vote_average,
}) {
  return (
    <div className={styles.details}>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
      <div className={styles.descriptionBlock}>
        <h2 className={styles.generalTitle}>{title}</h2>
        <p className={styles.descriptionPart}>
          User Score: <span>{vote_average * 10}%</span>
        </p>
        <h3 className={styles.title}>Overview</h3>
        <p className={styles.descriptionPart}>{overview}</p>
        <h4 className={styles.title}>Genres</h4>
        <ul className={styles.listGenres}>
          {genres &&
            genres.map((genre) => (
              <li key={genre.id} className={styles.listEl}>
                {genre.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
