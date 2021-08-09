import React from 'react'
import DiagramImg from '../images/diagrams.jpg';
import styled from 'styled-components';

const HeroSectionBgImageStyle = {

    background:`url(${DiagramImg}) no-repeat center center fixed`,
    backgroundSize:"cover",
}

const HeroSection = styled.section`
    background: url(${DiagramImg}) no-repeat center center fixed;
    background-size: cover    
    
`;

const Intro = () => {
    return (
        <HeroSection className="flex flex-row">
            <div className="flex flex-col mx-auto xl:py-24 2xl:py-52">
                <h1 className="text-8xl font-bold text-center">Dezvoltam Solutii Web <span className="block text-center"> Smart & Eficiente</span></h1>
                <div className="max-w-3xl my-5 mx-auto">
                    <p className="text-lg font-bold text-white">
                        Suntem o companie specializata in oferirea serviciilor web pentru clientii nostri. 
                        Construim websiteuri sepcifice modelului tau de business folosind tehnologii de 
                        actualitate. Oferim servicii oricarui client ce doreste sa-si propulseze afacerea
                        prin intermediul onlineului.
                    </p>
                </div>
                <div className="flex flex-row mx-auto">
                    <button className="text-lg bg-blue-500 px-5 rounded-full text-white mr-10">Contacteaza-ne</button>
                    <div>
                        <p className="text-xl text-red-500 font-bold">0765.623.233</p>
                        <p className="text-lg font-bold">Info & Intrebari </p>
                    </div>
                </div>
            </div>
        </HeroSection>
    )
}

export default Intro;
