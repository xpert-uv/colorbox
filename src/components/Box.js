import React from 'react'
import "../css/Box.css"
const Box = ({ bgColor, width, height, rm, id }) => {
    return (
        <div className="Box" style={{ backgroundColor: `${bgColor}`, width: `${width}px`, height: `${height}px` }}>
            <small><button id={id} onClick={rm}>x</button></small>
        </div>
    )
}

export default Box;
