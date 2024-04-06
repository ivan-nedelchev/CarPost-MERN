import React, { useState } from 'react'
import './CreateCar.css'
import { post } from '../utils/api';
let path = '/create/car';

const CreateCar = () => {
    const [carName, setCarName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const createCar = async (ev) => {
        ev.preventDefault()
        let carObject = await post(path, {name : carName, description, image, price})
    }
    return (
        <>
            <div className='car-form'>
                <h3>Post a car</h3>
                <form onSubmit={createCar} action="/create/car" method="post">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        onChange={ev => setCarName(ev.target.value)}
                    />
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        required
                        onChange={ev => setDescription(ev.target.value)}
                    />
                     <label htmlFor="image">Image URL:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        required
                        onChange={ev => setImage(ev.target.value)}
                    />
                     <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        required
                        onChange={ev => setPrice(Number(ev.target.value))}
                    />

                    <button type="submit">
                        Post
                    </button>
                </form>
            </div>
        </>
    )
}

export default CreateCar