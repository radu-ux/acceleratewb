import React from 'react';
import Logo from '../images/acceleratewb.svg';

const Navigation = () => {
    return (
        <header className="sticky top-0 z-50 bg-white flex flex-row justify-between xl:px-40 2xl:px-80 shadow-lg w-full">
            <a href="#"><img src={Logo} width="140px" height="20px"></img></a>
            <nav className="flex flex-row text-lg font-medium self-center">
                <a href="#">Acasa</a>
                <a className="mx-10" href="#">Despre Noi</a>
                <a className="mr-10" href="#">Servicii</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Navigation;
