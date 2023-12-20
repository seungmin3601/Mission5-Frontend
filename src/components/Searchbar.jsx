// Searchbar.jsx
import React from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar({ className }) {
  const isMobile = window.innerWidth <= 390;

  return (
    <div className={`${styles.container} ${className}`}>
      <button className={styles.filterButton}>
        <span>
          <img
            className={styles.filterIcon}
            src="/images/Filter.png"
            alt="Filter"
          />
        </span>
      </button>
      <button className={styles.textButton}>Filters</button>

      {isMobile ? (
        <button
          className={`${styles.searchButton} ${styles.mobileSearchButton}`}
        >
          <img src="/images/Search.png" alt="Search" />
        </button>
      ) : (
        <button className={styles.searchButton}>Search</button>
      )}
    </div>
  );
}
