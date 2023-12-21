import React, { useState } from "react";
import styles from "./Filter.module.css";

export default function Filter({ onClose, onSearch }) {
  const generatePriceOptions = () => {
    const options = [];
    for (let i = 0; i <= 1000; i += 100) {
      options.push(
        <option key={i} value={i}>
          ${i.toFixed(2)}
        </option>
      );
    }
    return options;
  };

  const generateBedroomOptions = () => {
    const options = [];
    for (let i = 0; i <= 5; i += 1) {
      options.push(
        <option key={i} value={i}>
          {i.toFixed(0)}
        </option>
      );
    }
    return options;
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.board}>
        <h5>Filter</h5>
        <div className={styles.line}></div>
        <div className={styles.propertyType}>
          <p>Property type</p>
          <div className={styles.checkbox}>
            <div className={styles.singleCheckbox}>
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox">House</label>
            </div>
            <div className={styles.singleCheckbox}>
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox">Townhouse</label>
            </div>
            <div className={styles.singleCheckbox}>
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox">Section</label>
            </div>
            <div className={styles.singleCheckbox}>
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox">Apartment</label>
            </div>
            <div className={styles.singleCheckbox}>
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox">Studio</label>
            </div>
            <div className={styles.singleCheckbox}>
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox">Unit</label>
            </div>
            <div className={styles.singleCheckbox}>
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox">Retirement Living</label>
            </div>
            <div className={styles.singleCheckbox}>
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox">Carpark</label>
            </div>
            <div className={styles.singleCheckbox}>
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox">Boat shed</label>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.priceBedroom}>
          <div className={styles.price}>
            <p>Price</p>
            <div className={styles.priceInputContainer}>
              <div className={styles.dropdown}>
                <select className={styles.dropdownSelect}>
                  {generatePriceOptions()}
                </select>
              </div>
              <span className={styles.separator}>-</span>
              <div className={styles.dropdown}>
                <select className={styles.dropdownSelect}>
                  {generatePriceOptions()}
                </select>
              </div>
            </div>
          </div>
          <div className={styles.bedroom}>
            <p>Bedroom</p>
            <div className={styles.bedroomInputContainer}>
              <div className={styles.dropdown}>
                <select className={styles.dropdownSelect}>
                  {generateBedroomOptions()}
                </select>
              </div>
              <span className={styles.separator}>-</span>
              <div className={styles.dropdown}>
                <select className={styles.dropdownSelect}>
                  {generateBedroomOptions()}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.bathroomPet}>
          <div className={styles.bedroom}>
            <p>Bathroom</p>
            <div className={styles.bedroomInputContainer}>
              <div className={styles.dropdown}>
                <select className={styles.dropdownSelect}>
                  {generateBedroomOptions()}
                </select>
              </div>
              <span className={styles.separator}>-</span>
              <div className={styles.dropdown}>
                <select className={styles.dropdownSelect}>
                  {generateBedroomOptions()}
                </select>
              </div>
            </div>
          </div>
          <div className={styles.pet}>
            <p>Pet friendly</p>
            <div className={styles.petBox}>
              <div className={styles.singleCheckbox}>
                <input type="checkbox" id="myCheckbox" />
                <label for="myCheckbox">Yes</label>
              </div>
              <div className={styles.singleCheckbox}>
                <input type="checkbox" id="myCheckbox" />
                <label for="myCheckbox">No</label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onClose}>
            Close
          </button>
          <button className={styles.button} onClick={onSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
