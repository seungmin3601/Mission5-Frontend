import React from "react";
import { Link } from "react-router-dom";
import styles from "./MobilePropertyCard.module.css";

export default function MobilePropertyCard({ property }) {
  const truncatedName =
    property.name.length > 21
      ? `${property.name.substring(0, 21)}...`
      : property.name;

  return (
    <div className={styles.smallCard}>
      <Link
        to={`/property-information/${property._id}`}
        className={styles.link}
      >
        <img
          src={`/${property.image1}`}
          alt={property.name}
          className={styles.smallImage}
        />
        <h3 className={styles.truncatedName}>{truncatedName}</h3>
        <p className={styles.rent}>${property.rent} per week</p>
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
      </Link>
    </div>
  );
}
