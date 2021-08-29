import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import CompanyDescription from "../components/CompanyDescription";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import './tailwind.css';
import "aos/dist/aos.css";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <CompanyDescription />
      <Services />
      <Separator />
      <Technologies />
      <Footer />
    </div>
  )
} 
