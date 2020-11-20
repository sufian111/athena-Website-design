import React from "react";
import "./SingleAchivement.css";
const SingleAchivement = ({ service }) => {
  const { id, name, img, number } = service;
  return (
    <div className="col-md-5 m-3 pl-5 pr-5 pt-2 pb-2 projectCard ">
      <div>
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <img style={{ width: "70%" }} src={img} alt="" />
          </div>
          <div className="col-md-6">
            <h1>{number}</h1>
            <p>{name} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAchivement;
