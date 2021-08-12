import React, {useEffect} from "react";
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

export const Card = ({cardTitle, _class, children}) => {
    return (
        <div className={`common attributes ${_class}`}>
        </div>
    );
}