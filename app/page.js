'use client';

import "../styles/globals.css";
import {useTheme} from './context/ThemeContext';
import ControlledCarousel from "./components/Carousel";

export default function HomePage() {
  const {theme, toggleTheme} = useTheme();
  return (
    <main className={`min-vh-100 ${theme == 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
      <h1>Welcome to the App Router in Next.js 14</h1>
      <ControlledCarousel />
      <button className="btn btn-primary" onClick={toggleTheme}>Toggle Theme</button>
    </main>
  );
}

