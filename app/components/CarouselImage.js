import React from "react";
import Image from "react-bootstrap/Image";

function CarouselImage({ text }) {
  return (
    <Image
      src={`https://via.placeholder.com/1250x500.png?text=${encodeURIComponent(
        text
      )}`}
      alt={`Carousel slide - ${text}`}
      fluid
    />
  );
}

export default CarouselImage;
