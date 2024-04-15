import React, { useEffect, useState } from 'react';
import CarList from './components/CarList';
import { get } from '../utils/api';
import { fetchCars } from '../utils/cars';


const MyPosts = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        let getCars = async () => {
            let carsArray = await fetchCars()
            setCars([...carsArray]);
        }
        getCars();
    }, []);
    return (
        <div>
            <>
                <CarList cars={cars} />
            </>
        </div>
    )
}

export default MyPosts;
