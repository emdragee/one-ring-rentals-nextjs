'use client';

import "../styles/globals.css";


// import CarouselComponent from "./components/CarouselComponent";
import ControlledCarousel from "./components/Carousel";
import AdvancedSearch from "./components/AdvancedSearch";
import PopularRegions from "./components/PopularRegions";
export default function HomePage() {

  return (
    <main>
      
   {/* <CarouselComponent></CarouselComponent> */}

   <ControlledCarousel></ControlledCarousel>
   <AdvancedSearch></AdvancedSearch>

   <div className="col col-sm-13 regions-home-page">
   <PopularRegions></PopularRegions>
   </div>   

    </main>
  );
}
