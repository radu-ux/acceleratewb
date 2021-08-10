import React from 'react'
import DiagramImg from '../images/diagrams.jpg';
import styled from 'styled-components';

const HeroSectionParent = styled.section`
    width: 100%;
    height: 750px;
    position: relative;
    background-color: black;
    &:after { 
        content: ' ';
        width: 100%;
        height: 750px;
        position: absolute;
        background: url(${DiagramImg}) no-repeat center center fixed;
        background-size: cover;
        opacity: 0.5;
    }

    @media (min-width: 300px) {
        height: 450px;
        &:after {
            height: 450px;
        }

    }

    @media (min-width: 768px) {
        height: 535px;
        &:after {
            height: 535px;
        }
    }

    @media (min-width: 1024px) {
        height: 560px;
        &:after {
            height: 560px;
        }
    }

    @media (min-width: 1536px) { 
        height: 100%;
        &:after {
            height: 100%;
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
                <h1 className="font-bold text-center text-white text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl">
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
