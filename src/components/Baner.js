import React from "react";
import styles from "./Baner.module.css";
import hero from "../images/hero.jpeg";

const Baner = () => {
  return (
    <div className={styles.container}>
      <img src={hero} alt="banner" className={styles.banner} />
      <div className={styles.textContainer}>
        <h1>Negar Parvaresh</h1>
        <p>I'm learning React.js</p>
      </div>
    </div>
  );
};

export default Baner;
