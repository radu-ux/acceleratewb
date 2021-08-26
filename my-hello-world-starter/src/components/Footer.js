import React from 'react';
import styled from 'styled-components';
import LogoImage from '../images/acceleratewb.png';
import Bubble from '../images/footer.svg';

const Logo = styled.img`
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 170px;
    height: 65px;

    @media (min-width: 300px) {
        width: 150px;
        height: 60px;
    }

    @media (min-width: 768px) {
        width: 170px;
        height: 65px;
    }
`;

const StyledSection = styled.footer`
        background: url(${Bubble}) center ;
        background-size: cover;
        background-repeat: no-repeat;
`;


const Footer = () => {
    return (
        <StyledSection className="flex flex-col mt-20 p-5">
            <div className="flex flex-col border-b pb-10 text-white lg:flex-row justify-around lg:mx-auto">
                <div className="flex flex-col">
                    <Logo width="170" height="65" src={LogoImage} alt="acceleratewb-logo-image"/>
                    <div className="lg:max-w-sm">Aici pentru a-ti duce afacerea la un alt nivel prin intermediul onlineului</div>
                </div>
                    <div className="flex flex-col space-x-0 ml-0 md:flex-row md:justify-between lg:space-x-16 lg:ml-16">
                        <div className="flex flex-col space-y-2 mt-20 lg:mt-0"> 
                            <a className="font-bold text-xl mb-5" href="">Servicii</a>
                            <a href="">Creare site web</a>
                            <a href="">Creare magazin online</a>
                            <a href="">Servicii marketing</a>
                            <a href="">Branding digital</a>
                        </div>
                        <div className="flex flex-col space-y-2 mt-20 lg:mt-0"> 
                            <a className="font-bold text-xl mb-5" href="">Informatii utile</a>
                            <a href="">Politica cookie</a>
                            <a href="">Confidentialitate</a>
                            <a href="">Termeni si conditii</a>
                        </div>
                        <div className="flex flex-col space-y-2 mt-20 lg:mt-0"> 
                            <p className="font-bold text-xl mb-5">Date contact</p>
                            <p>acceleratewb Business Center SRL</p>
                            <p>CUI: 33433432 | 12321332</p>
                            <p>Telefon: 0765.623.342</p>
                            <a href="">Email: contact@acceleratewb.ro</a>
                        </div>
                        </div>
                </div>
            <div className="mx-auto mt-5 text-white"> 
                <p>Copyright @ 2021. Toate drepturile rezervate</p>
            </div>
        </StyledSection>
    )
}

export default Footer;
