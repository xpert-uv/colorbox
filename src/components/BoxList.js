import React, { useState } from 'react';
import Box from "./Box";
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';
const BoxList = () => {
    const initalState = [];

    const [boxList, setBoxList] = useState(initalState);

    const divData = (bgColor, width, height) => {
        console.log(uuid());
        setBoxList(boxList => [...boxList, { bgColor, width, height, id: uuid() }])

    }
    const removeBox = (i) => {
        const rmBtn = i.target.id;
        console.log(`this has been clicked : ${rmBtn}`);
        const newBoxList = boxList.filter(box => box.id !== rmBtn);
        setBoxList(newBoxList);
    }
    return (
        <div>
            <h1>Color Pallete</h1>
            <div>
                {boxList.map(box => <Box bgColor={box.bgColor} width={box.width} height={box.height} key={box.id} id={box.id} rm={removeBox} />)}
            </div>

            <NewBoxForm divData={divData} />
        </div>
    )
}

export default BoxList
