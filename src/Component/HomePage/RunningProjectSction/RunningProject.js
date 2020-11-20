import React from "react";

const RunningProject = () => {
  return (
    <div>
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/tDyC2Ng/20-Converted-2x.png"
            alt=""
          />
        </div>
        <div className="col-md-6 p-3">
          <h3>
            <strong>Stay Running & ProjectStay Running & Project</strong>{" "}
          </h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letter.
          </p>
          <button className="textSize p-2 navButton">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default RunningProject;
