import React from 'react';
import './Modal.css';
const Modal = ({ children, toggleModal, headerText }) => {
    return (
        <>
            <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2>{headerText}</h2>
                    {children}
                    <button className="close-modal" onClick={toggleModal}>
                        CLOSE
                    </button>
                </div>
            </div>
        </>
    )
}

export default Modal;
