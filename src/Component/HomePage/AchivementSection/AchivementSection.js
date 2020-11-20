import React from "react";
import SingleAchivement from "./SingleAchivement";

const AchivementSection = () => {
  const allServices = [
    {
      id: 1,
      name: "Happy Clients",
      img: "https://i.ibb.co/BK28sYy/surface1-2x.png",
      number: "700+",
    },
    {
      id: 2,
      name: "Project Complete",
      img: "https://i.ibb.co/sVwVSfF/marketing-2x.png",
      number: "140+",
    },
    {
      id: 3,
      name: "Crazy Mind",
      img: "https://i.ibb.co/BK28sYy/surface1-2x.png",
      number: "25+",
    },
    {
      id: 4,
      name: "Running Project",
      img: "https://i.ibb.co/0m9PN1K/transportation-2x.png",
      number: "75+",
    },
  ];
  return (
    <div className="m-5">
      <div className="row p-5 d-flex align-items-center">
        <div className="col-md-5">
          <h1>
            <strong>Our Achievements</strong>{" "}
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letter
          </p>
        </div>
        <div className="col-md-7">
          <div className="row">
            {allServices.map((service) => (
              <SingleAchivement
                key={service.id}
                service={service}
              ></SingleAchivement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchivementSection;
