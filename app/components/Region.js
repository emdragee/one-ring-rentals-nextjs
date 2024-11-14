import React from "react";

// Region component
const Region = ({ name, location, image }) => (
  <div className="region-card">
    <div className="image-wrapper">
      <img className="region-image" src={image} alt={name} />
      <div className="overlay">
        <h3>{name}</h3>
        <p className="location">{location}</p>
      </div>
    </div>
  </div>
);

export default Region;