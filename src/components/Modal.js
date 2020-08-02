import React from 'react'

const Modal = ({ selectedImg }) => {
    return (
        <div className="backdrop">
            <img src={selectedImg} alt="a modal" />
        </div>
    )
}

export default Modal
