import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

const CustomLoader = () => {
  return (
    <div className={styles.loader}>
      <Loader
        type="Bars"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000}
      />
    </div>
  );
};

export default CustomLoader;
