import React, {useEffect, useRef} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

export const H2 = ({animationType, animationDuration, children}) => {
    useEffect(() => {
        AOS.init()
    }, []);

    return (
        <div data-aos={animationType} data-aos-duration={animationDuration} className="flex justify-center">
            <p className="font-bold text-4xl self-center">{children}</p>
        </div>
    )
}

export const Card = ({cardEffect, cardImage, cardTitle, _class, children}) => {
    const CardImage = cardImage
    return (
        <div className={`flex flex-row shadow-lg py-5 px-5 max-w-lg 2xl:max-w-xl ${_class}`} data-aos={cardEffect}>
            <div className="p-2 mt-5">
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