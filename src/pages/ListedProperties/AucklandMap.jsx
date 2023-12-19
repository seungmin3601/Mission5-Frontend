import React, { useEffect } from "react";
import * as atlas from "azure-maps-control";
import "azure-maps-control/dist/atlas.min.css";
import styles from "./AucklandMap.module.css"; // Import the CSS file

export default function AucklandMap({ properties }) {
  useEffect(() => {
    // Initialize Azure Maps control
    const map = new atlas.Map("mapContainer", {
      center: [174.7633, -36.8485], // Auckland coordinates
      zoom: 10,
      authOptions: {
        authType: atlas.AuthenticationType.subscriptionKey,
        subscriptionKey: "jRdOonUQH0hkO4FFLgGKuojloKcEHAYVGTC0r-HYvQI",
      },
    });

    // Add pushpins for each property
    properties.forEach((property) => {
      const pin = new atlas.HtmlMarker({
        position: [property.coordinate2, property.coordinate1], // Note the order of coordinates
        htmlContent: `<div class="${styles.pin}"></div>`,
      });

      map.markers.add(pin);
    });

    // Add any additional map customization or data layers here

    return () => {
      // Clean up resources when the component is unmounted
      map.dispose();
    };
  }, [properties]); // Add properties as a dependency to re-render when properties change

  const mapContainerStyle = {
    height: "600px", // Set the desired height
    width: "91%", // Set the desired maxWidth
    margin: "0 auto",
    marginLeft: "60px", // Set the desired left margin
    marginTop: "40px",
  };

  return <div id="mapContainer" style={mapContainerStyle}></div>;
}
