import React, { useEffect } from 'react';
import {MdWeb} from 'react-icons/md';
import {MdPhoneIphone} from 'react-icons/md';
import {IconContext} from "react-icons";
import {GiDigitalTrace} from "react-icons/gi";
import { GrHostMaintenance } from "react-icons/gr";
import { H2, Card } from './common/SharedComponents';
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
        <IconContext.Provider value={{ color: colors.blue[400], size: '70px' }}>
            <div>
                <MdWeb />
            </div>  
        </IconContext.Provider>
    );
}

const ProgressiveWebAppIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '70px' }}>
            <div>
                <MdPhoneIphone />
            </div>  
        </IconContext.Provider>
    );
}

const SoftwareAutomationIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '70px' }}>
            <div>
                <GiDigitalTrace />
            </div>  
        </IconContext.Provider>
    );
}

const WebHostingIcon = () => {
    return (
        <WebHostingIconWrapper iconColor={colors.blue[400]}>
            <GrHostMaintenance size="70px" className="gr-icon" />
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
                Aria de activitate în domeniul software
            </p>
            <H2 animationType="fade-right" animationDuration="1000">Servicii</H2>
            <div className="flex flex-col md:flex-row justify-center mt-10 mb-3 mx-8 md:mx-0">
                <Card cardImage={PresentationSiteIcon} cardEffect="zoom-in" cardTitle="Site Prezentare & Magazine Online" _class="flex flex-rox shadow-lg py-5 px-5 mb-8 md:mb-0 md:mr-3 max-w-lg 2xl:max-w-xl">
                    Identitatea brand-ului tău este extrem de importantă. Noi înțelegem acest lucru și te vom ajuta
                    prin cunoștiințele noastre să îți creezi o prezență online care să reflecte eficiența bussiness-ului tău.
                </Card>
                <Card cardImage={ProgressiveWebAppIcon} cardEffect="zoom-in" cardTitle="Aplicații Web Progresive" _class="flex flex-row shadow-lg py-5 px-5 md:ml-3 max-w-lg 2xl:max-w-xl">
                    Pagini ajustabile pe toate dispozitivele fără a sacrifica calitatea conținutului. 
                    Îmbunătățim experiența utilizatorului prin interfețe optimizate.
                </Card>
            </div>


            <div className="flex flex-col md:flex-row justify-center mt-3 mb-10 mx-8 md:mx-0">
                <Card cardImage={SoftwareAutomationIcon} cardEffect="zoom-in" cardTitle="Branding Digital și SEO" _class="flex flex-rox shadow-lg py-5 px-5 mb-8 md:mb-0 md:mr-3 max-w-lg 2xl:max-w-xl">
                    Creem, revizuim și executăm campanii de marketing care să îți aducă mai multe vânzări. Vom analiza, crea
                    și monitoriza performanța postărilor pe care le facem.
                </Card>
                <Card cardImage={WebHostingIcon} cardEffect="zoom-in" cardTitle="Găzduire Web si Mentenanță" _class="flex flex-row shadow-lg py-5 px-5 md:ml-3 max-w-lg 2xl:max-w-xl">
                    Vom stabili împreună o soluție convenabilă pentru găzduirea web a site-ului. De asemenea îți oferim
                    suport tehnic a produsului software.
                </Card>
            </div>


        </div>
    )
}

export default Services 
