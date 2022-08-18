import React, { Component } from "react";

import styles from "./Card.module.css";

class Card extends Component {
  render() {
    const { image, name } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <img src={image} className={styles.img} alt="persian" />
          <h3>{name}</h3>
        </div>
      </div>
    );
  }
}

export default Card;
