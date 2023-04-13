import React from "react";
import styles from "./Provinces.module.css";
import Province from "./Province";

const Provinces = () => {
  const { ostan } = require("iran-cities-json");
  console.log(ostan);
  return (
    <div className={styles.container}>
      <h1>Iran provinces</h1>
      <div className={styles.provinces}>
        {ostan.map((province) => (
          <Province key={province.id} name={province.name} row={province.id} />
        ))}
      </div>
    </div>
  );
};

export default Provinces;
