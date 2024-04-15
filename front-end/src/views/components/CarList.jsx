import React from 'react';
import CarCard from './CarCard';
import './CarList.css';

const CarList = ({ cars }) => {
    return (
        <>
            <ul className='cars'>
                {cars.length > 0 ?
                        cars.map(car => <li key={car._id}><CarCard car={car} /></li>)
                    :
                        <>
                            <h2>No cars to list. Add the first one!</h2>
                        </>
                }
            </ul>
        </>
    )
}

export default CarList