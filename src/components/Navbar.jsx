import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ className }) => {
  const [isNavActive, setNavActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.mainBar}>
      <div className={`${styles.navbars} ${className}`}>
        <img className={styles.logo} src="/images/MetroLogo.png" alt="Logo" />
        {isMobile && (
          <button className={styles.toggleButton} onClick={toggleNav}>
            &#x2630; {/* Unicode character for three horizontal lines */}
          </button>
        )}
        <ul className={`${styles.nav_links} ${isNavActive ? "active" : ""}`}>
          <li>Home</li>
          <li>Property Owners</li>
          <li>Tenants</li>
          <li>News</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
