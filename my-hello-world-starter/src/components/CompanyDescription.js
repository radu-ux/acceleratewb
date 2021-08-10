import React from 'react'
import H2 from '../components/common/SharedComponents';
import CompanyDescriptionImg from '../images/hero-img.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
    img { 
        width: 80%;
    }
`;

const CompanyDescription = () => {
    return (
        <section className="flex flex-col mt-20">
            <H2>Cine suntem ?</H2>
            <div className="flex flex-row justify-center my-10">
                <div className="flex flex-col self-center max-w-xl">
                    <p className="text-2xl mx-5">
                        Suntem o companie ce ne ocupam cu dezvoltarea de solutii web pentru afacerea ta.
                        Dispunem de o echipa flexibila, capabila de a-ti ajuta compania sa-si creasca 
                        veniturile prin intermediul onlineului.
                    </p>
                    <button className="text-lg bg-blue-500 py-2 w-40 mt-5 mx-auto rounded-full text-white shadow-lg hover:bg-blue-700">Cere oferta</button>
                </div>
                <Wrapper>
                   <img className="rounded-full"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-500.jpg"
                        srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-500.jpg 500w,
                               https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/cat-1000.jpg 1000w"
                        sizes="(min-width: 600px) 50vw, 100vw" >        
                </img>
                </Wrapper>
            </div>
        </section>
    )
}

export default CompanyDescription;
