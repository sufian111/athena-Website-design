import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import "./NavBarTop.css";
const NavBarTop = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img
            style={{ width: "40%" }}
            src="https://i.ibb.co/fYghGKJ/Group-86.png"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="textSize pr-4" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="textSize pr-4" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="textSize pr-4" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="textSize pr-4" href="#pricing">
              Pricing
            </Nav.Link>
            <Nav.Link className="textSize pr-4" href="#ourTeam">
              Our Team
            </Nav.Link>
            <button className=" textSize p-2 navButton">Contact Us</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarTop;
