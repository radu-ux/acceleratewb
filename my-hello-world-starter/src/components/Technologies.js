import React, { useEffect } from "react";
import {MdWeb} from 'react-icons/md';
import {IconContext} from "react-icons";
import { H2, TechCard } from './common/SharedComponents';
import AOS from 'aos';
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"; 

const colors = require('tailwindcss/colors')

const PresentationSiteIcon = () => {
    return (
        <IconContext.Provider value={{ color: colors.blue[400], size: '60px' }}>
            <div>
                <MdWeb />
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

    const techStackImageProperties = useStaticQuery(graphql`
    query TechStackImgQuery {
            file(relativePath: {eq: "tech-stack.jpg"}) {
            id
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                    }
                }
                }
            }   
      `);

    return (
        <section>
            <div className="flex flex-row justify-center text-md mt-12 mb-4 sm:text-xl text-blue-500 font-bold tracking-widest">Stackul de technologii</div>
            <div>
                <H2 animationType="fade-right" animationDuration="1000" isCentered={false}>Solutii pentru afacerea ta</H2>
                    <div className="flex flex-row mx-auto text-center text-lg mt-6 max-w-2xl text-gray-500">
                        Dezvoltam solutii web ce iti propulseaza afacerea si iti cresc considerabil incasarile. Targetam atat platforme web cat si promovarea prin aplicatii mobile.
                    </div>
                </div>
            <div className="flex flex-col space-y-20 items-center mt-12 lg:flex-row lg:justify-center lg:space-y-0">
                
                <div className="flex flex-col space-y-5">
                    <TechCard animationEffect="fade-right" animationDuration="1000" title="Site Web" cardImage={PresentationSiteIcon} _class="lg:ml-10">
                       Wordpress, Gatsby, JavaScript, TailwindCSS, PHP, MySQL  
                    </TechCard>

                    <TechCard animationEffect="fade-right" animationDuration="1100" title="Solutii IT Generale" cardImage={PresentationSiteIcon}>
                       Dezvoltam solutii software generale, potrivite nevoilor tale  
                    </TechCard>

                    <TechCard animationEffect="fade-right" animationDuration="1200" title="Magazin Online" cardImage={PresentationSiteIcon} _class="lg:mx-0 lg:ml-10">
                        WooCommerce, React  
                    </TechCard>
                </div>

                <div data-aos="zoom-in" className="w-11/12 md:w-8/12 lg:max-w-lg 2xl:max-w-2xl">
                    <Img fluid={techStackImageProperties.file.childImageSharp.fluid} className="rounded-full"/>
                </div>

                <div className="flex flex-col space-y-5">
                    <TechCard animationEffect="fade-left" animationDuration="1000" title="Branding Digital" cardImage={PresentationSiteIcon}>
                        Creare Logo perfect pentru promovarea in online 
                    </TechCard>

                    <TechCard animationEffect="fade-left" animationDuration="1100" title="SEO" cardImage={PresentationSiteIcon} _class="lg:ml-10">
                        Iti propulsam siteul in topul cautarilor folosind: Yoast SEO & Gatsby
                    </TechCard>

                    <TechCard animationEffect="fade-left" animationDuration="1200" title="Aplicatii Mobile" cardImage={PresentationSiteIcon}>
                        React Native - iOS & Android
                    </TechCard>
                </div>

            </div>
        </section>
    );
}

export default Technologies;