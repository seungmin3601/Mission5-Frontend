// App.js
import React from "react";
import ListedProperties from "./pages/ListedProperties/ListedProperties";
import PropertyInformation from "./pages/PropertyInformation/PropertyInformation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="listed-properties" element={<ListedProperties />} />
          <Route
            path="property-information/:propertyId"
            element={<PropertyInformation />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
