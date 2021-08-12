import React, { useEffect } from 'react';
import {MdWeb} from 'react-icons/md';
import {MdPhoneIphone} from 'react-icons/md';
import {IconContext} from "react-icons";
import {GiAutomaticSas} from "react-icons/gi";
import { GrHostMaintenance } from "react-icons/gr";
import { H2 } from './common/SharedComponents';
import AOS from 'aos';
import styled from "styled-components";

const colors = require('tailwindcss/colors')

const WebHostingIconWrapper = styled.div`
    .gr-icon path {
        stroke: ${({iconColor}) => iconColor};
    }
`;

const PresentationSiteIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '60px' }}>
            <div>
                <MdWeb />
            </div>  
        </IconContext.Provider>
    );
}

const ProgressiveWebAppIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '60px' }}>
            <div>
                <MdPhoneIphone />
            </div>  
        </IconContext.Provider>
    );
}

const SoftwareAutomationIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '60px' }}>
            <div>
                <GiAutomaticSas />
            </div>  
        </IconContext.Provider>
    );
}

const WebHostingIcon = () => {
    return (
        <WebHostingIconWrapper iconColor={colors.blue[400]}>
            <GrHostMaintenance size="60px" className="gr-icon" />
        </WebHostingIconWrapper>  
    );
}

const Services = ()  =>{
    useEffect(() => {
        AOS.init({
            duration: 500
        });
    })

    return (
        <div className="flex flex-col mt-12">
            <p className="mx-auto my-5 text-xl text-blue-500 font-bold tracking-widest">
                Aria de activitate in domeniul software
            </p>
            <H2 animationType="fade-right" animationDuration="1000">Servicii</H2>
            <div className="flex flex-col md:flex-row justify-center mt-10 mb-3 mx-8 md:mx-0">
                <div data-aos="zoom-in"  className="flex flex-rox shadow-lg py-5 px-5 mb-8 md:mb-0 md:mr-3 max-w-lg 2xl:max-w-xl">
                    <div className="p-2">
                        <PresentationSiteIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold pb-4">Site Prezentare & Magazine Online</h3>
                        <p className="leading-7"> 
                            Identitatea brandului tau este extrem de importanta. Noi intelegem treaba aceasta si te vom ajuta
                            prin cunostiintele noastre sa iti creezi o prezenta online care sa reflecte eficienta bussinessului tau.
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in" className="flex flex-row shadow-lg py-5 px-5 md:ml-3 max-w-lg 2xl:max-w-xl">
                    <div className="p-2">
                        <ProgressiveWebAppIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold pb-4">Aplicatii Web Progresive</h3>
                        <p className="leading-7">
                            Pagini ajustabile pe toate dispozitivele fara a sacrifica calitatea continutului. 
                            Imbunatatim experienta utilizatorului prin interfete optimizate.
                        </p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row justify-center mt-3 mb-10 mx-8 md:mx-0">
                <div data-aos="zoom-in" className="flex flex-rox shadow-lg py-5 px-5 mb-8 md:mb-0 md:mr-3 max-w-lg 2xl:max-w-xl">
                    <div className="p-2">
                        <SoftwareAutomationIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold pb-4">Branding Digital si SEO</h3>
                        <p className="leading-7">
                            Creem, revizuim si executam campanii de marketing care sa iti aduca mai multe vanzari. Vom analiza, creea
                            si monitoriza performanta postarilor pe care le facem.
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in" className="flex flex-row shadow-lg py-5 px-5 md:ml-3 max-w-lg 2xl:max-w-xl">
                    <div className="p-2">
                        <WebHostingIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold pb-4">Gazduire Web si Mentenanta</h3>
                        <p className="leading-7">
                            Vom stabili impreuna o solutie convenabila pentru gazduirea web a site-ului. De asemenea iti oferim
                            suport tehnic a produsului software.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Services 
