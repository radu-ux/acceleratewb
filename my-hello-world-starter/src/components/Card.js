import React from "react";

const Card = ({image, title, children, classN}) => {
    return (
        <div data-aos="flip-left" className={`flex flex-col border-2 border-gray-200 shadow-xl max-w-xs lg:w-full md:bg-green-100 lg:bg-blue-100 sm:min-h-96 2xl:max-h-full lg:px-10 xl:px-0 ${classN}`}>
            <img className="w-32 h-32 2xl:w-48 2xl:h-48 2xl:my-0 sm:w-44 sm:h-44 self-center" src={image}></img>
            <p className="text-2xl sm:text-3xl font-semibold self-center capitalize ">{title}</p>
            <p className="pt-10 pb-5 2xl:pb-10 mx-2">{children}</p>
            <a className="my-6 py-2 px-2 border-2 rounded-full border-yellow-500 self-center bg-white transition duration-500 ease-in-out hover:bg-yellow-500 hover:text-white" href="#">
            Descopera
            </a>
        </div>
    );
};

export default Card;