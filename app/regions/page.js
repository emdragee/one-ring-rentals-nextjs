"use client"; // remove this to generate the error

import PopularRegions from "../components/PopularRegions";
import Regions from "../components/Regions";



export default function RegionsPage() {
  return (
    <main >
      <PopularRegions></PopularRegions>
      <Regions></Regions>
    </main>
  );
}
