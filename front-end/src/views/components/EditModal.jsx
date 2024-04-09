import React, { useState } from 'react'
import Modal from './Modal'
import './EditModal.css';
const path = '';

const EditModal = ({toggleModal}) => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    function handleSubmitEdit(ev) {
        ev.preventDefault()
        console.log(formData);
    }
    return (
        <Modal toggleModal={toggleModal} headerText="Edit car information">
            <form className='editForm' onSubmit={handleSubmitEdit} action="/create/car" method="post">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={handleInputChange}
                />
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    required
                    onChange={handleInputChange}
                />
                <label htmlFor="image">Image URL:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    required
                    onChange={handleInputChange}
                />
                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    required
                    onChange={handleInputChange}
                />
                <button type="submit">
                    Save Edit
                </button>
            </form>
        </Modal>
    )
}

export default EditModal
