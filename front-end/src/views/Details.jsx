import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../utils/api';
const detailsPath = '/cars/';
const deletePath = '/cars/delete/';

const Details = () => {
    const { carId } = useParams();
    const [car, setCar] = useState()
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user ?
        user.id
        :
        null;
    useEffect(() => {
        let getCar = async () => {
            let carDetails = await get(detailsPath + carId)
            setCar({ ...carDetails })
        }
        getCar()
    }, []);
    function handleDelete(ev, carId) {
        ev.preventDefault()
        get(deletePath + carId)
    }
    return (
        <div>
            {car ?
                <div className="car">
                    <img className='carImage' src={car.image} alt="Car Image"></img>
                    <div className="container">
                        <h4><b>Name: {car.name}</b></h4>
                        <p>Description: {car.description}</p>
                        <p>Price: {car.price}</p>
                        {car.owner == userId
                            &&
                            <button onClick={(ev) => handleDelete(ev, car._id)} >Delete</button>
                        }
                    </div>
                </div>
                :
                <h1>Loading car details</h1>
            }
        </div>
    )
}

export default Details
