import React from "react";
import Lottie from 'react-lottie';

import animationData from '../../assets/restaurants-loading.json';

export default () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (<div>
        <Lottie options={defaultOptions}
            height={400}
            width={300}
        />
    </div>)
}