import React from 'react';
import { useEffect, useRef, useLayoutEffect, useState } from "react";
import { useScrollState } from 'scrollmonitor-hooks';
import HeroImage from '../images/building_websites.svg'; 
import LogoMobile from '../images/acceleratewb.png';
import LogoStandard from '../images/acceleratewb.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    const headerRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);
    const HeroImageRef = useRef(null);
    const HeroSectionRef = useRef(null);
    const CatchingPhraseRef = useRef(null);
    const phoneNavBarRef = useRef(null);
    const heroSectionScrollRef = useScrollState(HeroSectionRef);
    const [isPhoneNavBaOpen, setPhoneNavBaOpen] = useState(false);
  
    const handlePhoneMenu = () => {
      if(isPhoneNavBaOpen) {
        phoneNavBarRef.current.className = "hidden";
      } else {
        phoneNavBarRef.current.className = "flex flex-col items-center absolute top-20 py-4 bg-white shadow-lg w-full z-10 fixed md:hidden";
      }

      setPhoneNavBaOpen(!isPhoneNavBaOpen);
    }

    useEffect(() => {
      HeroImageRef.current.className += ' scale-100';
      CatchingPhraseRef.current.className += ' scale-100';
      Aos.init({duration: 800});
    })

    useLayoutEffect(() => {
        const heroSectionYPos = HeroSectionRef.current.getBoundingClientRect().y;
        if(heroSectionYPos < 0 ) {
          headerRef.current.className = "flex flex-col md:flex-row justify-between sticky top-0 z-50 bg-white shadow-lg";
          homeRef.current.className = "text-xl mr-8 border-b-2 hover:border-yellow-500 hover:transition duration-300 ease-in border-transparent"; 
          aboutRef.current.className = "text-xl mr-8 border-b-2 hover:border-yellow-500 hover:transition duration-300 ease-in border-transparent";
          servicesRef.current.className = "text-xl mr-8 border-b-2 hover:border-yellow-500 hover:transition duration-300 ease-in border-transparent";
          contactRef.current.className = "text-xl mr-8 border-b-2 hover:border-yellow-500 hover:transition duration-300 ease-in border-transparent";
        } else {
          headerRef.current.className= "flex flex-col md:flex-row justify-between sticky top-0 z-50 md:bg-yellow-500";
          homeRef.current.className = "text-xl mr-8 border-b-2 md:hover:border-white hover:transition duration-300 ease-in border-transparent md:text-white"; 
          aboutRef.current.className = "text-xl mr-8 border-b-2 md:hover:border-white hover:transition duration-300 ease-in border-transparent md:text-white"
          servicesRef.current.className = "text-xl mr-8 border-b-2 md:hover:border-white hover:transition duration-300 ease-in border-transparent md:text-white"
          contactRef.current.className = "text-xl mr-8 border-b-2 md:hover:border-white hover:transition duration-300 ease-in border-transparent md:text-white"
        }
      })

    return (
        <>
        <header ref={headerRef} className="z-10 fixed w-full">
            {/* Logo image */}
            <button className="w-36 h-20 md:w-44 md:h-24 mx-auto md:ml-10 lg:ml-16 xl:mx-28 2xl:mx-36">
              <img src={LogoMobile} alt="acceleratewb-logo-image" onClick={handlePhoneMenu} />
            </button>
            {/* Navigation links */}
            <div className="flex justify-around items-center hidden md:flex sm:mr-4 md:mr-10 lg:mr-16 xl:mx-28 2xl:mx-36 font-mono">
                <a href="#" ref={homeRef}>Acasa</a>
                <a href="#" ref={aboutRef}>Despre Noi</a>
                <a href="#" ref={servicesRef}>Servicii</a>
                <a href="#" ref={contactRef}>Contact</a>
            </div>

            <div className="hidden" ref={phoneNavBarRef}>
                <a className="text-lg mb-2 border-b-2 hover:border-yellow-500" href="#">Acasa</a>
                <a className="text-lg mb-2 border-b-2 hover:border-yellow-500" href="#">Despre Noi</a>
                <a className="text-lg mb-2 border-b-2 hover:border-yellow-500" href="#">Servicii</a>
                <a className="text-lg mb-2 border-b-2 hover:border-yellow-500" href="#">Contact</a>
            </div>
        </header>
        {/* Hero Image section */}
        <div className="flex flex-col pt-16 md:flex-col lg:flex-row lg:pt-10 lg:justify-between scale-0 bg-gradient-to-b from-yellow-500 to-yellow-400 font-mono" ref={HeroSectionRef}>
          {/* Catching phrase */}
          <div className="flex flex-col my-auto sm:mx-4 md:mx-10 lg:ml-16 xl:ml-28 xl:mb-20 2xl:ml-36 2xl:mt-10 transform transition-all delay-500 duration-500 ease-in-out scale-0" ref={CatchingPhraseRef}>
            <p className="my-18 uppercase text-4xl mx-4 sm:mx-0 sm:text-4xl md:text-5xl lg:text-5xl lg:mt-16 xl:text-5xl 2xl:text-7xl font-extrabold text-black">
              Aici pentru a-ti duce afacerea la un alt nivel
            </p>
            <p className="text-xl mx-4 sm:text-xl sm:mx-0 md:text-2xl font-thin text-black mt-10">Construim websiteuri specifice modelului tau de business</p>
            <p className="text-xl mx-4 sm:text-xl sm:mx-0 md:text-2xl font-thin text-black py-4">Regandim designul siteului tau curent si ii imbunatatim traficul folosind principiile SEO</p>
            <a className="my-6 py-2 px-2 border-2 rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-black hover:text-white" href="#">
              Afla mai multe
            </a>
          </div>
          {/* Hero Image */}
          <img className="sm:w-8/12 lg:w-1/2 lg:mr-10 xl:w-5/12 xl:mb-32 xl:mr-28 2xl:h-1/3 2xl:mr-36 self-center transform transition-all delay-1000 duration-500 ease-in-out scale-0" src={HeroImage} ref={HeroImageRef}></img>
        </div>
        </>
    );
}

export default Header;
