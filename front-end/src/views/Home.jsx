import React, { useEffect, useState } from 'react'
import { get } from '../utils/api'
import CarList from './components/CarList';

const Home = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        let getCars = async () => {
            let carsArray = await get('/cars')

            setCars([...carsArray])


        }
        getCars()
    }, []);

    return (
        <>
            
            <CarList cars={cars} />
        </>
    )
}

export default Home