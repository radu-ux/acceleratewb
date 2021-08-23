import React, { useEffect } from 'react'
import { H2 } from '../components/common/SharedComponents';
import TeamWorkImg500 from '../images/team-work-cropped-500.png';
import TeamWorkImg1000 from '../images/team-work-cropped-1000_v1.png';
import Bubble from '../images/blob-haikei.svg'
import styled from 'styled-components';
import AOS from 'aos'
import "aos/dist/aos.css";

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

const StyledSection = styled.section`
        background: url(${Bubble}) center ;
        background-size: cover;
        background-repeat: no-repeat;
`;

const CompanyDescription = () => {
    useEffect(() => {
        AOS.init({
            duration: 600
        })
    }, []);

    return (
        <section className="flex flex-col mt-20">
            <div className="flex flex-col md:flex-row justify-center my-10">
                <div className="flex flex-col self-center mb-32 2xl:mr-12">
                    <p className="mx-auto my-5 text-xl text-blue-500 font-bold tracking-widest">
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
                        <p className="self-center mt-8 ml-0 text-xs text-red-500 font-bold md:ml-8">SAU INTREABA ORICE LA <span className="block text-center text-lg">0765.654.343</span></p>
                    </div>
                </div>
                <Wrapper data-aos="zoom-in" className="self-center mt-8 md:mt-0">
                   <img width="500"
                        height="500"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-500.jpg"
                        srcset={
                                `${TeamWorkImg500} 500w,
                                 ${TeamWorkImg1000} 1000w`
                               }
                        sizes="(min-width: 600px) 50vw, 100vw" >        
                </img>
                </Wrapper>  
            </div>
        </section>
    )
}

export default CompanyDescription;