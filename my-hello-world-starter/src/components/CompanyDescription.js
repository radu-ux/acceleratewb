import React, { useEffect } from 'react'
import styled from 'styled-components';
import { GrPhone } from "react-icons/gr";
import AOS from 'aos'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"; 
import Waves from '../images/waves-large-screen.svg';
import WavesMobile from '../images/waves-mobile.svg';
import WavesLaptop from '../images/waves-laptop.svg';

const colors = require('tailwindcss/colors')

const PhoneIconWrapper = styled.p`
    .gr-icon path {
        stroke: ${({iconColor}) => iconColor};
        display: inline;
    }
`;

const StyledSection = styled.section`
        height: 100%;
        background: url(${WavesMobile}) center ;
        background-size: cover;
        background-repeat: no-repeat;

        @media(max-width: 480px) {
            background: url(${WavesMobile}) center ;
            background-size: cover;
            background-repeat: no-repeat;
        }

        @media(min-width: 769px) {
            background: url(${Waves}) center ;
            background-size: cover;
            background-repeat: no-repeat;
        }
`;

const CompanyDescription = () => {
    useEffect(() => {
        AOS.init({
            duration: 600
        })
    }, []);

    const heroImageProperties = useStaticQuery(graphql`
        query HeroImgQuery1 {
            file(relativePath: {eq: "hero-img.png"}) {
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

    const ContactButton = () => {
        return (
            <button className="text-lg bg-white px-5 py-3 rounded-full text-black font-bold shadow-lg transition duration-150 ease-in-out transform hover:-translate-y-1">Hai sa discutam!</button>
        );
    }

    return (
         <StyledSection className="">
             <div className="h-full flex flex-col lg:flex-row items-center py-20 lg:py-24 2xl:py-44 lg:space-x-8 space-y-10 px-3 sm:px-14 2xl:px-32 lg:space-y-0">
               <div className="flex flex-col sm:max-w-4xl mt-5 space-y-5 mx-5 self-center md:mx-0 lg:space-y-10 xl:mt-10 2xl:mb-28">
                   <h1 className="font-bold text-white md:text-4xl text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl">Inovam afacerea ta prin websiteuri moderne si ultra rapide</h1>
                   <div className="text-white xl:max-w-lg 2xl:max-w-2xl md:text-lg xl:text-xl 2xl:text-2xl space-y-5">
                        <p>Suntem o companie ce oferim solutii vaste pentru nevoile tale, de la siteuri de prezentare, la magazine online si chiar apliatii mobile</p>
                        <p> <span className="text-3xl 2xl:text-4xl font-bold">!</span> Nu ezita sa ne contactezi pentru orice intrebare</p>
                    </div>
                   <div className="flex flex-row self-center">
                        <ContactButton/>
                    </div>
               </div>
               <div className="mx-auto w-10/12 sm:w-8/12 lg:w-full xl:w-11/12 shadow-xl">
                    <Img fluid={heroImageProperties.file.childImageSharp.fluid} /> 
                </div>
                </div>
            </StyledSection>
    )
}

export default CompanyDescription;