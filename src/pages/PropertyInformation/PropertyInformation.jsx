// PropertyInformation.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PropertyInformation.module.css";
import Navbar from "../../components/Navbar";

export default function PropertyInformation() {
  const { propertyId } = useParams();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch all properties from the backend
    fetch("http://localhost:5001/")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  // Find the property that matches the selected ID
  const selectedProperty = properties.find(
    (property) => property._id === propertyId
  );

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.lineBelowNavbar}></div>
      <p className={styles.directory}>
        Home &gt; Find a Rental &gt; Auckland Region &gt; Property Information
      </p>
      <div className={styles.propertyDetails}>
        {selectedProperty ? (
          <>
            <h2 className={styles.name}>{selectedProperty.name}</h2>
            <div className={styles.imagesContainer}>
              {/* Provide the correct path to the image */}
              <img
                src={`/${selectedProperty.image1}`}
                alt={selectedProperty.name}
                className={styles.bigImage}
              />
              <div className={styles.rightImages}>
                <img
                  src={`/${selectedProperty.image2}`}
                  alt={selectedProperty.name}
                  className={styles.smallImage}
                />
                <img
                  src={`/${selectedProperty.image3}`}
                  alt={selectedProperty.name}
                  className={styles.smallImage}
                />
                <img
                  src={`/${selectedProperty.image4}`}
                  alt={selectedProperty.name}
                  className={styles.smallImage}
                />
                <img
                  src={`/${selectedProperty.image5}`}
                  alt={selectedProperty.name}
                  className={styles.smallImage}
                />
              </div>
            </div>
            <div className={styles.descriptionContainer}>
              <div className={styles.description1}>
                <div className={styles.leftDescription1}>
                  <h2 className={styles.rent}>
                    ${selectedProperty.rent} per week
                  </h2>
                  <div className={styles.rooms}>
                    <img
                      src="/images/Bedroom Icon.png"
                      className={styles.icon}
                    ></img>
                    <p className={styles.roomNumber}>
                      {selectedProperty.bedrooms}
                    </p>
                    <img
                      src="/images/Bathroom.png"
                      className={styles.icon}
                    ></img>
                    <p className={styles.roomNumber}>
                      {selectedProperty.shower}
                    </p>
                    <img src="/images/Car.png" className={styles.icon}></img>
                    <p className={styles.roomNumber}>
                      {selectedProperty.carparks}
                    </p>
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <button className={styles.orangeButton}>Back</button>
                  <button className={styles.redButton}>Book a Viewing</button>
                  <button className={styles.redButton}>
                    Apply For Tenancy
                  </button>
                </div>
              </div>
              <div className={styles.description2}>
                <div className={styles.availableBond}>
                  <p>Available from: {selectedProperty.availabilityDate}</p>
                  <p>Bond: ${selectedProperty.bond}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading property information...</p>
        )}
      </div>
    </div>
  );
}
