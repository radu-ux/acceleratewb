import React, { useEffect } from 'react'
import H2 from '../components/common/SharedComponents';
import TeamWorkImg500 from '../images/team-work-500.jpg';
import TeamWorkImg1000 from '../images/team-work-1000.jpg';
import styled from 'styled-components';
import AOS from 'aos'

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

const CompanyDescription = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    })

    return (
        <section className="flex flex-col mt-20">
            <H2>Cine suntem ?</H2>
            <div className="flex flex-col md:flex-row justify-center my-10">
                <div data-aos="flip-left" className="flex flex-col self-center">
                    <p className="sm:text-2xl 2xl:text-3xl mx-5 sm:max-w-xl 2xl:max-w-2xl">
                        Suntem o companie ce ne ocupam cu dezvoltarea de solutii web pentru afacerea ta.
                        Dispunem de o echipa flexibila, capabila de a-ti ajuta compania sa-si creasca 
                        veniturile prin intermediul onlineului.
                    </p>
                    <button className="text-lg bg-yellow-500 py-2 w-40 mt-5 mx-auto rounded-full text-white border-2 ring ring-yellow-500 shadow-lg hover:bg-yellow-400">Cere oferta</button>
                </div>
                <Wrapper className="self-center mt-8 md:mt-0">
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
