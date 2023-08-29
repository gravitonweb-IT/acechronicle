import React, { useEffect, useState } from "react";
import "./MainHome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Blog1 from "./MainHomeImgs/blog1.jpg";
import Blog2 from "./MainHomeImgs/blog2.jpg";
import Blog3 from "./MainHomeImgs/blog3.jpg";
import Blog4 from "./MainHomeImgs/blog4.jpg";
import Blog5 from "./MainHomeImgs/blog5.jpg";
import Blog6 from "./MainHomeImgs/blog6.jpg";
import SliderIcon1 from "./Images/slider-icon1.jpg";
import SliderIcon2 from "./Images/slider-icon2.jpg";
import SliderIcon3 from "./Images/slider-icon3.jpg";
import SliderIcon4 from "./Images/slider-icon4.jpg";
import SliderIcon5 from "./Images/slider-icon5.jpg";
import KnowledgeImg from "./Images/Knowledge-Hub-05.png";
import OfferImg from "./MainHomeImgs/offer-image.png";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import image1 from "./Images/Slider1.jpg";
import image2 from "./Images/slider2.jpg";
import image3 from "./Images/Slider3.jpg";
import image4 from "./MainHomeImgs/Content-That-Speaks-for-Itself1.jpg";
import image5 from "./MainHomeImgs/Design-That-Pops-Out.jpg";
import image6 from "./MainHomeImgs/Marketing-With-A-Twist1.jpg";
import image7 from "./MainHomeImgs/Social-Media-Reach-That-You-Need.jpg";
import image8 from "./MainHomeImgs/Futuristic-Strategies-A-Big-Yes.jpg";
import image9 from "./MainHomeImgs/Exclusively-Customised-services.jpg";
import Avatar1 from "./Images/avatar1.jpg";
import Avatar2 from "./Images/avatar2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";
import {
  faUser,
  faCubes,
  faGem,
  faAnchor,
  faEye,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWalking,
  faPuzzlePiece,
  faCamera,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function MainHome() {

  const [projects, setProjects] = useState(0);
  const [startups, setStartups] = useState(0);
  const [brands, setBrands] = useState(0);
  const [clients, setClients] = useState(0);
  const finalValues = [1200, 580, 20, 1000];
  const animationDuration = 4000; // Animation duration in milliseconds
  const animationSteps = 40; // Number of animation steps

  useEffect(() => {
    const stepValue = finalValues.map((value) => value / animationSteps);
    let step = 0;

    const interval = setInterval(() => {
      if (step < animationSteps) {
        setProjects((prevProjects) => prevProjects + stepValue[0]);
        setStartups((prevStartups) => prevStartups + stepValue[1]);
        setBrands((prevBrands) => prevBrands + stepValue[2]);
        setClients((prevClients) => prevClients + stepValue[3]);
        step++;
      } else {
        setProjects(finalValues[0]);
        setStartups(finalValues[1]);
        setBrands(finalValues[2]);
        setClients(finalValues[3]);
        clearInterval(interval);
      }
    }, animationDuration / animationSteps);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const CustomNextArrow = (props) => {
    return null;
  };

  const CustomPrevArrow = (props) => {
    return null;
  };
  const settings = {
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  const settings1 = {
    fade: false,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      {/* Carousels */}
      <div
        id="carouselExampleSlidesOnly"
        class="carousel-slide1"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} alt="my image" className="slider-img" />
            <Carousel.Caption className="slider-caption animate__animated animate__zoomIn">
              <h1>
                <b>
                  Experience The Digital
                  <br />
                  Power
                </b>
              </h1>
              <p className="d-none d-sm-block mt-4">
                Ace Chronicle is here to take your business up digitally. With a
                team of content creators, website designers, logo creators, and
                digital managers, we are here to help you explore the digital
                ends to take your business to new heights.
              </p>
              <Button className="mt-4" variant="outline-light">
                <b>LEARN MORE</b>
              </Button>{" "}
            </Carousel.Caption>
          </div>
          <div class="carousel-item">
            <img src={image2} alt="my image" className="slider-img" />
            <Carousel.Caption className="slider-caption animate__animated animate__zoomIn">
              <h1>
                <b>
                  Explore The Innovation
                  <br />
                  and Creativity{" "}
                </b>
              </h1>
              <p className="d-none d-sm-block mt-4">
                A unique website, creative logo, perfect brochures, and content
                that connects is what you need to experience the digital power.
                With Ace Chronicle, we are here to amaze you at every single
                stage of your success story.
              </p>
              <Button className="mt-4" variant="outline-light">
                <b>LEARN MORE</b>
              </Button>{" "}
            </Carousel.Caption>
          </div>
          <div class="carousel-item">
            <img src={image3} alt="my image" className="slider-img" />
            <Carousel.Caption className="slider-caption animate__animated animate__zoomIn">
              <h1>
                <b>
                  Excel The Competitive
                  <br />
                  Edge
                </b>
              </h1>
              <p className="d-none d-sm-block mt-4">
                With the competition rising high, we are here to help you excel
                at the competitive edge. With the customized and personalized
                strategies to drive your business reach and success, Ace
                Chronicle is here to offer you all the advantages you need.
              </p>
              <Button className="mt-4" variant="outline-light">
                <b>LEARN MORE</b>
              </Button>{" "}
            </Carousel.Caption>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="mainhome-card-backgroundcolor">
        <Container>
          <Row className="home-cards1 d-flex justify-content-center ">
            <Col lg={4}>
              <div className="custom-card-container1">
                <Card className="custom-card1">
                  <Card.Body>
                    <p className="number-cards ">01</p>
                    <Card.Title> Brand-First Approach </Card.Title>

                    <Card.Text>
                      Every brand is different, and we understand that. We
                      believe first impressions are important, so we work based
                      on your exclusive needs. Our priority is customization and
                      personalization of services to match your service needs.
                      Simplifying the digital workflow is the base of our
                      customization.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col lg={4}>
              <div className="custom-card-container1">
                <Card className="custom-card1">
                  <Card.Body>
                    <p className="number-cards">02</p>
                    <Card.Title> Integrated Solutions</Card.Title>

                    <Card.Text>
                      One-stop solution for all your digital needs is our motto.
                      We believe in merging the different services to curate an
                      integrated solution that perfectly fits your digital
                      approach. With no limit to integration, we aim to amaze
                      you are every step.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4}>
              <div className="custom-card-container1">
                <Card className="custom-card1">
                  <Card.Body>
                    <p className="number-cards">03</p>
                    <Card.Title>End-To-End Customer Support </Card.Title>

                    <Card.Text>
                      We work to bring your vision to reality. We offer
                      end-to-end customer support to create magic with
                      innovative ideas and an amazing team of experts. Detailed
                      discussion, reviews, feedback, and systematic approach are
                      our blueprint for working.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>

        {/* next cards      */}
        <Container fluid>
          <Row className="row first-row1  mt-5 mb-4">
            <Col xs={12} md={4} className="col-md-4 col-12">
              <div className="cards-imgs1">
                <Card className="our-cards1">
                  <img src={image4} alt="my image" className="our-images1" />
                  <Card.Body>
                    <div className="overlay">
                      <Card.Title className="card-title-overlay">
                        <h2> Content That Speaks For Itself</h2>
                      </Card.Title>
                      <div className="overlay-content">
                        <Card.Text>
                          Creating engaging content that connects with the
                          audience is key to creating brand value. With the
                          experts on board, get all your content needs
                          fulfilled. We have your back at every level, from
                          blogs to website pages.
                        </Card.Text>
                        <Button variant="outline-light">Read more</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={12} md={4} className="col-md-4 col-12">
              <div className="cards-imgs1">
                <Card className="our-cards1">
                  <img src={image5} alt="my image" className="our-images1" />
                  <Card.Body>
                    <div className="overlay">
                      <Card.Title className="card-title-overlay">
                        <h2> Design That Pops Out</h2>
                      </Card.Title>
                      <div className="overlay-content">
                        <Card.Text>
                          Let us simplify for connecting with some creative
                          image additions. Get your logo, brochure, or even your
                          visiting card designed by our experts. Share your
                          vision, and with some popping designs and shiny
                          shades, we will mold your dream design into reality.
                        </Card.Text>
                        <Button variant="outline-light">Read more</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={12} md={4} className="col-md-4 col-12">
              <div className="cards-imgs1">
                <Card className="our-cards1">
                  <img src={image6} alt="my image" className="our-images1" />
                  <Card.Body>
                    <div className="overlay">
                      <Card.Title className="card-title-overlay">
                        <h2>Marketing With A Twist</h2>
                      </Card.Title>
                      <div className="overlay-content">
                        <Card.Text>
                          Why follow the old P’s of marketing when you can
                          access new C’s of connect, customize, curate, and
                          creativity. We help you reach the masses and
                          exponentially increase your digital marketing and
                          sales with perfect digital marketing strategies.
                        </Card.Text>
                        <Button variant="outline-light">Read more</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>

          <Row className="row second-row1 mb-5 ">
            <Col xs={12} md={4} className="col-md-4 col-12">
              <div className="cards-imgs1">
                <Card className="our-cards1">
                  <img src={image7} alt="my image" className="our-images1" />
                  <Card.Body>
                    <div className="overlay">
                      <Card.Title className="card-title-overlay">
                        <h2>
                          Social Media Reach That You <br />
                          Need
                        </h2>
                      </Card.Title>
                      <div className="overlay-content">
                        <Card.Text>
                          Facebook, Instagram, Twitter, or LinkedIn, you name
                          the social media account, and we will design a
                          strategy to help increase your reach there. With
                          genuine strategy, and income gain, we are here to help
                          you conquer the social media platforms.
                        </Card.Text>
                        <Button variant="outline-light">Read more</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={12} md={4} className="col-md-4 col-12">
              <div className="cards-imgs1">
                <Card className="our-cards1">
                  <img src={image8} alt="my image" className="our-images1" />
                  <Card.Body>
                    <div className="overlay">
                      <Card.Title className="card-title-overlay">
                        <h2>Futuristic Strategies A Big Yes</h2>
                      </Card.Title>
                      <div className="overlay-content">
                        <Card.Text>
                          We believe in strategic planning. A great brand works
                          on evaluating today's results and planning for
                          tomorrow, and we are no different. We take pride in
                          designing and delivering excellence by creating
                          strategies with your collaboration and vision for
                          tomorrow.
                        </Card.Text>
                        <Button variant="outline-light">Read more</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col xs={12} md={4} className="col-md-4 col-12">
              <div className="cards-imgs1">
                <Card className="our-cards1">
                  <img src={image9} alt="my image" className="our-images1" />
                  <Card.Body>
                    <div className="overlay">
                      <Card.Title className="card-title-overlay">
                        <h2>Exclusively Customised Services</h2>
                      </Card.Title>
                      <div className="overlay-content">
                        <Card.Text>
                          No two things are similar, and so is your need.
                          Designing a customized service that includes monthly
                          plans, amazing designs, Our Service includes Exclusive
                          works in various fields from translation and
                          transcription to virtual assistance, from Voice overs
                          & podcasts to Social Media Management.
                        </Card.Text>
                        <Button variant="outline-light">Read more</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>

        {/* h parts */}
        <div className="Department-section ">
          <div className="wpb_wrapper p-5">
            <h2>Meet The Heads of Different Departments</h2>
            <p className=" mt-4">
              It’s time to meet our heads of the different departments who are
              on their tiptoes to offer you their service and help you with
              achieving success.
            </p>
            <p>
              <i>
                Our team works for excellence. All we need is your
                specifications and a hot cup of coffee to deliver the difference
                you are looking for.
              </i>
            </p>
          </div>

          <div
            className="card-containers1"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Card
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="custom-cards6"
            >
              <div className="avatar-section1">
                <div className="avatar-image1 text-center">
                  <img src={Avatar1}></img>
                </div>
                <h2 className="avatar-profile-title1">Palak Singh</h2>
                <p className="avatar-profile-designation1">Digital Marketing</p>
              </div>
              <Card.Body>
                <div className="Department-overlay1">
                  <div className="department1">
                    <Card.Title>
                      {isHovered ? "Palak Singh" : ""}
                      <p className="department-para">Digital Marketing</p>
                      <div class="depart-link ">
                        <Link>
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="depart-icon"
                          />
                        </Link>
                        <Link>
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="depart-icon"
                          />
                        </Link>
                        <Link>
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="depart-icon"
                          />
                        </Link>
                      </div>
                    </Card.Title>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="custom-cards6"
            >
              <div className="avatar-section1">
                <div className="avatar-image1 text-center">
                  <img src={Avatar2}></img>
                </div>
                <h2 className="avatar-profile-title1">Jassmine</h2>
                <p className="avatar-profile-designation1">Content Strategy</p>
              </div>
              <Card.Body>
                <div className="Department-overlay1">
                  <div className="department1">
                    <Card.Title>
                      {isHovered ? "Jassmine" : ""}
                      <p className="department-para">Content Strategy</p>
                      <div class="depart-link ">
                        <Link>
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="depart-icon"
                          />
                        </Link>
                        <Link>
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="depart-icon"
                          />
                        </Link>
                        <Link>
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="depart-icon"
                          />
                        </Link>
                      </div>
                    </Card.Title>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="custom-cards6"
            >
              <div className="avatar-section1">
                <div className="avatar-image1 text-center">
                  <img src={Avatar1}></img>
                </div>
                <h2 className="avatar-profile-title1">Rudra Rathore</h2>
                <p className="avatar-profile-designation1">
                  Content Writing/Editing
                </p>
              </div>
              <Card.Body>
                <div className="Department-overlay1">
                  <div className="department1">
                    <Card.Title>
                      {isHovered ? "Rudra Rathore" : ""}
                      <p className="department-para">Content Writing/Editing</p>
                      <div class="depart-link ">
                        <Link>
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="depart-icon"
                          />
                        </Link>
                        <Link>
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="depart-icon"
                          />
                        </Link>
                        <Link>
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="depart-icon"
                          />
                        </Link>
                      </div>
                    </Card.Title>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="custom-cards6"
            >
              <div className="avatar-section1">
                <div className="avatar-image1 text-center">
                  <img src={Avatar2}></img>
                </div>
                <h2 className="avatar-profile-title1">Kaye</h2>
                <p className="avatar-profile-designation1">Desiging</p>
              </div>
              <Card.Body>
                <div className="Department-overlay1">
                  <div className="department1">
                    <Card.Title>
                      {isHovered ? "Kaye" : ""}
                      <p className="department-para">Desiging</p>
                      <div class="depart-link ">
                        <Link>
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="depart-icon"
                          />
                        </Link>
                        <Link>
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="depart-icon"
                          />
                        </Link>
                        <Link>
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="depart-icon"
                          />
                        </Link>
                      </div>
                    </Card.Title>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* 5th Card */}

            <Card
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="custom-cards6"
            >
              <div className="avatar-section1">
                <div className="avatar-image1 text-center">
                  <img src={Avatar1}></img>
                </div>
                <h2 className="avatar-profile-title1">Barkhaa</h2>
                <p className="avatar-profile-designation1">
                  Project Management
                </p>
              </div>
              <Card.Body>
                <div className="Department-overlay1">
                  <div className="department1">
                    <Card.Title>
                      {isHovered ? "Barkhaa" : ""}
                      <p className="department-para">Project Management</p>
                      <div class="depart-link ">
                        <Link>
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="depart-icon"
                          />
                        </Link>
                        <Link>
                          <FontAwesomeIcon
                            icon={faTwitter}
                            className="depart-icon"
                          />
                        </Link>
                        <Link>
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="depart-icon"
                          />
                        </Link>
                      </div>
                    </Card.Title>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* **********rates**************/}

      <div className="main-home-rating">
        <Container>
          <Row className="d-flex align-items-center main-home-rating-container">
            <Col md={3} sm={6} className="text-center">
              <div className="home-main-icons-rating">
                <FontAwesomeIcon icon={faWalking} />
              </div>
              <div className="main-home-rating-section">
              <span  className="main-home-rating-content">{Math.floor(projects)}</span>
                  <span className="main-home-rating-content">+</span>
                <p className="main-home-rating-title">Projects</p>
              </div>
            </Col>

            <Col md={3} sm={6} className="text-center">
              <div className="home-main-icons-rating">
                <FontAwesomeIcon icon={faPuzzlePiece} />
              </div>
              <div className="main-home-rating-section">
              <span className="main-home-rating-content">{Math.floor(startups)}</span>
                  <span className="main-home-rating-content">+</span>
                <p className="main-home-rating-title">Startups Association</p>
              </div>
            </Col>

            <Col md={3} sm={6} className="text-center">
              <div className="home-main-icons-rating">
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <div className="main-home-rating-section">
              <span className="main-home-rating-content">{Math.floor(brands)}</span>
                  <span className="main-home-rating-content">+</span>
                <p className="main-home-rating-title">Brands</p>
              </div>
            </Col>

            <Col md={3} sm={6} className="text-center">
              <div className="home-main-icons-rating">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div className="main-home-rating-section">
              <span className="main-home-rating-content">{Math.floor(clients)}</span>
                  <span className="main-home-rating-content">+</span>
                <p className="main-home-rating-title">Satisfied Clients</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ***********cards********** */}
      <div className="home-animated-containers">
        <Container fluid>
          <Row className="mainhome-animated-cards">
            <Col md={4} className="mb-3">
              <div className="home-animated-card-content">
                <FontAwesomeIcon icon={faUser} className="fa-2x" />
                <h2 className="home-animated-card-heading mt-3">About Us</h2>
                <p className="mt-3">
                  Explore the competitive leverage of the immense digital
                  universe with experts at Ace Chronicle and experience success
                  at its best.
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-3">
              <div className="home-animated-card-content">
                <FontAwesomeIcon icon={faCubes} className="fa-2x" />
                <h2 className="home-animated-card-heading mt-3">Vision</h2>
                <p>
                  To become the top digital management agency by delivering
                  valuable and satisfactory services to our customers and
                  audience.
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-3">
              <div className="home-animated-card-content">
                <FontAwesomeIcon icon={faGem} className="fa-2x" />
                <h2 className="home-animated-card-heading mt-3">Mission</h2>
                <p>
                  To collaborate with multiple customers and work endlessly to
                  bring their dreams of digital presence into reality.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={4} className="mb-3">
              <div className="home-animated-card-content">
                <FontAwesomeIcon icon={faAnchor} className="fa-2x" />
                <h2 className="home-animated-card-heading mt-3">Aim</h2>
                <p>
                  To deliver results-oriented branding, digitalisation, and
                  marketing services to help every business explore the digital
                  horizon and foster growth.
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-3">
              <div className="home-animated-card-content">
                <FontAwesomeIcon icon={faEye} className="fa-2x" />
                <h2 className="home-animated-card-heading mt-3">Values</h2>
                <p>
                  Our values define the way we work and why we are the best
                  which are Service delivery, Teamwork, Integrity, Passionate,
                  Creativity, Result-oriented, Customer-centric, Open-minded
                </p>
              </div>
            </Col>

            <Col md={4} className="mb-3">
              <div className="home-animated-card-content">
                <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
                <h2 className="home-animated-card-heading mt-3">
                  Connect with us Today
                </h2>
                <p>
                  &nbsp;It's time for us to work together to bring your dream of
                  digital reach to reality. With our innovation and creativity.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ********experience************/}
      <Container>
        <Row className="d-flex align-items-center main-home-experience">
          <Col md={4}>
            <div>
              <h6 className="main-home-exp-heading mb-0">Our</h6>
              <h6 className="main-home-exp-heading">Experience</h6>
              <p className="main-home-exp-paragraph mt-3">
                A multifaceted creative digital media<br></br> management
                agency.
              </p>
            </div>
          </Col>
          <Col md={8}>
            <p className="main-home-exp-paragraph1">
              Ace Chronicle has worked with a diverse array of companies and
              individuals. We have helped businesses establish their websites,
              develop their customer base, create brand value, and revamp their
              image with a team of experts having years of experience. Ace
              Chronicle has assisted numerous national and international
              businesses to attain undeniable recognition by using expertise,
              creativity, and talent. We lead the design, development, and
              implementation of content while helping clients cut costs by an
              average of 15%. Aimed at assisting small, medium to large
              businesses in reaching the digital platform and connecting with a
              larger customer base thereby resulting in higher revenue turnover.
            </p>
          </Col>
        </Row>
      </Container>

      {/* ******Steeper-start*******/}
      <div className="main-home-offer-bg">
        <Container>
          <Row className="pt-5 main-home-offer-container">
            <Col md={6}>
              <h2 className="mainhome-offer-heading">What We Offer</h2>
              <h5 className="mainhome-offer-subheading">
                We provide worldwide services.
              </h5>
              <div className="skill-bar1">
                <div className="info">
                  <span>Content Writing & Editing Services</span>
                </div>

                <div className="progress-line1 html">
                  <span></span>
                </div>
              </div>

              <div className="skill-bar1">
                <div className="info">
                  <span>Exclusively Customised Services</span>
                </div>

                <div className="progress-line1 css">
                  <span></span>
                </div>
              </div>

              <div className="skill-bar1">
                <div className="info">
                  <span>Design Services</span>
                </div>

                <div className="progress-line1 bootstrap">
                  <span></span>
                </div>
              </div>

              <div className="skill-bar1">
                <div className="info">
                  <span>Social Media Management Services</span>
                </div>

                <div className="progress-line1 javascript">
                  <span></span>
                </div>
              </div>

              <div className="skill-bar1">
                <div className="info">
                  <span>Digital Marketing Services</span>
                </div>

                <div className="progress-line1 reactjs">
                  <span></span>
                </div>
              </div>

              <div className="skill-bar1">
                <div className="info">
                  <span>Translation & Transcription</span>
                </div>

                <div className="progress-line1 figma">
                  <span></span>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="offer-image">
                <img src={OfferImg}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* *******knowledge-start*****/}
      <Container>
        <Row className="mt-3">
          <Col md={6}>
            <div className="knowledge-image">
              <img src={KnowledgeImg}></img>
            </div>
          </Col>
          <Col md={6} className="mb-4 d-flex align-items-center">
            <div>
              <h2 className="home-knowledge-heading">Knowledge Hub</h2>
              <p className="mt-4 home-knowledge-paragraph">
                We have experts on board, that is, avid bloggers and writers who
                have been sharing their experience, knowledge, and expertise
                through our blog posts. We’ve covered almost every topic under
                the sun, from the best and most profitable business to set up
                with minimal investment to a blog dedicated to the art of
                blogging itself. Dive into our knowledge hub to find anything
                and everything that you’ve ever wanted to read about.&nbsp;
              </p>
              <Link>
                <Button className="knowledge-button">Click Here</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      {/******slider1-start*****/}

      <div className="main-home-slider-bg client-slider">
        <Container>
          <Row>
            <h2 className="client-slider-heading">Testimonials</h2>
            <Col md={{ span: 8, offset: 2 }} sm={12}>
              <Slider {...settings}>
                <div className="mt-5">
                  <h2 className="client-slider-heading">Akhilesh</h2>
                  <p className="client-slider-paragraph mt-4">
                    We are a startup and were looking for someone who can help
                    us build a newsletter with well-researched content. After
                    trying on a couple of teams,we got in connection with Ace
                    Chronicle. Our requirement was to have the weekly top news
                    based on different segments compiled in a creative way in
                    the letter. After initial meetings and all clarifications,
                    we were very happy with the results. They offered us a
                    perfectly designed newsletter with informative infographics,
                    which we were looking for. Thank you for your service.
                  </p>
                </div>
                <div className="mt-5">
                  <h2 className="client-slider-heading">Khushboo</h2>
                  <p className="client-slider-paragraph mt-4">
                    With timely uploads, edits, and trackable results, Ace
                    Chronicle has helped us to grow our business positively in
                    the digital arena. Good work and extremely upfront and
                    proven results.
                  </p>
                </div>
                <div className="mt-5">
                  <h2 className="client-slider-heading">Prashant</h2>
                  <p className="client-slider-paragraph mt-4">
                    We needed someone to manage our social media platform in
                    terms of posts on our website, Instagram handle, and other
                    platforms. Ace Chronicle offered us the complete timeline in
                    advance as to when and how the posts will go. With this
                    clarity, it was easier for us to chart our way to social
                    media management and reach. We are glad to be in association
                    with them. Thank you for your service.
                  </p>
                </div>
                <div className="mt-5">
                  <h2 className="client-slider-heading">Abhinav</h2>
                  <p className="client-slider-paragraph mt-4">
                    We are a startup and were looking for someone who can help
                    us build a newsletter with well-researched content. After
                    trying on a couple of teams, we got in connection with Ace
                    Chronicle. Our requirement was to have the weekly top news
                    based on different segments compiled in a creative way in
                    the letter. After initial meetings and all clarifications,
                    we were very happy with the results. They offered us a
                    perfectly designed newsletter with informative infographics,
                    which we were looking for. Thank you for your service.{" "}
                  </p>
                </div>
                <div className="mt-5">
                  <h2 className="client-slider-heading">Kunal</h2>
                  <p className="client-slider-paragraph mt-4">
                    We are thrilled to work with Ace Chronicle for the
                    translation services. However, our requirement was simple
                    yet specific. We needed a few of our videos to be converted
                    into English but with similar essence and simplicity. The
                    team worked on the described format and offered us simple
                    and precise content for the videos, which was amazing.
                    Indeed, working with you was great and looking forward to
                    connecting soon.
                  </p>
                </div>
                <div className="mt-5">
                  <h2 className="client-slider-heading">Deepak</h2>
                  <p className="client-slider-paragraph mt-4">
                    The team has been quite supportive and has helped us to make
                    our way through the cutting-edge competition. Seriously, it
                    is a pleasure to work with them and have a chance to get
                    customized services. Looking forward to continued
                    association.
                  </p>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>

      {/*******slider2-start******/}
      <div className="client-slider">
        <Container>
          <Row className="mt-5 mb-5">
            <h2 className="client-slider-heading">Our Client & Partners</h2>
            <Col md={12} sm={12} className="mt-5">
              <Slider {...settings1}>
                <img src={SliderIcon1}></img>
                <img src={SliderIcon2}></img>
                <img src={SliderIcon3}></img>
                <img src={SliderIcon4}></img>
                <img src={SliderIcon5}></img>
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>

      {/*****blog-start******/}
      <div className="main-home-bg-color">
        <Container>
          <div className="home-knowledge-container">
            <Row>
              <h2 className="knowledge-center-heading">Knowledge Center</h2>
              <Col md={4} className="mt-5">
                <div className="knowledge-center-images">
                  <img src={Blog1}></img>
                </div>
                <div>
                  <h6 className="knowledge-center-short-heading">Treding</h6>
                  <h2 className="knowledge-center-main-heading">
                    10 Tips For Traveling With Friends
                  </h2>
                  <p className="knowledge-center-paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod ti...
                  </p>
                </div>
              </Col>
              <Col md={4} className="mt-5">
                <div className="knowledge-center-images">
                  <img src={Blog2}></img>
                </div>
                <div>
                  <h6 className="knowledge-center-short-heading">Treding</h6>
                  <h2 className="knowledge-center-main-heading">
                    15 Signs You're In Love With UX Design
                  </h2>
                  <p className="knowledge-center-paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod ti...
                  </p>
                </div>
              </Col>
              <Col md={4} className="mt-5">
                <div className="knowledge-center-images">
                  <img src={Blog3}></img>
                </div>
                <div>
                  <h6 className="knowledge-center-short-heading">
                    Travel,Treding
                  </h6>
                  <h2 className="knowledge-center-main-heading">
                    About Bicycle Touring<br></br> Pro
                  </h2>
                  <p className="knowledge-center-paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod ti...
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="mt-5">
                <div className="knowledge-center-images">
                  <img src={Blog4}></img>
                </div>
                <div>
                  <h6 className="knowledge-center-short-heading">Furniture</h6>
                  <h2 className="knowledge-center-main-heading">
                    Beautiful Product Pages
                  </h2>
                  <p className="knowledge-center-paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod ti...
                  </p>
                </div>
              </Col>
              <Col md={4} className="mt-5">
                <div className="knowledge-center-images">
                  <img src={Blog5}></img>
                </div>
                <div>
                  <h6 className="knowledge-center-short-heading">Furniture</h6>
                  <h2 className="knowledge-center-main-heading">
                    Brand Colors
                  </h2>
                  <p className="knowledge-center-paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod ti...
                  </p>
                </div>
              </Col>
              <Col md={4} className="mt-5">
                <div className="knowledge-center-images">
                  <img src={Blog6}></img>
                </div>
                <div>
                  <h6 className="knowledge-center-short-heading">
                    Ideas, Interview, Treding
                  </h6>
                  <h2 className="knowledge-center-main-heading">
                    Creat An Exceptional Blog For Exceptional Writing
                  </h2>
                  <p className="knowledge-center-paragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod ti...
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
