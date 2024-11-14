'use client';

import "../styles/globals.css";


// import CarouselComponent from "./components/CarouselComponent";
import ControlledCarousel from "./components/Carousel";
import AdvancedSearch from "./components/AdvancedSearch";
export default function HomePage() {

  return (
    <main>
      
   {/* <CarouselComponent></CarouselComponent> */}

   <ControlledCarousel></ControlledCarousel>
   <AdvancedSearch></AdvancedSearch>

    </main>
  );
}
