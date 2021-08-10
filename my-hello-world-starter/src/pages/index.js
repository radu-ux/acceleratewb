import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import './tailwind.css';
import CompanyDescription from "../components/CompanyDescription";

export default function Home() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <CompanyDescription />
      <Services />
    </div>
  )
} 
