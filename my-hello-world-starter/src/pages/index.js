import React from "react";
import Navigation from "../components/Navigation";
import Intro from "../components/Intro";
import Services from "../components/Services";
import './tailwind.css';

export default function Home() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <Services />
    </div>
  )
} 
