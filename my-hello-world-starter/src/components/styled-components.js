import styled from 'styled-components';

// Component used to handle the hero section background
export const HeroSection = styled.section`
    min-height: 100vh;
    background: url(${({ mobileBgImage }) => mobileBgImage}) ;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media(max-width: 480px) {
        background: url(${({ mobileBgImage }) => mobileBgImage}) ;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media(min-width: 769px) {
        background: url(${({ largeScreenBgImage }) => largeScreenBgImage}) ;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

// Component used to set the bg color of the footer
export const FooterWrapper = styled.footer`
    background-color: #3d72ea;
`;

// Component used to set the bg color of separator component (from Separator.js file)
export const SeparatorWrapper = styled.div`
    background-color: #3d72ea;
`;

// Component used to set the font of the web page 
export const PageFont = styled.div`
  font-family: 'Baloo Chettan 2';
`;

// Components used to make the website menu responsive 
export const BurgerMenuIcon = styled.div`
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

export const MenuLinks = styled.div`
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

export const BurgerMenuWrapper = styled.div`
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