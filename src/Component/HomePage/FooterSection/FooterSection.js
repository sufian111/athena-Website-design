import React from "react";

const FooterSection = () => {
  return (
    <div className=" m-5">
      <div className="row text-center">
        <div className="col-md-3 text-center">
          <div>
            <img
              style={{ width: "50%" }}
              src="https://i.ibb.co/fYghGKJ/Group-86.png"
              alt=""
            />
            <br />
            <div className="m-2">
              <img
                className="p-2"
                src="https://i.ibb.co/4MVP0pd/facebook-logo-in-circular-shape-2x.png"
                alt=""
              />
              <img
                className="p-2"
                src="https://i.ibb.co/2ZdVNB2/dribbble-1-2x.png"
                alt=""
              />
              <img
                className="p-2"
                src="https://i.ibb.co/v3ScgRG/twitter-4-2x.png"
                alt=""
              />
              <img
                className="p-2"
                src="https://i.ibb.co/GxDZYDY/linkedin-2-2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            <p> Features</p>
            <p>Enterprise</p>
            <p>Pricing</p>
          </div>
        </div>
        <div className="col-md-3">
          <p>Blog</p>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Status</p>
        </div>
        <div className="col-md-3">
          <p>About Us</p>
          <p>Terms of Service</p>
          <p>Security</p>
          <p>Login</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
