import React, { useState } from 'react'
import Modal from './Modal'
import './EditModal.css';
import { put } from '../../utils/api';
const path = '/car/';

const EditModal = ({ toggleModal, car }) => {
    const [formData, setFormData] = useState({});
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    async function handleSubmitEdit(ev) {
        ev.preventDefault()
        await put(path + car._id, { car: formData })
        toggleModal()
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
                    defaultValue={car.name}
                    onChange={handleInputChange}
                />
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    required
                    defaultValue={car.description}
                    onChange={handleInputChange}
                />
                <label htmlFor="image">Image URL:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    required
                    defaultValue={car.image}
                    onChange={handleInputChange}
                />
                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    required
                    defaultValue={car.price}
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
