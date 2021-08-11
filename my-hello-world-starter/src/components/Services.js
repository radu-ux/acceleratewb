import React from 'react';
import {MdWeb} from 'react-icons/md';
import {MdPhoneIphone} from 'react-icons/md';
import {IconContext} from "react-icons";
import {GiDigitalTrace} from "react-icons/gi";
import { GrHostMaintenance } from "react-icons/gr";
import H2 from './common/SharedComponents';
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

const DigitalBrandingIcon = () => {
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
    return (
        <section className="flex flex-col mt-20">
            <H2>Servicii</H2>
            <div className="flex flex-col md:flex-row justify-center mt-10 mb-3 mx-8 md:mx-0">
                <div className="flex flex-rox border-2 shadow-lg py-5 px-5 mb-8 md:mb-0 md:mr-3 max-w-xl">
                    <div className="mt-7 mr-4">
                        <PresentationSiteIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold">Site Prezentare & Magazin online</h3>
                        <p>
                            Identitatea brandului tau este extrem de importanta. Noi intelegem treaba aceasta si te vom ajuta
                            prin cunostiintele noastre sa iti creezi o prezenta online care sa reflecte eficienta bussinessului tau.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row border-2 shadow-lg py-5 px-5 md:ml-3 max-w-xl">
                    <div className="mt-7 mr-2">
                        <ProgressiveWebAppIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold">Aplicatii web progresive</h3>
                        <p>
                            Pagini ajustabile pe toate dispozitivele fara a sacrifica calitatea continutului. 
                            Imbunatatim experienta utilizatorului prin interfete optimizate.
                        </p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row justify-center mt-3 mb-10 mx-8 md:mx-0">
                <div className="flex flex-rox border-2 shadow-lg py-5 px-5 mb-8 md:mb-0 md:mr-3 max-w-xl">
                    <div className="mt-5 mr-5">
                        <DigitalBrandingIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold">Branding digital si SEO</h3>
                        <p>
                            Creem, revizuim si executam campanii de marketing care sa iti aduca mai multe vanzari. Vom analiza, creea
                            si monitoriza performanta postarilor pe care le facem.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row border-2 shadow-lg py-5 px-5 md:ml-3 max-w-xl">
                    <div className="mt-5 mr-5">
                        <WebHostingIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold">Gazduire web si mentenanta</h3>
                        <p>
                            Vom stabili impreuna o solutie convenabila pentru gazduirea web a site-ului. De asemenea iti oferim
                            suport tehnic a produsului software.
                        </p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Services 
