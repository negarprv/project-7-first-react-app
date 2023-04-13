import React from "react";
import styles from "./Province.module.css";

const Province = (props) => {
  const { row, name } = props;
  return (
    <div className={styles.container}>
      <p>{row}</p>
      <p>{name}</p>
    </div>
  );
};

export default Province;
