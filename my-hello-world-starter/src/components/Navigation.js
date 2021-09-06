import React, {useState} from 'react';
import { BurgerMenuIcon, MenuLinks, BurgerMenuWrapper } from './styled-components';
import Logo from '../components/Logo';

const NavButton = ({text, _ref, _class}) => {
    return (
        <a href={_ref} className={`${_class} self-center text-lg font-semibold border-b-2 border-gray-200 md:border-transparent hover:border-blue-500`}>{text}</a>
    );
}

const Navigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 bg-white shadow-lg flex flex-row justify-between w-full px-5 sm:px-10 md:px-20 lg:px-36 xl:px-40 2xl:px-80">
            <Logo />
            <BurgerMenuWrapper>
                <BurgerMenuIcon id="burger-menu" menuOpen={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </BurgerMenuIcon>
                <MenuLinks menuOpen={open} className="shadow-xl space-y-3 md:shadow-none md:space-y-0">
                    <NavButton text="Acasă" _ref="#" />
                    <NavButton text="Despre Noi" _ref="#" _class="sm:mx-0 md:mx-8"/>
                    <NavButton text="Servicii" _ref="#" _class="sm:mr-0 md:mr-8"/>
                    <NavButton text="Contact" _ref="#" />
                </MenuLinks>
            </BurgerMenuWrapper>
        </header>
    )
}

export default Navigation;
