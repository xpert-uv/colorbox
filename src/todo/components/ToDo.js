import React from 'react'

const ToDo = ({ id, todo, rm }) => {
    return (
        <>
            <p>{id} {todo} <button id={id} onClick={rm} >X</button></p>
        </>
    )
}

export default ToDo
