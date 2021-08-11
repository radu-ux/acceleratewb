import React from 'react'
import HeroImage1200 from '../images/hero-img-1200.jpg';
import HeroImage800 from '../images/hero-img-800.jpg';
import HeroImage400 from '../images/hero-img-400.jpg';
import styled from 'styled-components';

const HeroSectionParent = styled.section`
    width: 100%;
    position: relative;
    background-color: black;
    &:after { 
        content: ' ';
        width: 100%;
        position: absolute;
        opacity: 0.5;
    }

    @media screen 
    and (min-width: 320px)
    and (max-width: 480px) {
        height: 450px;
        &:after {
            background: url(${HeroImage400}) center ;
            background-size: cover;
            background-repeat: no-repeat;
            height: 450px;
        }
    }

    @media screen
    and (min-width: 481px)
    and (max-width: 768px) {
        height: 450px;
        &:after {
            background: url(${HeroImage800}) center ;
            background-size: cover;
            background-repeat: no-repeat;
            height: 450px;
        }
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px) {
        height: 500px;
        &:after {
            background: url(${HeroImage1200}) no-repeat center center fixed;
            background-size: cover;
            height: 500px;
        }
    }

    @media screen 
    and (min-width: 1025px)
    and (max-width: 1400px) {
        height: 500px;
        &:after {
            background: url(${HeroImage1200}) no-repeat center center fixed;
            background-size: cover;
            height: 500px;
        }
    }

    @media screen 
    and (min-width: 1201px)
    and (max-width: 1300px) {
        height: 550px;
        &:after {
            background: url(${HeroImage1200}) no-repeat center center fixed;
            background-size: cover;
            height: 550px;
        }
    }

    @media (min-width: 1301px) {
        height: 750px;
        &:after {
            background: url(${HeroImage1200}) no-repeat center center fixed;
            background-size: cover;
            height: 750px;
        }
    }

    
`;

const HeroSectionChild = styled.div`
    background: transparent;
    position: relative;
    z-index:1;
`;

const HeroButton = () => {
    return (
        <button className="text-lg bg-blue-500 px-5 rounded-full text-white mr-10 shadow-lg hover:bg-blue-700">Contacteaza-ne</button>
    );
}


const HeroSection = () => {
    return (
        <HeroSectionParent className="flex flex-row">
            <HeroSectionChild className="flex flex-col mx-auto py-36 md:py-44 lg:py-36 xl:py-40 2xl:py-52">
                <h1 className="font-bold text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
                    Dezvoltam Solutii Web <span className="block text-center"> Smart <span className="text-yellow-500">&</span> Eficiente</span>
                </h1>
                <div className="flex flex-row mx-auto mt-10">
                    <HeroButton />
                    <div>
                        <p className="text-yellow-500 font-bold xl:text-xl 2xl:text-2xl ">0765.623.233</p>
                        <p className="text-lg text-white ">Info & Intrebari </p>
                    </div>
                </div>
            </HeroSectionChild>
        </HeroSectionParent>
    )
}

export default HeroSection;
