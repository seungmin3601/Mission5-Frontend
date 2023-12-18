// PropertyCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "./PropertyCard.module.css";

export default function PropertyCard({ property }) {
  return (
    <div className={styles.card}>
      <div className={styles.topHalf}>
        <img
          src={property.image1}
          alt={property.name}
          className={styles.bigImage}
        />
        <div className={styles.rightImages}>
          <img
            src={property.image2}
            alt={property.name}
            className={styles.smallImage}
          />
          <img
            src={property.image3}
            alt={property.name}
            className={styles.smallImage}
          />
        </div>
      </div>
      <div className={styles.bottomHalf}>
        {/* Only the name is wrapped in the Link */}
        <Link
          to={`/property-information/${property._id}`}
          className={styles.link}
        >
          <h3>{property.name}</h3>
        </Link>
        <p>${property.rent} per week</p>
        <div className={styles.rooms}>
          <img
            className={styles.icon}
            src="/images/Bedroom Icon.png"
            alt="Bedroom Icon"
          />
          <p className={styles.roomNumber}>{property.bedrooms}</p>
          <img
            className={styles.icon}
            src="/images/Bathroom.png"
            alt="Bathroom Icon"
          />
          <p className={styles.roomNumber}>{property.shower}</p>
          <img className={styles.icon} src="/images/Car.png" alt="Car Icon" />
          <p className={styles.roomNumber}>{property.carparks}</p>
        </div>
      </div>
    </div>
  );
}
