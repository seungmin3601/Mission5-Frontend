import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PropertyInformation.module.css";
import Navbar from "../../components/Navbar";
import SmallPropertyCard from "./SmallPropertyCard";
import SmallPropertyCardStyles from "./SmallPropertyCard.module.css";

export default function PropertyInformation() {
  const { propertyId } = useParams();
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestedProperties, setSuggestedProperties] = useState([]);

  useEffect(() => {
    // Fetch properties based on the search term
    fetch(`http://localhost:5001/?search=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, [searchTerm]);

  // Find the property that matches the selected ID
  const selectedProperty = properties.find(
    (property) => property._id === propertyId
  );

  // Shuffle the properties array and get the first two as suggested properties
  useEffect(() => {
    const shuffledProperties = [...properties].sort(() => Math.random() - 0.5);
    const firstTwoProperties = shuffledProperties.slice(0, 2);
    setSuggestedProperties(firstTwoProperties);
  }, [propertyId, properties]);

  const handleSearch = () => {
    // You can perform actions related to searching here, e.g., updating the component state, fetching data, etc.
    console.log("Searching for:", searchTerm);
  };

  // Scroll to the top when the component mounts or propertyId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [propertyId]);

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
                      alt="Bedroom Icon"
                    />
                    <p className={styles.roomNumber}>
                      {selectedProperty.bedrooms}
                    </p>
                    <img
                      src="/images/Bathroom.png"
                      className={styles.icon}
                      alt="Bathroom Icon"
                    />
                    <p className={styles.roomNumber}>
                      {selectedProperty.shower}
                    </p>
                    <img
                      src="/images/Car.png"
                      className={styles.icon}
                      alt="Car Icon"
                    />
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
                  <p>
                    <span>
                      Available from:{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {selectedProperty.availabilityDate}
                      </span>
                    </span>
                  </p>
                  <p>
                    <span>
                      Bond:{" "}
                      <span style={{ fontWeight: "bold" }}>
                        ${selectedProperty.bond}
                      </span>
                    </span>
                  </p>
                </div>
                <div className={styles.propertyFeatures}>
                  <div className={styles.featuresList}>
                    {selectedProperty.features
                      .split(",")
                      .map((feature, index) => (
                        <div key={index} className={styles.featureItem}>
                          <img
                            src="/images/Tick.png"
                            className={styles.tickIcon}
                            alt="Tick Icon"
                          />
                          {feature.trim()}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <p className={styles.propertyDescription}>
                {selectedProperty.description}
              </p>
              <div className={styles.belowDescription}>
                <div className={styles.threeItems}>
                  Council Records
                  <img
                    src="/images/Document.png"
                    className={styles.threeIcons}
                    alt="Document Icon"
                  />
                </div>
                <div className={styles.threeItems}>
                  Property History
                  <img
                    src="/images/History.png"
                    className={styles.threeIcons}
                    alt="History Icon"
                  />
                </div>
                <div className={styles.threeItems}>
                  Owner Updated Info
                  <img
                    src="/images/Info.png"
                    className={styles.threeIcons}
                    alt="Info Icon"
                  />
                </div>
              </div>
              <div className={styles.map}>
                <h3 className={styles.underline}>Map:</h3>
                <div className={styles.mapContainer}>
                  <div className={styles.block}>
                    <div className={styles.content}>
                      <img src="/images/Location.png" alt="Location icon" />
                      <p>Location</p>
                    </div>
                  </div>
                  <div className={styles.separator}></div>
                  <div className={styles.block}>
                    <div className={styles.content}>
                      <img src="/images/School.png" alt="School icon" />
                      <p>School</p>
                    </div>
                  </div>
                  <div className={styles.separator}></div>
                  <div className={styles.block}>
                    <div className={styles.content}>
                      <img src="/images/Transport.png" alt="Transport icon" />
                      <p>Commute</p>
                    </div>
                  </div>
                </div>
                <div className={styles.bottomContainer}>
                  <div className={styles.leftBottom}>
                    <h4 className={styles.bottomText}>You might also like</h4>
                    <div
                      className={SmallPropertyCardStyles.suggestedProperties}
                    >
                      {suggestedProperties.map((property) => (
                        <SmallPropertyCard
                          key={property._id}
                          property={property}
                        />
                      ))}
                    </div>
                  </div>
                  <div className={styles.rightBottom}>
                    <h4 className={styles.bottomText}>Search again</h4>
                    <p>
                      Enter a town, city, region or postcode into the search box
                      and we’ll show properties in or around that area
                    </p>
                    <div className={styles.searchBarContainer}>
                      <div className={styles.searchBar}>
                        <input
                          type="text"
                          placeholder="Start typing..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                      </div>
                    </div>
                  </div>
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
