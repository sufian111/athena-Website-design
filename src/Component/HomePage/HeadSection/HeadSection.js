import React from "react";
import "./HeadSection.css";
const HeadSection = () => {
  return (
    <div>
      <div className="row p-5">
        <div className="col-md-6">
          <h1 className="bold">
            Florence <br /> Agency
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
            aliquid non placeat eligendi suscipit. Qui pariatur, sequi aliquam
            delectus blanditiis inventore culpa minus nihil dolores dolor
            voluptatum itaque laboriosam quaerat, velit cumque consectetur error
            eligendi magni voluptates magnam! Laboriosam numquam praesentium ut
            illo natus accusantium esse distinctio totam aliquam sit.
          </p>
          <button className=" textSize p-2 navButton">See Pricing</button>
        </div>
        <div className="col-md-6">
          <img
            style={{ width: "100%" }}
            className="image-fluid"
            src="https://i.ibb.co/fGsxsjL/16-Converted-2x.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeadSection;
