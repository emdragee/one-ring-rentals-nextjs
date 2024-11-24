import React from 'react';
import Guide from './Guide';
import travelGuideData from './travelGuideData';

const TravelGuideGridIndex = ({ className }) => {
  return (
    <div className={`content ${className}`}>
      <div className="container">
            <h1 className="section-title">Travel Guides</h1>
            <div className="grid-style1 row">
              {travelGuideData.map((guide, index) => (
                <Guide key={index} {...guide} imageClass="home-guide-image" />
              ))}
            </div>
      </div>
    </div>
  );
};

export default TravelGuideGridIndex;
