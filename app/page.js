'use client';

import "../styles/globals.css";


// import CarouselComponent from "./components/CarouselComponent";
import ControlledCarousel from "./components/Carousel";
import AdvancedSearch from "./components/AdvancedSearch";
import Regions from "./components/Regions";
import PopularRegions from "./components/PopularRegions";
export default function HomePage() {

  return (
    <main>
      
   {/* <CarouselComponent></CarouselComponent> */}

   <ControlledCarousel></ControlledCarousel>
   <AdvancedSearch></AdvancedSearch>

   <div className="col col-sm-13">
   <PopularRegions></PopularRegions>
   </div>   

    </main>
  );
}
