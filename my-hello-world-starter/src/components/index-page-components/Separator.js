import React from 'react';
import { ContactButton } from '../common/SharedComponents';
import { SeparatorWrapper } from '../styled-components';

const Separator = () =>{
    return (
        <SeparatorWrapper>
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
                    <ContactButton>Contacteaza-ne</ContactButton>
                </div>
            </div>
        </SeparatorWrapper>
    )
}

export default Separator;