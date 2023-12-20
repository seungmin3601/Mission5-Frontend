// ListedProperties.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ListedProperties.module.css";
import Navbar from "../../components/Navbar";
import Searchbar from "../../components/Searchbar";
import AucklandMap from "./AucklandMap";
import PropertyCard from "./PropertyCard";
import MobilePropertyCard from "./MobilePropertyCard"; // Import the mobile version

export default function ListedProperties() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const isMobile = window.innerWidth <= 390; // Check if the screen width is mobile

  useEffect(() => {
    // Fetch properties from the backend
    fetch("http://localhost:5001/")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  // Function to get the current page's properties
  const getCurrentPageProperties = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return properties.slice(startIndex, endIndex);
  };

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.lineBelowNavbar}></div>
      {/* Remove the directory for mobile */}
      {!isMobile && (
        <p className={styles.directory}>
          Home &gt; Find a Rental &gt; Auckland Region
        </p>
      )}
      <Searchbar className={styles.searchbar} />
      <h2 className={styles.auckland}>Auckland, New Zealand Homes for Rent</h2>
      <AucklandMap properties={properties} />
      <div className={styles.propertyContainer}>
        <div className={styles.propertyList}>
          {getCurrentPageProperties().map((property) =>
            // Conditionally render the appropriate card based on screen width
            isMobile ? (
              <MobilePropertyCard key={property._id} property={property} />
            ) : (
              <PropertyCard key={property._id} property={property} />
            )
          )}
        </div>
      </div>
      <div className={styles.pagination}>
        {Array.from(
          { length: Math.ceil(properties.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={
                currentPage === index + 1 ? styles.activePage : styles.page
              }
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
