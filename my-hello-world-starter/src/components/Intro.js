import React from 'react'
import DiagramImg from '../images/image16.png';

const HeroSectionBgImageStyle = {

    background:`url(${DiagramImg}) no-repeat center center fixed`,
    backgroundSize:"cover",
}

const Intro = () => {
    return (
        <section id="hero-section" className="flex flex-row" style={HeroSectionBgImageStyle}>
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
        </section>
    )
}

const HeroSection = () =>  {
    return (
        <>
        <div className="flex flex-col items-start">
            <h1 className="text-4xl">Dezvoltam Solutii Web <br/> Smart si Eficiente</h1>
            <div className="flex flex-row">
                <button>Contacteaza-ne</button>
                <p>0765.623.233</p>
            </div>
        </div>
        </>
    );
}
export default Intro;
