import React from "react";
import "./NewCarsMsg.css";
const NewCarsMsg = () => {
  return (
    <div className="container cars-msg">
      <h3 className="newCar-title">Newest car listings:</h3>
      <img
        src="http://localhost:5555/images/arrow_down_png.png"
        alt="Bounce arrow"
        className="bounce-arrow"
      ></img>
    </div>
  );
};

export default NewCarsMsg;
