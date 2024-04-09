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
          <div>No cars to list</div>
        }
      </ul>
    </>
  )
}

export default CarList