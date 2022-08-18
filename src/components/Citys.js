import React, { Component } from "react";
import styles from "./Citys.module.css";
import City from "./City";
import photo1 from "../images/esfahan2.jpg";
import photo2 from "../images/shiraz.jpg";
import photo3 from "../images/mashhad.jpg";
import photo4 from "../images/tehran2.jpg";

class Citys extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Iran's famous cities</h1>
        <City image={photo1} name="Naghshe Jahan Squere in Esfahan" />
        <City image={photo2} name="Nasir al-Mulk Mosque in Shiraz" />
        <City image={photo3} name="Imam Reza Holy Shrine in Mashhad" />
        <City image={photo4} name="Azadi Tower in Tehran" />
      </div>
    );
  }
}

export default Citys;
