import React, { useEffect, useState } from "react";
import "./MainHome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row, Button, TabContainer } from "react-bootstrap";
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
import OfferImg from "./MainHomeImgs/offer-image.png";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import image4 from "./MainHomeImgs/Content-That-Speaks-for-Itself1.jpg";
import image5 from "./MainHomeImgs/Design-That-Pops-Out.jpg";
import image6 from "./MainHomeImgs/Marketing-With-A-Twist1.jpg";
import image7 from "./MainHomeImgs/Social-Media-Reach-That-You-Need.jpg";
import image8 from "./MainHomeImgs/Futuristic-Strategies-A-Big-Yes.jpg";
import image9 from "./MainHomeImgs/Exclusively-Customised-services.jpg";
import Slide1 from "./MainHomeImgs/testimonial-image1.png";
import Slide2 from "./MainHomeImgs/testimonials-image2.png";
import Slide3 from "./MainHomeImgs/testimonials-image3.png";
import Slide4 from "./MainHomeImgs/testimonials-image4.png";
import Slide5 from "./MainHomeImgs/testimonials-image5.png";
import Avatar1 from "./Images/avatar1.jpg";
import Avatar2 from "./Images/avatar2.jpg";
// import SliderImg1 from "./Images/slide-image5.png";
// import SliderImg2 from "./Images/slide-image4.png";
// import SliderImg3 from "./Images/Slider-img3.png";
import KnowledgeImg2 from "./MainHomeImgs/knowledge-center2.png";
import WhatOffer from "./MainHomeImgs/what-we-offer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Newsletter1 from "./MainHomeImgs/newsletter-image1.png";
import Newsletter2 from "./MainHomeImgs/newsletter-image2.png";
import mainhomevideo from "./MainHomeImgs/mainhomevideo.mp4";
import "animate.css";
import {
  faUser,
  faCubes,
  faGem,
  faAnchor,
  faEye,
  faEnvelope,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWalking,
  faPuzzlePiece,
  faCamera,
  faShieldHalved,
  faArrowLeft,
  faArrowRight,
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
  const animationDuration = 4000;
  const animationSteps = 40;

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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
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
  const contentList = [
    "Experience The Digital Power",
    "Explore The Innovation and Creativity",
    "Excel The Competitive Edge",
  ];
  const [contentIndex, setContentIndex] = useState(0);


  useEffect(() => {
    const contentInterval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contentList.length);
    }, 5000);

    return () => {
      clearInterval(contentInterval);
    };
  }, []);
  return (
    <>
      {/* Carousels */}
      <div className="video-banner-container">
      <video id="video" autoPlay loop className="mainhome-vdeo">
        <source src={mainhomevideo} type="video/mp4" />
      </video>
      <div className="content-overlay text-center">{contentList[contentIndex]}</div>
    </div>

{/* 
       <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img src={SliderImg1} alt="my image" className="slider-img" />

            <div className="d-flex justify-content-center items-center">
              <Carousel.Caption className="slider-caption animate__animated animate__zoomIn   ">
                <h1 className="home-carousel-text">
                  <b>
                    Experience The Digital
                    <br />
                    Power
                  </b>
                </h1>
                <p className="d-none d-sm-block mt-4  home-carousel-para">
                  Ace Chronicle is here to take your business up digitally. With
                  a team of content creators, website designers, logo creators,
                  and digital managers, we are here to help you explore the
                  digital.
                </p>
              </Carousel.Caption>
            </div>
          </div>

          <div class="carousel-item">
            <img src={SliderImg2} alt="my image" className="slider-img" />

            <div className="d-flex justify-content-center items-center">
              <Carousel.Caption className="slider-caption animate__animated animate__zoomIn">
                <h1 className="home-carousel-text">
                  <b>
                    Explore The Innovation
                    <br />
                    and Creativity{" "}
                  </b>
                </h1>
                <p className="d-none d-sm-block mt-4 home-carousel-para">
                  A unique website, creative logo, perfect brochures, and
                  content that connects is what you need to experience the
                  digital power. With Ace Chronicle, we are here to amaze you at
                  every single stage of your success story.
                </p>
              </Carousel.Caption>
            </div>
          </div>

          <div class="carousel-item">
            <img src={SliderImg3} alt="my image" className="slider-img" />

            <div className="d-flex justify-content-center items-center">
              <Carousel.Caption className="slider-caption animate__animated animate__zoomIn">
                <h1 className="home-carousel-text">
                  <b>
                    Excel The Competitive
                    <br />
                    Edge
                  </b>
                </h1>
                <p className="d-none d-sm-block mt-4 home-carousel-para ">
                  With the competition rising high, we are here to help you
                  excel at the competitive edge. With the customized and
                  personalized strategies to drive your business reach and
                  success.
                </p>
              </Carousel.Caption>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>

          <span class="visually-hidden">Previous</span>
        </button>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>

          <span class="visually-hidden">Next</span>
        </button>
      </div>  */}
 

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

        {/* animated-cards*/}
        <div className="container-fluid">
          <div className="row">
            {/* First Row */}

            <div className="col-md-4 home-section-cards1">
              <Card className="group relative cursor-pointer items-center justify-center overflow-hidden border-0 rounded-0 transition-shadow mx-2 mx-md-2">
                <div className="h-[26rem] w-[30rem]">
                  <Card.Img src={image4} alt="" className="" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/90 group-hover:via-black/90 group-hover:to-black/90"></div>

                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                  <Card.Title className=" home-section-title  font-bold text-white">
                    Content That Speaks For Itself
                  </Card.Title>

                  <Card.Text className="home-section-content  mt-4 text-white text-justify">
                    Creating engaging content that connects with the audience is
                    key to creating brand value. With the experts on board, get
                    all your content needs fulfilled. We have your back at every
                    level, from blogs to website pages.
                  </Card.Text>

                  <Link to="/contentspeak">
                    <Button className="home-button-section">Read more</Button>
                  </Link>
                </div>
              </Card>
            </div>

            <div className="col-md-4 home-section-cards1">
              <Card className="group relative cursor-pointer items-center justify-center overflow-hidden border-0 rounded-0 transition-shadow mx-2 mx-md-2">
                <div className="h-[26rem] w-[30rem]">
                  <Card.Img src={image5} alt="" className="" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/90 group-hover:via-black/90 group-hover:to-black/90"></div>

                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                  <Card.Title className=" home-section-title mt-5  font-bold text-white">
                    Design That Pops Out
                  </Card.Title>

                  <Card.Text className="home-section-content mt-10 text-white text-justify">
                    Let us simplify for connecting with some creative image
                    additions. Get your logo, brochure, or even your visiting
                    card designed by our experts. Share your vision, and with
                    some popping designs and shiny shades, we will mold your
                    dream design into reality.
                  </Card.Text>

                  <Link to="/designpop">
                    <Button className="home-button-section">Read more</Button>
                  </Link>
                </div>
              </Card>
            </div>

            <div className="col-md-4  home-section-cards1">
              <Card className="group relative cursor-pointer items-center justify-center overflow-hidden border-0 rounded-0 transition-shadow mx-2 mx-md-2">
                <div className="h-[26rem] w-[30rem]">
                  <Card.Img src={image6} alt="" className="" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/90 group-hover:via-black/90 group-hover:to-black/90"></div>

                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                  <Card.Title className=" home-section-title  font-bold text-white">
                    Marketing With A Twist
                  </Card.Title>

                  <Card.Text className="home-section-content mt-14 text-white text-justify">
                    Why follow the old P’s of marketing when you can access new
                    C’s of connect, customize, curate, and creativity. We help
                    you reach the masses and exponentially increase your digital
                    marketing and sales with perfect digital marketing
                    strategies.
                  </Card.Text>
                </div>
              </Card>
            </div>
          </div>

          <div className="row mt-4">
            {/* Second Row */}

            <div className="col-md-4 ">
              <Card className="group relative cursor-pointer items-center justify-center overflow-hidden border-0 rounded-0 transition-shadow mx-2 mx-md-2">
                <div className="h-[26rem] w-[30rem]">
                  <Card.Img src={image7} alt="" className="" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/90 group-hover:via-black/90 group-hover:to-black/90"></div>

                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                  <Card.Title
                    className=" home-section-title  mb-5
                      font-bold text-white"
                  >
                    Social Media Reach That You Need
                  </Card.Title>

                  <Card.Text className="home-section-content mt-4 text-white text-justify">
                    Facebook, Instagram, Twitter, or LinkedIn, you name the
                    social media account, and we will design a strategy to help
                    increase your reach there. With genuine strategy, authentic
                    increase in number, and income gain, we are here to help you
                    conquer the social media platforms.
                  </Card.Text>

                  <Link to="/markettwist">
                    <Button className="home-button-section">Read more</Button>
                  </Link>
                </div>
              </Card>
            </div>

            <div className="col-md-4 home-section-cards1">
              <Card className="group relative cursor-pointer items-center justify-center overflow-hidden border-0 rounded-0 transition-shadow mx-2 mx-md-2">
                <div className="h-[26rem] w-[30rem]">
                  <Card.Img src={image8} alt="" className="" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/90 group-hover:via-black/90 group-hover:to-black/90"></div>

                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                  <Card.Title className=" home-section-title  font-bold text-white mb-5">
                    Futuristic Strategies A Big Yes
                  </Card.Title>

                  <Card.Text className=" home-section-content mt-8 text-white text-justify">
                    We believe in strategic planning. A great brand works on
                    evaluating today's results and planning for tomorrow, and we
                    are no different. We take pride in designing and delivering
                    excellence by creating strategies.
                  </Card.Text>
                </div>
              </Card>
            </div>

            <div className="col-md-4 home-section-cards1">
              <Card className="group relative cursor-pointer items-center justify-center overflow-hidden border-0 rounded-0 transition-shadow mx-2 mx-md-2">
                <div className="h-[26rem] w-[30rem]">
                  <Card.Img src={image9} alt="" className="" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/90 group-hover:via-black/90 group-hover:to-black/90"></div>

                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-2 text-center transition-all duration-500 group-hover:translate-y-0">
                  <Card.Title className=" home-section-title  font-bold text-white">
                    Exclusively Customised Services
                  </Card.Title>

                  <Card.Text className="home-section-content mt-4 text-white text-justify">
                    No two things are similar, and so is your need. Designing a
                    customized service that includes monthly plans, amazing
                    designs, and discovery calls offers you the solutions for
                    your every single need.
                  </Card.Text>

                  <Link to="/exclusive">
                    <Button className="home-button-section">Read more</Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* avatar parts */}
        <div className="Department-section ">
          <div className="wpb_wrapper p-5">
            <h2>Meet The Heads of Different Departments</h2>
            <p className=" mt-4 mb-1">
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
                <h2 className="avatar-profile-title1"> Rudra</h2>
                <p className="avatar-profile-designation1">Content Strategy</p>
              </div>
              <Card.Body>
                <div className="Department-overlay1">
                  <div className="department1">
                    <Card.Title>
                      {isHovered ? "Rudra" : ""}
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
                <h2 className="avatar-profile-title1">Jassmine</h2>
                <p className="avatar-profile-designation1">
                  Content Writing/Editing
                </p>
              </div>
              <Card.Body>
                <div className="Department-overlay1">
                  <div className="department1">
                    <Card.Title>
                      {isHovered ? "Jassmine" : ""}
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

      {/*rates*/}

      <div className="main-home-rating">
        <Container>
          <Row className="d-flex align-items-center main-home-rating-container">
            <Col md={3} sm={6} className="text-center">
              <div className="home-main-icons-rating">
                <FontAwesomeIcon icon={faWalking} />
              </div>
              <div className="main-home-rating-section">
                <span className="main-home-rating-content">
                  {Math.floor(projects)}
                </span>
                <span className="main-home-rating-content">+</span>
                <p className="main-home-rating-title">Projects</p>
              </div>
            </Col>

            <Col md={3} sm={6} className="text-center">
              <div className="home-main-icons-rating">
                <FontAwesomeIcon icon={faPuzzlePiece} />
              </div>
              <div className="main-home-rating-section">
                <span className="main-home-rating-content">
                  {Math.floor(startups)}
                </span>
                <span className="main-home-rating-content">+</span>
                <p className="main-home-rating-title">Startups Association</p>
              </div>
            </Col>

            <Col md={3} sm={6} className="text-center">
              <div className="home-main-icons-rating">
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <div className="main-home-rating-section">
                <span className="main-home-rating-content">
                  {Math.floor(brands)}
                </span>
                <span className="main-home-rating-content">+</span>
                <p className="main-home-rating-title">Brands</p>
              </div>
            </Col>

            <Col md={3} sm={6} className="text-center">
              <div className="home-main-icons-rating">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div className="main-home-rating-section">
                <span className="main-home-rating-content">
                  {Math.floor(clients)}
                </span>
                <span className="main-home-rating-content">+</span>
                <p className="main-home-rating-title">Satisfied Clients</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*cards*/}
      <div className="home-animated-containers">
        <Container fluid>
          <Row className="mainhome-animated-cards">
            <Col md={4} className="mb-3">
              <Link to="/about" style={{ textDecoration: "none" }}>
                <div className="home-animated-card-content">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="fa-2x home-animated-card-icons"
                  />
                  <h2 className="home-animated-card-heading mt-3">About Us</h2>
                  <p className="mt-3 home-animated-card-paragraph">
                    Explore the competitive leverage of the immense digital
                    universe with experts at Ace Chronicle and experience
                    success at its best.
                  </p>
                </div>
              </Link>
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

          <Row className="mt-3">
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
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <div className="home-animated-card-content">
                  <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
                  <h2 className="home-animated-card-heading mt-3">
                    Connect with us Today
                  </h2>
                  <p>
                    &nbsp;It's time for us to work together to bring your dream
                    of digital reach to reality. With our innovation and
                    creativity.
                  </p>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/*experience*/}

      {/* <Container>
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
            <p className="main-home-exp-paragraph1 text-justify">
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
      </Container> */}

      {/*Steeper-start*/}
      <div className="main-home-offer-bg">
        <Container>
          <Row className="pt-5 main-home-offer-container">
            <Col lg={6}>
              <h2 className="mainhome-offer-heading">What We Offer</h2>
              <h5 className="mainhome-offer-subheading">
                We provide worldwide services.
              </h5>
              <div className="skill-bar1">
                <div className="info">
                  <span>Content Writing & Editing</span>
                </div>

                <div className="progress-line1 html">
                  <span></span>
                </div>
              </div>

              <div className="skill-bar1">
                <div className="info">
                  <span>Exclusively Customised</span>
                </div>

                <div className="progress-line1 css">
                  <span></span>
                </div>
              </div>

              <div className="skill-bar1">
                <div className="info">
                  <span>Designing</span>
                </div>

                <div className="progress-line1 bootstrap">
                  <span></span>
                </div>
              </div>

              <div className="skill-bar1">
                <div className="info">
                  <span>Social Media Management</span>
                </div>

                <div className="progress-line1 javascript">
                  <span></span>
                </div>
              </div>

              <div className="skill-bar1">
                <div className="info">
                  <span>Digital Marketing</span>
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
            <Col lg={6} className="fixed-offer-image">
              <div className="offer-image">
                <img src={WhatOffer}></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*knowledge-start*/}
      <Container>
        <Row className="">
          <Col md={6}>
            <div className="knowledge-image d-flex justify-content-center">
              <img src={KnowledgeImg2}></img>
            </div>
          </Col>
          <Col md={6} className="mb-4 d-flex align-items-center">
            <div>
              <h2 className="home-knowledge-heading">Knowledge Center</h2>
              <p className="mt-4 home-knowledge-paragraph text-justify">
                We have experts on board, that is, avid bloggers and writers who
                have been sharing their experience, knowledge, and expertise
                through our blog posts. We’ve covered almost every topic under
                the sun, from the best and most profitable business to set up
                with minimal investment to a blog dedicated to the art of
                blogging itself. Dive into our knowledge hub to find anything
                and everything that you’ve ever wanted to read about.&nbsp;
              </p>
              <Link to="blog">
                <Button className="knowledge-button">Click Here</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      {/*slider1-start*/}

      <div className="main-home-slider-bg client-slider">
        <Container>
          <Row className="">
            <h2 className="client-slider-heading">Testimonials</h2>
            <Col md={12}>
              <Slider {...settings}>
                <div className="px-4 mt-5">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="fa-3x text-[#eee]"
                  />
                  <p className="client-slider-paragraph mt-3 text-justify">
                    We are a startup and were looking for someone who can help
                    us build a newsletter with well-researched content. After
                    trying on a couple of teams,we got in connection with Ace
                    Chronicle.Thank you for your service.
                  </p>
                  <div className="flex">
                    <div>
                      <img src={Slide1}></img>
                    </div>
                    <div>
                      <p className="pl-5 text-[#646e7a] mb-0">Jenna Johnson</p>
                      <p className="pl-5 text-[#3b6d6e]">Designer</p>
                    </div>
                  </div>
                </div>

                <div className="px-4 mt-5">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="fa-3x text-[#eee]"
                  />
                  <p className="client-slider-paragraph mt-3 text-justify">
                    We needed someone to manage our social media platform in
                    terms of posts on our website, Instagram handle, and other
                    platforms. Ace Chronicle offered us the complete timeline in
                    advance as to when and how the posts will go.
                  </p>
                  <div className="flex">
                    <div>
                      <img src={Slide2}></img>
                    </div>
                    <div>
                      <p className="pl-5 text-[#646e7a] mb-0">
                        Whitney Nilsson
                      </p>
                      <p className="pl-5 text-[#3b6d6e]">Manager</p>
                    </div>
                  </div>
                </div>

                <div className="px-4 mt-5">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="fa-3x text-[#eee]"
                  />
                  <p className="client-slider-paragraph mt-3 text-justify">
                    With timely uploads, edits, and trackable results, Ace
                    Chronicle has helped us to grow our business positively in
                    the digital arena. Good work and extremely upfront and
                    proven results.Thank you for your service.
                  </p>
                  <div className="flex">
                    <div>
                      <img src={Slide3}></img>
                    </div>
                    <div>
                      <p className="pl-5 text-[#646e7a] mb-0">Mike Lanning</p>
                      <p className="pl-5 text-[#3b6d6e]">TechCrunch</p>
                    </div>
                  </div>
                </div>

                <div className="px-4 mt-5">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="fa-3x text-[#eee]"
                  />
                  <p className="client-slider-paragraph mt-3 text-justify">
                    Finding quality content that's also optimized for SEO
                    purposes has been one of the biggest pain points for our SEO
                    services. We were relieved when we came in contact with Ace
                    Chronicle .It turned out to be so great for the actual
                    content creation.
                  </p>
                  <div className="flex">
                    <div>
                      <img src={Slide4}></img>
                    </div>
                    <div>
                      <p className="pl-5 text-[#646e7a] mb-0">
                        Whitney Nilsson
                      </p>
                      <p className="pl-5 text-[#3b6d6e]">Manager</p>
                    </div>
                  </div>
                </div>

                <div className="px-4 mt-5">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="fa-3x text-[#eee]"
                  />
                  <p className="client-slider-paragraph mt-3 text-justify">
                    The team has been quite supportive and has helped us to make
                    our way through the cutting-edge competition. Seriously, it
                    is a pleasure to work with them and have a chance to get
                    customized services.
                  </p>
                  <div className="flex">
                    <div>
                      <img src={Slide5}></img>
                    </div>
                    <div>
                      <p className="pl-5 text-[#646e7a] mb-0">Dustin Jones</p>
                      <p className="pl-5 text-[#3b6d6e]">Designer</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>

      {/* newsletter-start */}

      {/* <div
        className="home-banner-section d-none d-lg-block"
        id="newsletter-banner-parallax"
      >
        <div className="newsletter-section1 position-relative ">
          <div className="position-absolute top-40 start-50  newsletter-section-content ">
            <h1 className="text-white font-bold newsletter-section-heading">
              SUBSCRIBE TO OUR
              <br /> NEWSLETTER
            </h1>

            <p className="text-white newsletter-section-para ">
              <span className="">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation this content.
              </span>
            </p>

            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email*"
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-light mt-3 banner-button-section"
              >
                Signup to Newsletter
              </button>
            </form>
          </div>
        </div>
      </div> */}

      <div className="newsletter-bg-color">
        <Container className="pt-5">
          <Row>
            <Col md={6} className="mb-3">
              <img src={Newsletter1}></img>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <div>
                <h1 className="newsletter-section-heading">
                  SUBSCRIBE TO OUR
                  <br /> NEWSLETTER
                </h1>
                <p className="newsletter-section-para text-justify">
                  Discover our latest products and exclusive offers, designed{" "}
                  <br></br> to enhance your lifestyle and make every day a
                  little more <br></br>
                  extraordinary.
                </p>
                <form>
                  <div className="">
                    <input
                      type="email"
                      className="newsletter-section-input"
                      placeholder="Email*"
                    />
                  </div>

                  <button type="submit" className="btn btn-outline-light mt-3 mb-3">
                    Signup to Newsletter
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*slider2-start*/}
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

      {/*blog-start*/}
      <div className="main-home-bg-color">
        <Container>
          <div className="home-knowledge-container">
            <Row>
              <h2 className="knowledge-center-heading">Knowledge Center</h2>
              <Col md={4} className="mt-5">
                <Link to="/blog" style={{ textDecoration: "none" }}>
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
                </Link>
              </Col>
              <Col md={4} className="mt-5">
                <Link to="/blog" style={{ textDecoration: "none" }}>
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
                </Link>
              </Col>
              <Col md={4} className="mt-5">
                <Link to="/blog" style={{ textDecoration: "none" }}>
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
                </Link>
              </Col>
            </Row>
            {/* <Row>
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
            </Row> */}
          </div>
        </Container>
      </div>
    </>
  );
}
