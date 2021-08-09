import React from 'react'
import {MdWeb} from 'react-icons/md'
import {MdPhoneIphone} from 'react-icons/md'
import {IconContext} from "react-icons"
import {GiAutomaticSas} from "react-icons/gi"
import {CgGhost} from "react-icons/cg"
const colors = require('tailwindcss/colors')

const PresentationSiteIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '40px' }}>
            <div>
                <MdWeb />
            </div>  
        </IconContext.Provider>
    );
}

const ProgressiveWebAppIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '40px' }}>
            <div>
                <MdPhoneIphone />
            </div>  
        </IconContext.Provider>
    );
}

const SoftwareAutomationIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '40px' }}>
            <div>
                <GiAutomaticSas />
            </div>  
        </IconContext.Provider>
    );
}

const WebHostingIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '40px' }}>
            <div>
                <CgGhost />
            </div>  
        </IconContext.Provider>
    );
}

const Services = ()  =>{
    return (
        <section className="flex flex-col mt-20">
            <h2 className="font-bold text-4xl self-center">Servicii</h2>
            <div className="flex flex-row justify-center mt-10 mb-3">
                <div className="flex flex-rox border-2 shadow-lg py-5 px-5 mr-3 max-w-xl">
                    <div className="mt-2">
                        <PresentationSiteIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold">Site Prezentare</h3>
                        <p>Construim siteuri de prezentare pentru businessul</p>
                    </div>
                </div>
                <div className="flex flex-row border-2 shadow-lg py-5 px-5 ml-3 max-w-xl">
                    <div className="mt-2">
                        <ProgressiveWebAppIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold">Site Prezentare</h3>
                        <p>Construim siteuri de prezentare pentru businessul</p>
                    </div>
                </div>
            </div>


            <div className="flex flex-row justify-center mt-3 mb-10">
                <div className="flex flex-rox border-2 shadow-lg py-5 px-5 mr-3 max-w-xl">
                    <div className="mt-2">
                        <SoftwareAutomationIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold">Site Prezentare</h3>
                        <p>Construim siteuri de prezentare pentru businessul</p>
                    </div>
                </div>
                <div className="flex flex-row border-2 shadow-lg py-5 px-5 ml-3 max-w-xl">
                    <div className="mt-2">
                        <WebHostingIcon/>
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className="text-2xl font-semibold">Site Prezentare</h3>
                        <p>Construim siteuri de prezentare pentru businessul</p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Services 
