import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="/images/MetroLogo.png"></img>
      <ul className={styles.nav_links}>
        <li>Home</li>
        <li>Property Owners</li>
        <li>Tenants</li>
        <li>News</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
