import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    { text: "First", label: "First slide label", description: "This is the first slide description." },
    { text: "Second", label: "Second slide label", description: "This is the second slide description." },
    { text: "Third", label: "Third slide label", description: "This is the third slide description." },
    { text: "Fourth", label: "Fourth slide label", description: "This is the fourth slide description." },
  ];

  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <CarouselImage text={slide.text} />
            <Carousel.Caption>
              <h3>{slide.label}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
