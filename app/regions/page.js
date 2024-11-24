"use client"; // remove this to generate the error

import PopularRegions from "../components/PopularRegions";
import Regions from "../components/Regions";



export default function RegionsPage() {
  return (
    <div className="main col-sm-12">
      <PopularRegions></PopularRegions>
      <Regions></Regions>
    </div>
  );
}

