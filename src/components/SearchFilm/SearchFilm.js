import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

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
      <form onSubmit={handleSubmit} className="SearchForm">
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          value={value}
          autoFocus
          placeholder="Search movie"
          onChange={handleSearchFilm}
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </div>
  );
}

SearchFilm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
