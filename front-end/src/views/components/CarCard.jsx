import React from 'react'
let path = '/details/'

import {useNavigate} from 'react-router-dom'
const CarCard = ({car}) => {
    const navigate = useNavigate();
    function handleDetails(ev) {
        ev.preventDefault()
        navigate(`/details/${car._id}`)
    }
    return (
        <>
            <div className="car" key={car._id}>
                <img className='carImage' src={car.image} alt="Avatar"></img>
                    <div className="container">
                        <h4><b>{car.name}</b></h4>
                        <p>{car.description}</p>
                        <p>{car.price}</p>
                        <button onClick={handleDetails}>Details</button>
                    </div>
            </div>
        </>
    )
}

export default CarCard