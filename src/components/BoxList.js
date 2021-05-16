import React, { useState } from 'react';
import Box from "./Box";
import NewBoxForm from './NewBoxForm';

const BoxList = () => {

    const [bgColor, setbgColor] = useState("green");
    const [width, setWidth] = useState(`${150}px`);
    const [height, setHeight] = useState(`${150}px`);
    const divData = (xx) => {
        console.log(xx);
        setbgColor(xx.bgColor);
        setWidth(xx.width);
        setHeight(xx.height);

    }
    return (
        <>
            <Box bgColor={bgColor} width={width} height={height} />
            <NewBoxForm divData={divData} />
        </>
    )
}

export default BoxList
