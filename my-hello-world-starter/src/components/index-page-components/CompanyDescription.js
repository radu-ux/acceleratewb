import React, { useEffect } from 'react'
import AOS from 'aos'
import Img from "gatsby-image"
import Waves from '../../images/waves-large-screen.svg';
import WavesMobile from '../../images/waves-mobile.svg';
import { graphql, useStaticQuery } from "gatsby"; 
import { ContactButton } from '../common/SharedComponents';
import { HeroSection } from '../styled-components';

const CompanyDescription = () => {
    useEffect(() => {
        AOS.init({
            duration: 600
        })
    }, []);

    const heroImageProperties = useStaticQuery(graphql`
        query HeroImagesQuery {
            xlSize: file(relativePath: {eq: "hero-img.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                        }
                }
            }
            
            
        }   
      `
    )

    const heroImage = heroImageProperties.xlSize.childImageSharp.fluid;

    return (
        <HeroSection mobileBgImage={WavesMobile} largeScreenBgImage={Waves} 
                     className="grid lg:grid-cols-2 place-content-center gap-x-16 px-12 3xl:px-20">
            <div className="flex flex-col justify-center">
                <div className="self-center py-20 lg:py-0 text-white xl:max-w-2xl 3xl:max-w-3xl space-y-3 lg:space-y-3 xl:space-y-5 3xl:space-y-8">
                    <h1 className="font-bold text-white text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl">Inovam afacerea ta prin websiteuri moderne si ultra rapide</h1>
                    <p className="md:text-lg xl:text-xl 2xl:text-2xl">Suntem o companie ce oferim solutii vaste pentru nevoile tale, de la siteuri de prezentare, la magazine online si chiar apliatii mobile</p>
                    <p> <span className="text-3xl 3xl:text-4xl font-bold">!</span> Nu ezita sa ne contactezi pentru orice intrebare</p>
                    <div className="grid grid-rows-1">
                        <div className="lg:mx-auto">
                            <ContactButton> Hai sa discutam ! </ContactButton>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-0 sm:mx-auto sm:w-9/12 md:w-8/12 lg:w-full"> 
                <Img fluid={heroImage} className="self-center shadow-xl"/> 
            </div>
                 
        </HeroSection>
    )
}

export default CompanyDescription;