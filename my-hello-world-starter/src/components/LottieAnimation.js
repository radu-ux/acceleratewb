import React from 'react';
import Lottie from 'react-lottie';

const LottieAnimation = ({animation, width, height}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };

    return (
        <Lottie options={defaultOptions} width={width} height={height} />
    );
}

export default LottieAnimation;