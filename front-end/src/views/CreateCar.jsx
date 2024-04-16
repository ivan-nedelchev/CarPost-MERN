import React, { useState } from 'react'
import './CreateCar.css'
import { post } from '../utils/api';
import { useNavigate } from 'react-router-dom';
const path = '/car/';

const CreateCar = () => {
    const navigate = useNavigate();
    const [carName, setCarName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const createCar = async (ev) => {
        ev.preventDefault()
        let carObject = await post(path, {
            name : carName, 
            description, 
            image, 
            price
        })
        if(carObject) {
            navigate('/')
        }
    }
    return (
        <>
            <div className='car-form'>
                <h1>Post a car</h1>
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