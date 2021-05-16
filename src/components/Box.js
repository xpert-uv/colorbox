import React from 'react'
import "../css/Box.css"
const Box = ({ bgColor, width, height }) => {
    return (
        <div className="Box" style={{ backgroundColor: `${bgColor}`, width: `${width}px`, height: `${height}px` }}>

        </div>
    )
}

export default Box;
