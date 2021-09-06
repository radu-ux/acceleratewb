import React, {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

export const H2 = ( {animationType, animationDuration, isCentered, children} ) => {
    useEffect(() => {
        AOS.init()
    }, []); 

    return (
        <div data-aos={animationType} data-aos-duration={animationDuration} className={`flex flex-row justify-center ${isCentered ? "": "text-center"}`}>
            <p className="font-bold text-4xl self-center">{children}</p>
        </div>
    )
}

export const Card = ( {cardEffect, cardImage, cardTitle, _class, children} ) => {
    const CardImage = cardImage
    return (
        <div className={`flex flex-col mx-auto text-center shadow-lg py-5 px-5 md:text-left md:flex-row lg:max-w-lg 2xl:max-w-xl ${_class}`} data-aos={cardEffect}>
            <div className="p-2 self-center md:self-start">
                <CardImage></CardImage>
            </div>
            <div className="flex flex-col ml-2">
                <h3 className="text-2xl font-semibold pb-4">{cardTitle}</h3>
                <p className="leading-7">
                    {children}
                </p>
            </div>
        </div>
    );
}

export const TechCard = ( {animationEffect, animationDuration, title, cardImage, _class, children} ) => {
    const CardImage = cardImage;
    
    return (
        <div data-aos={animationEffect} data-aos-duration={animationDuration} className={`flex flex-col shadow-lg py-3 px-3 mx-8 lg:max-w-xs lg:mx-0 ${_class}`}>
            <div className="flex flex-col items-center md:flex-row md:self-start">
                <CardImage></CardImage>
                <div className="text-xl font-bold md:ml-4">{title}</div>   
            </div>
            <div className="text-center md:text-left md:ml-20">{children}</div>
        </div>
    );
}

export const FooterLink = (props ) => {
    return (
        <div className="flex flex-col space-y-2 mt-20 lg:mt-0">
            <p className="font-bold text-xl mb-5">{props.children}</p>
            {props.links.map(link => <a className="hover:text-gray-100" href={`${link.url}`}>{link.name}</a>)}
        </div>
    );
}

export const ContactButton = ({children}) => {
    return (
        <button className="text-lg bg-white px-5 py-3 rounded-full text-black font-bold shadow-lg transition duration-150 ease-in-out transform hover:-translate-y-1">
            {children}
        </button>
    );
}