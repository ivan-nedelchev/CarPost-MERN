import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get, delete as delete_ } from "../utils/api";
import EditModal from "./components/EditModal.jsx";
import "./Details.css";

const detailsPath = "/car/";
const deletePath = "/car/";
const Details = () => {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }
  const navigate = useNavigate();
  const { carId } = useParams();
  const [car, setCar] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user ? user.id : null;
  useEffect(() => {
    let getCar = async () => {
      let carDetails = await get(detailsPath + carId);
      console.log(carDetails);
      setCar({ ...carDetails });
    };
    getCar();
  }, [carId, modal]);
  async function handleDelete(ev, carId) {
    ev.preventDefault();
    await delete_(deletePath + carId);
    navigate("/");
  }
  return (
    <div>
      {car ? (
        <div className="car-card">
          <img src={car.image} alt="Car Image"></img>
          <div className="car-details">
            <h2>{car.make + " " + car.model + " " + car.modification}</h2>
            <p className="description">{car.description}</p>
            <ul>
              <li>
                <strong>Year:</strong> {car.year}{" "}
              </li>
              <li>
                <strong>Price:</strong> {car.price} BGN
              </li>
            </ul>
          {car.owner == userId && (
            <>
              <button onClick={() => setModal(true)}>Edit</button>
              <button onClick={(ev) => handleDelete(ev, car._id)}>
                Delete
              </button>
            </>
          )}
          </div>
        </div>
      ) : (
        <h1>Loading car details</h1>
      )}
      {modal && (
        <>
          <EditModal car={car} toggleModal={toggleModal} />
        </>
      )}
    </div>
  );
};

export default Details;
