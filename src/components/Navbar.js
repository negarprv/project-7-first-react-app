import React from "react";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li>
            <Link to="/"> Home page</Link>
          </li>
          <li>
            <Link to="/provinces">Provinces</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
