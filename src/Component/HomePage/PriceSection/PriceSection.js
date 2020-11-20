import React from "react";
import "./PriceSection.css";
import SinglePriceSection from "./SinglePriceSection";
const PriceSection = () => {
  const allServices = [
    {
      id: 1,
      price: "$199",
      title: "For Basic",
      details1: "HomePage",
      details2: "No InnerPage",
      details3: "Sourse File",
      details4: "Free Stock Photo",
      details5: "10 Days Free Support",
      details6: " 24/7 Support",
    },
    {
      id: 2,
      price: "$399",
      title: "For Preferred",
      details1: "HomePage",
      details2: "4 InnerPage",
      details3: "Sourse File",
      details4: "Free Stock Photo",
      details5: "20 Days Free Support",
      details6: " 24/7 Support",
    },
    {
      id: 3,
      price: "$599",
      title: "For Elite",
      details1: "HomePage",
      details2: "8 InnerPage",
      details3: "Sourse File",
      details4: "Free Stock Photo",
      details5: "30 Days Free Support",
      details6: " 24/7 Support",
    },
  ];
  return (
    <div className="mb-5 fullSection">
      <div className="text-center ">
        <h1 className="team p-3">
          <strong>Choose Your Dedicated Team</strong>{" "}
        </h1>
      </div>
      <div className="row m-5">
        {allServices.map((service) => (
          <SinglePriceSection
            key={service.id}
            service={service}
          ></SinglePriceSection>
        ))}
      </div>
    </div>
  );
};

export default PriceSection;
