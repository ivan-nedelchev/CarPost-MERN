import React from "react";
import "./NewCarsMsg.css";
const NewCarsMsg = () => {
  return (
    <div className="container cars-msg">
      <h3 className="newCar-title">Newest car posts</h3>
      <img
        src="http://localhost:5555/images/vector-arrows.svg"
        alt="Bounce arrow"
        className="bounce-arrow"
      ></img>
    </div>
  );
};

export default NewCarsMsg;
