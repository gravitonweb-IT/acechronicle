import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import image1 from "../Modules/Components/Images/ace_logo_dark.png";
import "./Navbar.css";

const Navbar = () => {
  const expandSizes = [false, "sm", "md", "lg", "xl", "xxl"];

  return (
    <>
      <Container fluid className="custom-navbar">
        <NavBar expand={expandSizes[0]} className="custom-navbar fixed-top ">
          <NavBar.Brand href="#">
            <img src={image1} alt="my image" className="logo-img" />
          </NavBar.Brand>
          <NavBar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expandSizes[0]}`}
          />
          <NavBar.Offcanvas
            id={`offcanvasNavbar-expand-${expandSizes[0]}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expandSizes[0]}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expandSizes[0]}`}
              >
                Ace Chronicle
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Link to="/" className="custom-link">
                  Home
                </Link>
                <Link to="/about" className="custom-link">
                  About
                </Link>
                <Link to="/blog" className="custom-link">
                  Blog
                </Link>
                <Link to="/detailsblog" className="custom-link">
                  Blog Details
                </Link>
                <Link to="/services" className="custom-link">
                  Services
                </Link>
                <Link to="/career" className="custom-link">
                  Career
                </Link>
              </Nav>
            </Offcanvas.Body>
          </NavBar.Offcanvas>
        </NavBar>
      </Container>
    </>
  );
};

export default Navbar;
