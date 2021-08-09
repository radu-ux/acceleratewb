import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import './tailwind.css';

export default function Home() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <Services />
    </div>
  )
} 
