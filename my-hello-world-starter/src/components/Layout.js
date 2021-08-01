import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useRef, useLayoutEffect } from "react"; 
import Aos from 'aos';

const Layout = (props, ref) => {

    useEffect(() => {
        Aos.init({duration: 800});
      })

    useLayoutEffect(() => {
        // const heroSectionYPos = heroSectionRef.current.getBoundingClientRect().y;
        // if(heroSectionYPos < 0 ) {
        //   headerRef.current.className = "flex justify-between sticky top-0 z-50 bg-white shadow-lg";
        //   homeRef.current.className = "text-xl mx-8 border-b-2 hover:border-yellow-500 hover:transition duration-300 ease-in border-transparent"; 
        //   aboutRef.current.className = "text-xl border-b-2 hover:border-yellow-500 hover:transition duration-300 ease-in border-transparent";
        //   servicesRef.current.className = "text-xl mx-8 border-b-2 hover:border-yellow-500 hover:transition duration-300 ease-in border-transparent";
        // } else {
        //   headerRef.current.className= "flex justify-between sticky top-0 z-50 bg-yellow-500";
        //   homeRef.current.className = "text-xl mx-8 border-b-2 hover:border-white hover:transition duration-300 ease-in border-transparent text-white"; 
        //   aboutRef.current.className = "text-xl border-b-2 hover:border-white hover:transition duration-300 ease-in border-transparent text-white"
        //   servicesRef.current.className = "text-xl mx-8 border-b-2 hover:border-white hover:transition duration-300 ease-in border-transparent text-white"
        // }
      })

    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;