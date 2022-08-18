import React, { Component } from "react";
import styles from "./City.module.css";

class City extends Component {
  render() {
    const { image, name } = this.props;
    return (
      <div className={styles.container}>
        <img src={image} alt="iran cities" />
        <div className={styles.box}>
          <h3>{name}</h3>
          <button>Learn more &rarr;</button>
        </div>
      </div>
    );
  }
}

export default City;
