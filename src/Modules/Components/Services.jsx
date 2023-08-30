import React, { useState } from "react";
import "./Services.css";
import { Col, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardImages from "./Service images/Content-Writing.jpg";
import CardImages1 from "./Service images/Designing.jpg";
import CardImages2 from "./Service images/SMO.jpg";
import CardImages3 from "./Service images/DIGITAL-MARKETING.jpg";
import CardImages4 from "./Service images/ContentStrategy.jpg";
import CardImages5 from "./Service images/CUSTOMISED-SERVICES.jpg";

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
      <div className='service-bg-color'>
    <Container>
      <Row className='p-3'>
        <Col md={6}>
          <h1 className='service-heading'>Services</h1>
        </Col>
        <Col md={6}>
          <div className='d-flex justify-content-end align-items-center h-100'>
            <Link to="/" className="service-link"><span className='service-subheading'>Home</span></Link>
            <span className='service-subheading'>&nbsp;&gt;&nbsp;</span>
            <span className='service-subheading'>Services</span>
          </div>
        </Col>
      </Row>
    </Container>

    </div>
      <div className="some-cards2 ">
    

        <CardGroup className="our-cardgroup1">
          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="custom-card2"
          >
            <Card.Img className="some-img2" variant="top" src={CardImages} />

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
          </Card>
          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="custom-card2"
          >
            <Card.Img className="some-img2" variant="top" src={CardImages1} />
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
          </Card>
          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="custom-card2"
          >
            <Card.Img className="some-img2" variant="top" src={CardImages2} />
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
                  {/* <Card.Title>Digital Marketing</Card.Title> */}
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
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Services;
