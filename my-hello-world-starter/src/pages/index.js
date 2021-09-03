import React from "react";
import Navigation from "../components/Navigation";
import Services from "../components/Services";
import CompanyDescription from "../components/CompanyDescription";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import styled from "styled-components";
import './tailwind.css';
import "aos/dist/aos.css";

const HomePageBody = styled.div`
  font-family: 'Baloo Chettan 2';
`;

export default function Home() {
  return (
    <HomePageBody className="overflow-hidden">
      <Navigation />
      <div className="flex flex-col space-y-20">
        <CompanyDescription />
        <Services />
        <Separator />
        <Technologies />
      </div>
      <Footer />
    </HomePageBody>
  )
} 
