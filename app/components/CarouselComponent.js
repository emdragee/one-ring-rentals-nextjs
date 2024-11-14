import React from "react";
import { Carousel } from "react-bootstrap";

const carouselItems = [
  {
    id: "slide1",
    title: "Breathtaking views",
    subtitle: "This is Hobart",
    style: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1550985164-a0cfcf77eab2?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      backgroundSize: "cover",
      backgroundPosition: "left center",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      backgroundBlendMode: "multiply",
      height: "400px", // Set a fixed height for the carousel
      color: "#fff", // Text color for better contrast
    },
  },
  {
    id: "slide2",
    title: "The simple life",
    subtitle: "Gara Mocănița Huțulca, Moldovița, Romania",
    style: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1623525047508-4aea4c5a58c4?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      backgroundSize: "cover",
      backgroundPosition: "left center",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      backgroundBlendMode: "multiply",
      height: "400px",
      color: "#fff",
    },
  },
];

const CarouselComponent = () => {
  return (
    <Carousel>
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          {/* Styled background div */}
          <div
            style={{
              ...item.style,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <a href="#" className="btn btn-default btn-lg">
                Learn More
              </a>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
