// Searchbar.jsx
import React from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar({ className }) {
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
      <button className={styles.searchButton}>Search</button>
    </div>
  );
}
