"use client"; // remove this to generate the error

import PopularRegions from "../components/PopularRegions";
import Regions from "../components/Regions";


export default function RegionsPage() {
  return (
    <main >
      <h2 className="section-title">Popular Regions</h2>
      <PopularRegions></PopularRegions>
      <h2 className="section-title">Regions</h2>
      <Regions></Regions>
    </main>
  );
}
