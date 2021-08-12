import React, { useEffect } from 'react';
import {MdWeb} from 'react-icons/md';
import {MdPhoneIphone} from 'react-icons/md';
import {IconContext} from "react-icons";
import {GiAutomaticSas} from "react-icons/gi";
import { GrHostMaintenance } from "react-icons/gr";
import H2 from './common/SharedComponents';
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
                <GiAutomaticSas />
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
        AOS.init({duration: 2000});
    })

    return (
        <div className="flex flex-col mt-20">
            <H2>Servicii</H2>
            <div className="flex flex-col md:flex-row justify-center mt-10 mb-3 mx-8 md:mx-0">
                <div data-aos="zoom-in"  className="flex flex-rox border-2 shadow-lg py-5 px-5 mb-8 md:mb-0 md:mr-3 max-w-xl">
                    <div className="mt-2">
                        <PresentationSiteIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold">Site Prezentare</h3>
                        <p>Construim siteuri de prezentare pentru businessul</p>
                    </div>
                </div>
                <div className="flex flex-row border-2 shadow-lg py-5 px-5 md:ml-3 max-w-xl">
                    <div className="mt-2">
                        <ProgressiveWebAppIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold">Site Prezentare</h3>
                        <p>Construim siteuri de prezentare pentru businessul</p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row justify-center mt-3 mb-10 mx-8 md:mx-0">
                <div className="flex flex-rox border-2 shadow-lg py-5 px-5 mb-8 md:mb-0 md:mr-3 max-w-xl">
                    <div className="mt-2">
                        <SoftwareAutomationIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold">Site Prezentare</h3>
                        <p>Construim siteuri de prezentare pentru businessul</p>
                    </div>
                </div>
                <div className="flex flex-row border-2 shadow-lg py-5 px-5 md:ml-3 max-w-xl">
                    <div className="mt-2">
                        <WebHostingIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold">Site Prezentare</h3>
                        <p>Construim siteuri de prezentare pentru businessul</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Services 
