import React, {useState} from 'react';
import styled from 'styled-components';
import LogoImage from '../images/acceleratewb.png';

const NavButton = ({text, _ref, _class}) => {
    return (
        <a href={_ref} className={`${_class} self-center text-lg font-semibold border-b-2 border-gray-200 md:border-transparent hover:border-blue-500`}>{text}</a>
    );
}

const BurgerMenuIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: center;
    height: 1.5rem;
    background: transparent;
    cursor: pointer;
    visibility: hidden;

    div {
        width: 1.5rem;
        height: 0.2rem;
        background: black;
        transform-origin: 1px;
        border-radius: 5px;
        transition: opacity 300ms, transform 300ms;
        
        :first-child {
            transform: ${({menuOpen}) => (menuOpen ? "rotate(45deg)" : "rotate(0)")};
        }

        :nth-child(2) {
            opacity: ${({menuOpen}) => (menuOpen ? "0" : "1")};
        }

        :nth-child(3) {
            transform: ${({menuOpen}) => (menuOpen ? "rotate(-45deg)" : "rotate(0)")};
        }
    }
`;

const MenuLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 35vh;
    top: 45px;
    right: 0;
    position: absolute;
    background: white;
    
    transition: opacity 300ms;
    opacity: ${({menuOpen}) => (menuOpen ? "1" : "0")};
    visibility: ${({menuOpen}) => (menuOpen ? "visible" : "hidden")};

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        opacity: 1;
        visibility: visible;
        position: relative;
        background: transparent;
        height: inherit;
        top: 0;

    }
`;

const Wrapper = styled.div`
    display: flex;

    @media (min-width: 300px) {
        #burger-menu {
            visibility: visible;
        }
    }

    @media (min-width: 768px) {
        #burger-menu {
            visibility: hidden;
        }
    }
`;

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

const Navigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 bg-white flex flex-row justify-between shadow-xl w-full px-5 sm:px-10 md:px-20 lg:px-36 xl:px-40 2xl:px-80">
            <Logo width="170" height="65" src={LogoImage} alt="acceleratewb-logo-image"/>
            <Wrapper>
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
            </Wrapper>
        </header>
    )
}

export default Navigation;
