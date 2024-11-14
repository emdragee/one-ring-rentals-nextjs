import React from "react";
import Image from "react-bootstrap/Image";

function CarouselImage({ text, url }) {
  
  return (
    <Image
      src={url}
      alt={text}
      fluid
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        
      }}
    />
  );
}

export default CarouselImage;
