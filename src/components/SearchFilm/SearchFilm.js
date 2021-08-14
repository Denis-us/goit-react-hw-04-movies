import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import styles from "./SearchFilm.module.css";

export default function SearchFilm({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSearchFilm = (e) => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      return toast.error("Enter correct request!");
    }
    onSubmit(value);
    formReset();
  };

  const formReset = () => {
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          value={value}
          placeholder="Search movie"
          onChange={handleSearchFilm}
        />
        <button type="submit" className={styles.btnForm}>
          <span className={styles.textBtn}>Search</span>
        </button>
      </form>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

SearchFilm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
