import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>Home page</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
