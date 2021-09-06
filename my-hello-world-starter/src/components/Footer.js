import React from 'react';
import Logo from '../components/Logo';
import { FooterLink } from './common/SharedComponents';
import { FooterWrapper } from './styled-components';


const Footer = () => {
    const links = 
        {
            services: [
                {name: "Creare site web", url:"#"}, 
                {name: "Creare magazin online", url:"#"}, 
                {name: "Servicii marketing", url:"#"}, 
                {name: "Branding digital", url:"#"}
            ], 
            info: [
                {name: "Politica cookie", url:"#"}, 
                {name: "Confidentialitate", url:"#"}, 
                {name: "Termeni si conditii", url:"#"},
            ]

        };
    
    return (
        <FooterWrapper className="flex flex-col mt-32 p-5">
            <div className="flex flex-col border-b pb-10 text-white lg:flex-row justify-around lg:mx-auto">
                <div className="flex flex-col">
                    <Logo />
                    <div className="lg:max-w-sm">Aici pentru a-ti duce afacerea la un alt nivel prin intermediul onlineului</div>
                </div>
                    <div className="flex flex-col space-x-0 ml-0 md:flex-row md:justify-between lg:space-x-16 lg:ml-16">
                        <FooterLink links={links.services}>Servicii</FooterLink>
                        <FooterLink links={links.info}>Informatii utile</FooterLink>
                        <div className="flex flex-col space-y-2 mt-20 lg:mt-0"> 
                            <p className="font-bold text-xl mb-5">Date contact</p>
                            <p>acceleratewb Business Center SRL</p>
                            <p>CUI: 33433432 | 12321332</p>
                            <p>Telefon: 0765.623.342</p>
                            <a href="mailto:contact@acceleratewb.ro">Email: contact@acceleratewb.ro</a>
                        </div>
                    </div>
                </div>
            <div className="mx-auto mt-5 text-white"> 
                <p>Copyright @ 2021. Toate drepturile rezervate</p>
            </div>
        </FooterWrapper>
    )
}

export default Footer;
