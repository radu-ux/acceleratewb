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
            first: file(relativePath: {eq: "hero-img.png"}) {
                id
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                        }
                }
            }
            
            second: file(relativePath: {eq: "hero-img-2.png"}) {
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

    const firstImage = heroImageProperties.first.childImageSharp.fluid;
    const secondImage = heroImageProperties.second.childImageSharp.fluid;

    return (
         <HeroSection mobileBgImage={WavesMobile} largeScreenBgImage={Waves}>
             <div className="h-full flex flex-col lg:flex-row items-center py-20 lg:py-24 xl:py-18 2xl:py-28 3xl:py-44 lg:space-x-8 space-y-10 px-3 sm:px-14 2xl:px-32 lg:space-y-0">
               <div className="flex flex-col sm:max-w-4xl mt-5 space-y-5 mx-5 self-center md:mx-0 lg:space-y-10 xl:mt-10 3xl:mb-28">
                   <h1 className="font-bold text-white md:text-4xl text-3xl lg:text-5xl xl:text-5xl 3xl:text-6xl">Inovam afacerea ta prin websiteuri moderne si ultra rapide</h1>
                   <div className="text-white xl:max-w-lg 3xl:max-w-2xl md:text-lg xl:text-xl 3xl:text-2xl space-y-5">
                        <p>Suntem o companie ce oferim solutii vaste pentru nevoile tale, de la siteuri de prezentare, la magazine online si chiar apliatii mobile</p>
                        <p> <span className="text-3xl 3xl:text-4xl font-bold">!</span> Nu ezita sa ne contactezi pentru orice intrebare</p>
                    </div>
                   <div className="flex flex-row self-center">
                        <ContactButton> Hai sa discutam ! </ContactButton>
                    </div>
               </div>
               <div className="relative z-10 mx-auto w-10/12 sm:w-8/12 lg:w-full xl:w-11/12 shadow-2xl">
                    <div 
                        className="absolute z-0 shadow-xl transform -translate-y-8 lg:translate-x-8 xl:translate-x-20 3xl:translate-x-32 bg-blue-500 w-10/12 sm:w-8/12 lg:w-full xl:w-11/12 h-10/12 sm:h-8/12 lg:h-full xl:h-11/12 invisible lg:visible"> 
                    </div>
                    <Img fluid={firstImage} className=""/> 
                </div>
               
                </div>
            </HeroSection>
    )
}

export default CompanyDescription;