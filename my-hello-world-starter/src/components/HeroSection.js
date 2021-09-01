import React from 'react'
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const HeroSectionParent = styled(BackgroundImage)`
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
`;

const HeroSectionChild = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    min-height: 100vh;
`;

const HeroSectionTitle = styled.h1`
    font-family: 'Rampart One';
`;

const HeroButton = () => {
    return (
        <button className="text-lg bg-blue-500 px-5 rounded-full text-white mr-10 shadow-lg hover:bg-blue-700">Contactează-ne</button>
    );
}


const HeroSection = () =>  {
    const heroImgProperties = useStaticQuery(graphql`
        query HeroImgQuery {
            file(relativePath: {eq: "hero-img.jpg"}) {
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
        <HeroSectionParent fluid={heroImgProperties.file.childImageSharp.fluid}>
            <HeroSectionChild className="flex flex-col mx-auto justify-center">
                <HeroSectionTitle className="font-custom font-bold text-center text-white tracking-wider text-4xl sm:text-5xl md:text-4xl lg:text-7xl 2xl:text-8xl">
                    Dezvoltam Solutii Web <span className="block text-center"> Smart <span className="text-yellow-500">&</span> Eficiente</span>
                </HeroSectionTitle>
                <div className="flex flex-row mx-auto mt-10">
                    <HeroButton />
                    <div>
                        <p className="text-yellow-500 font-bold xl:text-xl 2xl:text-2xl ">0765.623.233</p>
                        <p className="text-lg text-white ">Info & Intrebări </p>
                    </div>
                </div>
            </HeroSectionChild>
        </HeroSectionParent>
    )
}

export default HeroSection;