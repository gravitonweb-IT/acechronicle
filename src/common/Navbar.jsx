import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../Modules/Components/Images/ace_logo_dark.png";
import "./Navbar.css";
import "animate.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };
  const handleNavLinkClick = () => {
    closeNav();
  };
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar-container ${isHeaderFixed ? "fixed-header" : ""}`}>
        <img src={image1} alt="my image" className="logo-img" />
        <span className="toggle-button" onClick={openNav}>
          &#9776;
        </span>
        <div id="mySidenav" className={`sidenav ${isNavOpen ? "open" : ""}`}>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <Link to="/"  className="custom-link  "  onClick={handleNavLinkClick}>
            Home
          </Link>
          <Link to="/about" className="custom-link "  onClick={handleNavLinkClick}>
            About
          </Link>
          <Link to="/blog" className="custom-link "  onClick={handleNavLinkClick}>
            Blog
          </Link>
          <Link to="/detailsblog" className="custom-link"  onClick={handleNavLinkClick}>
            Blog Details
          </Link>
          <Link to="/services" className="custom-link "  onClick={handleNavLinkClick}>
            Services
          </Link>
          <Link to="/career" className="custom-link"  onClick={handleNavLinkClick}>
            Career
          </Link>
        </div>

        <h2></h2>
        <p>.</p>
      </div>
    </>
  );
};

export default Navbar;
