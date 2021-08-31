import React, { useEffect } from 'react'
import { H2 } from '../components/common/SharedComponents'; 
import styled from 'styled-components';
import { GrPhone } from "react-icons/gr";
import AOS from 'aos'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"; 

const colors = require('tailwindcss/colors')

const PhoneIconWrapper = styled.div`
    .gr-icon path {
        stroke: ${({iconColor}) => iconColor};
    }
`;

const PhoneIcon = () => {
    return (
        <PhoneIconWrapper iconColor={colors.red[500]}>
            <GrPhone size="30px" className="gr-icon mt-2"/>
        </PhoneIconWrapper>  
    );
};

const CompanyDescription = () => {
    useEffect(() => {
        AOS.init({
            duration: 600
        })
    }, []);

    const teamWorkImageProperties = useStaticQuery(graphql`
        query TeamWorkImgQuery {
            file(relativePath: {eq: "team-work-cropped-1000_v1.png"}) {
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

    return (
        <section className="flex flex-col mt-20">
            <div className="flex flex-col md:flex-row justify-center my-10">
                <div className="flex flex-col self-center mb-12 2xl:mr-12">
                    <p className="mx-auto my-5 text-md sm:text-xl text-blue-500 font-bold tracking-widest">
                        Politica companiei
                    </p>
                    <H2 animationType="fade-right" animationDuration="1000" isCentered={true}>Cine suntem ?</H2>
                    <p className="leading-10 text-xl text-gray-500 mx-5 mt-5 sm:max-w-xl 2xl:max-w-2xl">
                        Suntem o companie care se ocupă cu dezvoltarea de soluții web pentru afacerea ta.
                        Dispunem de o echipă flexibilă, capabilă de a-ți ajuta compania să-și crească 
                        veniturile prin intermediul online-ului.
                    </p>
                    <div className="flex flex-col mt-5 md:flex-row">
                        <button className="text-lg bg-yellow-500 py-2 w-40 mt-8 text-white border-2 ring ring-yellow-500 shadow-lg mx-auto hover:bg-yellow-400 md:ml-5 md:mx-0">Cere oferta</button>
                        <div className="flex flex-row mt-9 md:ml-8 self-center">
                            <PhoneIcon/>
                            <p className="ml-0 text-xs text-red-500 font-bold">SAU INTREABA ORICE LA <span className="block text-center text-lg">0765.654.343</span></p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="self-center md:mx-0 w-11/12 sm:max-w-lg 2xl:max-w-2xl">
                    <Img fluid={teamWorkImageProperties.file.childImageSharp.fluid} /> 
                </div>
            </div>
        </section>
    )
}

export default CompanyDescription;