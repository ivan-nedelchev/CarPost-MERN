import React, { useEffect, useState } from 'react';
import { get } from '../utils/api';
import CarList from './components/CarList';
import { fetchCars } from '../utils/cars';
const Home = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        let getCars = async () => {
            let carsArray = await fetchCars()
            setCars([...carsArray]);
        }
        getCars();
    }, []);
    return (
        <>
            <CarList cars={cars} />
        </>
    )
}

export default Home;