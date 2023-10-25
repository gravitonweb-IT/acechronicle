import React, { useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardImages from "./Service images/Content-Writing.jpg";
import CardImages1 from "./Service images/Designing.jpg";
import CardImages2 from "./Service images/SMO.jpg";
import CardImages3 from "./Service images/DIGITAL-MARKETING.jpg";
import CardImages4 from "./Service images/ContentStrategy.jpg";
import CardImages5 from "./Service images/CUSTOMISED-SERVICES.jpg";
import servicebanner from "./Service images/servicepagevideo.mp4";
import ServicesBanner from "./contentImg/services-banner-image1.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenRuler,
  faTachographDigital,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="video-services-container">
        <video id="video" autoPlay loop className="servicebanner-vdeo">
          <source src={servicebanner} type="video/mp4" />
        </video>
        <div className="content-overlay text-center">Services</div>
      </div>
      {/* <div
        className="content-section1 position-relative d-flex justify-content-center
       align-items-center"
      >
        <img
          src={ServicesBanner}
          alt="Content Banner"
          className="content-section-image1"
        />

        <div className="position-absolute">
          <h1 className="text-white text-center services-content-heading">
            Services
          </h1>
        </div>
      </div> */}

      {/* <div className="some-cards2">
        <CardGroup className="our-cardgroup1">
          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="custom-card2"
          >
            <Card.Img className="some-img2" variant="top" src={CardImages} />

            <Link to="/contentspeak">
            <Card.Body>
              <div className="service-overlay1">
                <div className="service1">
                  <Card.Title>
                    {isHovered ? "Content Writing" : "Content Writing"}
                    <p className="service-para">Ace Chronicle</p>
                  </Card.Title>
                </div>
              </div>
            </Card.Body>
            </Link>
          </Card>

          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="custom-card2"
          >
            <Card.Img className="some-img2" variant="top" src={CardImages1} />
            <Link to="/designpop">
            <Card.Body>
              <div className="service-overlay1">
                <div className="service1">
                  <Card.Title>
                    {" "}
                    {isHovered ? "Designing" : "Designing"}
                    <p className="service-para">Ace Chronicle</p>
                  </Card.Title>
                </div>
              </div>
            </Card.Body>
            </Link>
          </Card>

          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="custom-card2"
          >
            <Card.Img className="some-img2" variant="top" src={CardImages2} />
            <Link to="/markettwist">
            <Card.Body>
              <div className="service-overlay1">
                <div className="service1">
                  <Card.Title>
                    {" "}
                    {isHovered
                      ? "Social Media Management"
                      : "Social Media Management"}
                    <p className="service-para">Ace Chronicle</p>
                  </Card.Title>
                </div>
              </div>
            </Card.Body>
            </Link>
          </Card>

        </CardGroup>

        <CardGroup className="our-cardgroup2">
          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="custom-card2"
          >
            <Card.Img className="some-img2" variant="top" src={CardImages3} />
            <Card.Body>
              <div className="service-overlay1">
                <div className="service1">
                  <Card.Title>
                    {" "}
                    {isHovered ? "Digital Marketing" : "Digital Marketing"}
                    <p className="service-para">Ace Chronicle</p>
                  </Card.Title>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="custom-card2"
          >
            <Card.Img className="some-img2" variant="top" src={CardImages4} />
            <Card.Body>
              <div className="service-overlay1">
                <div className="service1">
                  <Card.Title>
                    {" "}
                    {isHovered ? "Strategy" : "Strategy"}
                    <p className="service-para">Ace Chronicle</p>
                  </Card.Title>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="custom-card2"
          >
            <Card.Img className="some-img2" variant="top" src={CardImages5} />
            <Link to="/exclusive">
            <Card.Body>
              <div className="service-overlay1">
                <div className="service1">
                  <Card.Title>
                    {" "}
                    {isHovered ? "Customised Service" : "Customised Service"}
                    <p className="service-para">Ace Chronicle</p>
                  </Card.Title>
                </div>
              </div>
            </Card.Body>
            </Link>
          </Card>

        </CardGroup>
      </div> */}

      <div className="services-second-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4" style={{ padding: 0, margin: 0 }}>
              <div className="services-image1-section">
                <div className="secvices-icon1">
                  <i class="bi bi-pencil"></i>
                </div>
                <h3 className="text-center mt-2">Content Writing</h3>
                <p className="text-center text-[#848892] mt-2">
                  Content writing is a skill that involves crafting engaging and
                  informative text to convey ideas, inform, and captivate the
                  audience.
                </p>
              </div>
            </div>

            <div className="col-md-4" style={{ padding: 0, margin: 0 }}>
              <div class="services-effect-box">
                <div className="">
                  <img src={CardImages2} alt=""></img>
                </div>

                <div class="services-effect-layer">
                  <h4 className="text-2xl font-semibold">SOCIAL MEDIA</h4>
                </div>
              </div>
            </div>

            <div className="col-md-4" style={{ padding: 0, margin: 0 }}>
              <div className="services-image1-section">
                <div className="secvices-icon2">
                  <FontAwesomeIcon icon={faPenRuler} />
                </div>
                <h3 className="text-center mt-3">Designing</h3>
                <p className="text-center text-[#848892] mt-3">
                  Designing is a multifaceted discipline encompassing form,
                  function, and aesthetics. It unites creativity, balance, and
                  color.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4" style={{ padding: 0, margin: 0 }}>
              <div class="services-effect-box">
                <div className="">
                  <img src={CardImages3} alt=""></img>
                </div>

                <div class="services-effect-layer">
                  <h4 className="text-2xl font-semibold">DIGITAL MARKETING</h4>
                </div>
              </div>
            </div>

            <div className="col-md-4" style={{ padding: 0, margin: 0 }}>
              <div className="services-image1-section">
                <div className="secvices-icon2">
                  <FontAwesomeIcon icon={faTachographDigital} />
                </div>
                <h3 className="text-center mt-3">Customised Service</h3>
                <p className="text-center text-[#848892] mt-3">
                  Customized services provide tailored solutions, meeting unique
                  needs. From personalized products to individualized.
                </p>
              </div>
            </div>

            <div className="col-md-4" style={{ padding: 0, margin: 0 }}>
              <div class="services-effect-box">
                <div className="">
                  <img src={CardImages4} alt=""></img>
                </div>

                <div class="services-effect-layer">
                  <h4 className="text-2xl font-semibold">STRATEGY</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
