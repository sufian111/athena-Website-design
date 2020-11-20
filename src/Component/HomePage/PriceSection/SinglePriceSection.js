import React from "react";
import "./SinglePriceSection.css";
const SinglePriceSection = ({ service }) => {
  const {
    id,
    price,
    title,
    details1,
    details2,
    details3,
    details4,
    details5,
    details6,
  } = service;

  return (
    <div className="col-md-4">
      <div className=" text-center priceBox ">
        <h1>{price} </h1>
        <p className="text-bold">{title} </p>
        <p style={{ fontWeight: "bold" }}>{details1} </p>
        <p style={{ fontWeight: "bold" }}>{details2} </p>
        <p style={{ fontWeight: "bold" }}>{details3} </p>
        <p style={{ fontWeight: "bold" }}>{details4} </p>
        <p style={{ fontWeight: "bold" }}>{details5} </p>
        <p style={{ fontWeight: "bold" }}>{details6} </p>
        <button className=" text p-2 m-2 priceButton hoverShow">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default SinglePriceSection;
