import React from "react";

const H2 = (props) => {
    return (
        <p className="font-bold text-5xl self-center border-b-2 border-yellow-500">{props.children}</p>
    )
}

export default H2;