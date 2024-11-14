"use client"; // remove this to generate the error

import PopularRegions from "../components/PopularRegions";
import Regions from "../components/Regions";
import styles from "./styles.module.css";


export default function RegionsPage() {
  return (
    <main >
      <PopularRegions className={styles.regionimage}></PopularRegions>
      <Regions></Regions>
    </main>
  );
}
