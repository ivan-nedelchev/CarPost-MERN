import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { get } from '../utils/api';
import EditModal from './components/EditModal';

const detailsPath = '/cars/';
const deletePath = '/cars/delete/';
const Details = () => {
    const [modal, setModal] = useState(false);
    function toggleModal() {
        setModal(!modal);
    }
    const navigate = useNavigate();
    const { carId } = useParams();
    const [car, setCar] = useState();
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ?
        user.id
        :
        null;
    useEffect(() => {
        let getCar = async () => {
            let carDetails = await get(detailsPath + carId);
            setCar({ ...carDetails });
        }
        getCar();
    }, []);
    async function handleDelete(ev, carId) {
        ev.preventDefault();
        await get(deletePath + carId);
        navigate('/');
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
                        {car.owner == userId &&
                            <>
                                <button onClick={(ev) => setModal(true)} >Edit</button>
                                <button onClick={(ev) => handleDelete(ev, car._id)} >Delete</button>
                            </>
                        }
                    </div>
                </div>
                :
                <h1>Loading car details</h1>
            }
            {modal &&
                <>
                    <EditModal car={car} toggleModal={toggleModal}/>
                </>}
        </div>
    )
}

export default Details