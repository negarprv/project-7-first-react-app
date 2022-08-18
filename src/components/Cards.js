import React, { Component } from "react";

import styles from "./Cards.module.css";
import Card from "./Card";
import photo1 from "../images/photo-1.jpg";
import photo2 from "../images/photo-2.jpg";
import photo3 from "../images/photo-3.jpg";
import photo4 from "../images/photo-4.jpg";

class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={photo1} name="Persian Carpet" />
        <Card image={photo2} name="Persian Miniature" />
        <Card image={photo3} name="Persian Calligraphy" />
        <Card image={photo4} name="Persian Tiling" />
      </div>
    );
  }
}

export default Cards;
