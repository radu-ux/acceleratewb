import React, { useEffect } from "react";
import {MdInvertColors, MdWeb} from 'react-icons/md';
import {IconContext} from "react-icons";
import { H2, Card, TechCard } from './common/SharedComponents';
import {AiOutlineAreaChart} from 'react-icons/ai';
import {BiFileFind} from 'react-icons/bi';
import {IoIosGlobe} from 'react-icons/io';
import {BiStore} from 'react-icons/bi';
import {GrCloudComputer} from 'react-icons/gr';
import {MdPhonelinkSetup} from 'react-icons/md';
import {RiPhoneFindLine} from 'react-icons/ri';
import TechImage500 from "../images/tech-stack-500.jpg";
import TechImage1000 from "../images/tech-stack-1000.jpg";
import styled from "styled-components";
import AOS from 'aos';

const colors = require('tailwindcss/colors')

const Wrapper = styled.div`   
    img {
        border-radius: 50%;
        @media (min-width: 1024px) {
            width: 480px;
            height: 400px;
        }

        @media (min-width: 1536px) { 
            width: 650px;
            height: 500px;
        }
    }
`;


const GeneralServicesIconWrapper = styled.div`
    .gr-icon path {
        stroke: ${({iconColor}) => iconColor};
    }
`;

const WebsiteIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '60px' }}>
            <div>
                <IoIosGlobe />
            </div>  
        </IconContext.Provider>
    );
}

const GeneralServicesIcon = () => {
    return(
        <GeneralServicesIconWrapper iconColor={colors.blue[400]}>
            <GrCloudComputer size='60px' className='gr-icon'/>
        </GeneralServicesIconWrapper>
    )
}

const OnlineStoreIcon = () => {
    return(
        <IconContext.Provider value={{ color: colors.blue[400], size: '60px' }}>
            <div>
                <BiStore />
            </div>  
        </IconContext.Provider>
    )
}

const BrandingIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '60px' }}>
            <div>
                <AiOutlineAreaChart />
            </div>  
        </IconContext.Provider>
    );
}

const SeoIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '60px' }}>
            <div>
                <RiPhoneFindLine/>
            </div>  
        </IconContext.Provider>
    )
}

const MobileIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '60px' }}>
            <div>
                <MdPhonelinkSetup />
            </div>  
        </IconContext.Provider>
    );
}

const Technologies = () => { 
    useEffect(() => {
        AOS.init({
            duration: 600,
        })
    }, []);

    return (
        <section className='mt-20'>
            <div className="flex flex-row justify-center text-md mt-12 mb-4 sm:text-xl text-blue-500 font-bold tracking-widest">Stackul de technologii</div>
            <div className="">
                <H2 animationType="fade-right" animationDuration="1000" isCentered={false}>Solutii pentru afacerea ta</H2>
                    <div className="flex flex-row mx-auto text-center text-lg mt-6 max-w-2xl text-gray-500">
                        Dezvoltam solutii web ce iti propulseaza afacerea si iti cresc considerabil incasarile. Targetam atat platforme web cat si promovarea prin aplicatii mobile.
                    </div>
                </div>
            <div className="flex flex-col space-y-20 items-center mt-12 lg:flex-row lg:justify-center lg:space-y-0">
                
                <div className="flex flex-col space-y-5">
                    <TechCard animationEffect="fade-right" animationDuration="1000" title="Site Web" cardImage={WebsiteIcon} _class="lg:ml-10">
                       Wordpress, Gatsby, JavaScript, TailwindCSS, PHP, MySQL  
                    </TechCard>

                    <TechCard animationEffect="fade-right" animationDuration="1100" title="Solutii IT Generale" cardImage={GeneralServicesIcon}>
                       Dezvoltam solutii software generale, potrivite nevoilor tale  
                    </TechCard>

                    <TechCard animationEffect="fade-right" animationDuration="1200" title="Magazin Online" cardImage={OnlineStoreIcon} _class="lg:mx-0 lg:ml-10">
                        WooCommerce, React  
                    </TechCard>
                </div>

                <Wrapper data-aos="zoom-in">
                    <img width="500"
                        height="500"
                        src={TechImage500}
                        srcset={
                                `${TechImage500} 500w,
                                ${TechImage1000} 1000w`
                                }
                        sizes="(min-width: 600px) 50vw, 100vw" />   
                </Wrapper>
                
                <div className="flex flex-col space-y-5">
                    <TechCard animationEffect="fade-left" animationDuration="1000" title="Branding Digital" cardImage={BrandingIcon}>
                        Creare Logo perfect pentru promovarea in online 
                    </TechCard>

                    <TechCard animationEffect="fade-left" animationDuration="1100" title="SEO" cardImage={SeoIcon} _class="lg:ml-10">
                        Iti propulsam siteul in topul cautarilor folosind: Yoast SEO & Gatsby
                    </TechCard>

                    <TechCard animationEffect="fade-left" animationDuration="1200" title="Aplicatii Mobile" cardImage={MobileIcon}>
                        React Native - iOS & Android
                    </TechCard>
                </div>

            </div>
        </section>
    );
}

export default Technologies;