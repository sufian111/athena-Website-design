import React from "react";
import "./SingleWhatWeDo.css";
const SingleWhatWeDo = ({ service }) => {
  const { id, name, img, details } = service;
  return (
    <div className="col-md-3 p-3 cardHover text-center">
      <img
        className="img-fluid m-4"
        style={{ width: "30%" }}
        src={img}
        alt=""
      />
      <br />
      <h5 className="">
        <strong>{name} </strong>
      </h5>
      <p>{details}</p>
    </div>
  );
};

export default SingleWhatWeDo;
