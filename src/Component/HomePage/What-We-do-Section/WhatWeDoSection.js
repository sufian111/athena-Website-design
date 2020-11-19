import React from "react";
import SingleWhatWeDo from "./SingleWhatWeDo";
import "./WhatWeDoSection.css";
const WhatWeDoSection = () => {
  const allServices = [
    {
      id: 1,
      img: "https://i.ibb.co/fN9kbY7/Group-65-2x.png",
      name: "Experience Design",
      details:
        "The point of using LoremIpsum is that it has a more-or less normal.",
    },

    {
      id: 2,
      img: "https://i.ibb.co/z6Js0zQ/Group-66-2x.png",
      name: "Interface Design",
      details:
        "The point of using LoremIpsum is that it has a more-or less normal.",
    },

    {
      id: 3,
      img: "https://i.ibb.co/471ySgK/Group-69-2x.png",
      name: "Experience Design",
      details:
        "The point of using LoremIpsum is that it has a more-or less normal.",
    },
    {
      id: 4,
      img: "https://i.ibb.co/n6P6Sf1/Group-72-2x.png",
      name: "Experience Design",
      details:
        "The point of using LoremIpsum is that it has a more-or less normal.",
    },
  ];
  return (
    <div className="">
      <div className="text-center m-5">
        <h1>
          <strong>What We Do</strong>{" "}
        </h1>
        <p>
          Our main focus is to make the User Experience very simple and easy.{" "}
          <br />
          Simplicity is our Strength.
        </p>
      </div>
      <div className="row m-5">
        {allServices.map((service) => (
          <SingleWhatWeDo key={service.id} service={service}></SingleWhatWeDo>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDoSection;
