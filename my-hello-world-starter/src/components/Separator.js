import React from 'react';
import styled from 'styled-components';
import SeparatorImage from '../images/waves.svg';

const StyledSeparator = styled.div`
    background-color: #3d72ea;
`;

const ContactButton = () => {
    return (
        <button className="text-lg bg-white px-5 py-3 rounded-full text-black font-bold shadow-lg transition duration-150 ease-in-out transform hover:-translate-y-1">Hai sa discutam!</button>
    );
}

const Separator = () =>{
    return (
        <StyledSeparator>
            <div className='flex flex-col space-y-5 py-5 mx-5 justify-around text-white md:flex-row md:space-y-0 2xl:justify-center 2xl:space-x-96'>
                <div className='flex flex-col space-y-3'>
                    <p className='text-3xl font-bold'>
                       Care sunt avantajele de a lucra impreuna? 
                    </p>
                    <ul className='ml-5 space-y-1 list-disc'>
                        <li>
                            Gazduire web + mentenanta gratuite timp de un an
                        </li>
                        <li>
                            Oferim o sedinta de consultanta gratis pentru a-ti raspunde la orice intrebari
                        </li>
                    </ul>
                </div>
                <div className="self-center">
                    <ContactButton/>
                </div>
            </div>
        </StyledSeparator>
    )
}

export default Separator;