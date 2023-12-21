// Searchbar.jsx
import React from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar({ className, onFilterClick }) {
  const isMobile = window.innerWidth <= 390;

  return (
    <div className={`${styles.container} ${className}`}>
      <button
        className={styles.filterButton}
        onClick={onFilterClick}
        title="Click to open filters"
      >
        <span>
          <img
            className={styles.filterIcon}
            src="/images/Filter.png"
            alt="Filter"
          />
        </span>
      </button>
      <button
        className={styles.textButton}
        onClick={onFilterClick}
        title="Click to open filters"
      >
        Filters
      </button>

      {isMobile ? (
        <button
          className={`${styles.searchButton} ${styles.mobileSearchButton}`}
        >
          <img src="/images/Search.png" alt="Search" />
        </button>
      ) : (
        <button className={styles.searchButton} title="Click to search">
          Search
        </button>
      )}
    </div>
  );
}
