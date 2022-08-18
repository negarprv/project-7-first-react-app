import React, { Component } from "react";
import styles from "./Search.module.css";

class Search extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <p>Search for more Persian Art &nbsp; &nbsp; &nbsp; &rarr;</p>
          <input placeholder="Search..." />
        </div>
      </div>
    );
  }
}

export default Search;
