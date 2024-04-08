import React from 'react'
let path = '/details/';

import { useNavigate } from 'react-router-dom'
const CarCard = ({ car }) => {
    const navigate = useNavigate();
    
    function handleDetailsClick(ev, id) {
        ev.preventDefault()
        navigate(`/details/${id}`)
    }

    return (
        <>
            <div className="car" key={car._id}>
                <img className='carImage' src={car.image} alt="Avatar"></img>
                <div className="container">
                    <h4><b>{car.name}</b></h4>
                    <p>{car.price}</p>
                    <button onClick={(ev) => handleDetailsClick(ev, car._id)}>Details</button>
                </div>
            </div>
        </>
    )
}

export default CarCard