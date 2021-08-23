import React, {useEffect, useRef} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

export const H2 = ({animationType, animationDuration, isCentered, children}) => {
    useEffect(() => {
        AOS.init()
    }, []);

    return (
        <div data-aos={animationType} data-aos-duration={animationDuration} className={`flex ${isCentered ? "justify-center": "ml-5"}`}>
            <p className="font-bold text-4xl self-center">{children}</p>
        </div>
    )
}

export const Card = ({cardEffect, cardImage, cardTitle, _class, children}) => {
    const CardImage = cardImage
    return (
        <div className={`flex flex-col mx-auto text-center md:text-left md:flex-row shadow-lg py-5 px-5 xl:max-w-lg 2xl:max-w-xl ${_class}`} data-aos={cardEffect}>
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