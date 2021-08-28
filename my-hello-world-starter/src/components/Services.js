import React, { useEffect } from 'react';
import {MdWeb} from 'react-icons/md';
import {MdPhoneIphone} from 'react-icons/md';
import {IconContext} from "react-icons";
import {GiDigitalTrace} from "react-icons/gi";
import { GrHostMaintenance } from "react-icons/gr";
import { H2, Card } from './common/SharedComponents';
import styled from "styled-components";
import AOS from 'aos';

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
        <section className="flex flex-col mt-12 2xl:mt-20">
            <p className="mx-auto my-5 text-md sm:text-xl text-blue-500 font-bold tracking-widest">
                Aria de activitate în domeniul software
            </p>
            <H2 animationType="fade-left" animationDuration="1000" isCentered={true}>Servicii</H2>
            <div className="flex flex-col justify-center mt-10 mb-3 mx-8 lg:flex-row lg:mx-0">
                <Card cardImage={PresentationSiteIcon} cardEffect="zoom-in" cardTitle="Site Prezentare & Magazine Online" _class="mb-8 lg:mb-0 lg:mr-3">
                    Identitatea brand-ului tău este extrem de importantă. Noi înțelegem acest lucru și te vom ajuta
                    prin cunoștiințele noastre să îți creezi o prezență online care să reflecte eficiența bussiness-ului tău.
                </Card>
                <Card cardImage={ProgressiveWebAppIcon} cardEffect="zoom-in" cardTitle="Aplicații Web Progresive" _class="lg:ml-3">
                    Pagini ajustabile pe toate dispozitivele fără a sacrifica calitatea conținutului. 
                    Îmbunătățim experiența utilizatorului prin interfețe optimizate.
                </Card>
            </div>


            <div className="flex flex-col justify-center mt-3 mb-10 mx-8 lg:flex-row lg:mx-0">
                <Card cardImage={SoftwareAutomationIcon} cardEffect="zoom-in" cardTitle="Branding Digital și SEO" _class="mb-8 lg:mb-0 lg:mr-3">
                    Creem, revizuim și executăm campanii de marketing care să îți aducă mai multe vânzări. Vom analiza, crea
                    și monitoriza performanța postărilor pe care le facem.
                </Card>
                <Card cardImage={WebHostingIcon} cardEffect="zoom-in" cardTitle="Găzduire Web si Mentenanță" _class="lg:ml-3">
                    Vom stabili împreună o soluție convenabilă pentru găzduirea web a site-ului. De asemenea îți oferim
                    suport tehnic a produsului software.
                </Card>
            </div>


        </section>
    )
}

export default Services 
