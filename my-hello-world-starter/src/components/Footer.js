import React from 'react';
import Logo from '../images/acceleratewb.png';

const Footer = () => {
    return (
        <footer className="flex flex-col">
            <div className="flex justify-center flex-col mt-8 md:flex-row md:justify-around md:mx-0 md:py-10 md:mt-0">
                <img className="w-36 order-2 md:order-none self-center" src={Logo}></img>
                
                <div className="flex flex-col self-center mb-2 md:self-start md:mb-0">
                    <p className="uppercase text-yellow-500 font-bold text-opacity-60 mb-4 border-b-2 border-yellow-400">Legaturi</p>
                    <a className="capitalize hover:text-gray-500 mb-2" href="#">FAQ</a>
                    <a className="capitalize hover:text-gray-500 mb-2" href="#">Ajutor</a>
                    <a className="capitalize hover:text-gray-500 mb-2" href="#">Suport</a>
                </div>
                <div className="flex flex-col self-center mb-4 order-1 md:self-start md:mb-0 md:order-none">
                    <p className="uppercase text-yellow-500 font-bold text-opacity-60 mb-4 border-b-2 border-yellow-400">Confidentialitate</p>
                    <a className="hover:text-gray-500 mb-2" href="#">Termeni si conditii</a>
                    <a className="h over:text-gray-500 mb-2" href="#">Politica de Confidentialitate</a>
                </div>
                <div className="flex flex-col self-center mb-4 md:self-start md:mb-0">
                    <p className="uppercase text-yellow-500 font-bold text-opacity-60 mb-4 border-b-2 border-yellow-400">Social</p>
                    <a className="capitalize hover:text-gray-500 mb-2" href="#">Facebook</a>
                    <a className="capitalize hover:text-gray-500 mb-2 " href="#">Instagram</a>
                    <a className="capitalize hover:text-gray-500 mb-2" href="#">Linkedin</a>
                </div>
                <div className="flex flex-col self-center mb-4 md:self-start md:mb-0">
                    <p className="uppercase text-yellow-500 font-bold text-opacity-60 mb-4 border-b-2 border-yellow-400">Companie</p>
                    <a className="capitalize hover:text-gray-500 mb-2" href="#">Blog</a>
                    <a className="capitalize hover:text-gray-500 mb-2 mb-2" href="#">Despre Noi</a>
                    <a className="capitalize hover:text-gray-500 mb-2 mb-2" href="#">Contact</a>
                </div>
            </div>
            <span className="text-xs py-4 font-bold text-yellow-500 self-center">
                @2021 | acceleratewb.ro Toate drepturile rezervate
            </span>
        </footer>
    );
};

export default Footer;