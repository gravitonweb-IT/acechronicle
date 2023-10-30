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
import servicebannergif from "./Service images/servicepagegif.gif";
import ServicesBanner from "./contentImg/services-banner-image1.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenRuler,
  faTachographDigital,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Navbar from "../../common/Navbar";

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
      <div className="gif-service-container">
        <div className="our-nav">
         <Navbar/>
        </div>

        <img src={servicebannergif} className="service-home-gif"></img>

        <div className="content-overlay2 text-center">Services </div>
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

      {/* <div className="services-second-section">
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
      </div> */}

      <div className="services-second-section">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6  mb-3">
              <img src={CardImages}></img>
            </div>

            <div className="col-md-6">
              <h2 className="text-white">Content Writing</h2>
              <p className="text-[#848892] mt-4 text-justify">
                Creating engaging and informative content is essential for
                successful online communication. Effective content writers craft
                articles, blogs, and web copy that resonate with their target
                audience. They utilize meticulous research and SEO best
                practices to improve search engine visibility. Storytelling,
                impeccable grammar, and a deep understanding of the subject
                matter are key tools in their arsenal. These professionals
                ensure that their words not only inform but also captivate,
                leaving a lasting impact on readers.
              </p>
              <Link to="/contentspeak ">
                <Button className="services-button-section mt-2">
                  Read more
                </Button>
              </Link>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 order-2 order-md-1">
              <h2 className="text-white">Designing</h2>
              <p className="text-[#848892] mt-4 text-justify">
                Design is more than aesthetics; it's problem-solving with
                creativity. From graphic design to architecture, every field
                benefits from thoughtful design. It's the fusion of form and
                function, a language of innovation that shapes our world, making
                life more beautiful, functional, and user-friendly.
              </p>
              <p className="text-[#848892] text-justify">
                Designing is a multifaceted creative process that involves
                combining aesthetics and functionality to craft visually
                appealing and user-friendly products or experiences. Designers
                employ various tools, such as graphic design software and
                prototyping tools, to create everything from websites and apps
                to logos, packaging, interiors, and fashion.
              </p>
              <Link to="/designpop">
                <Button className="services-button-section mt-2">
                  Read more
                </Button>
              </Link>
            </div>

            <div className="col-md-6 d-flex justify-content-end order-1 order-md-2 mb-3">
              <img src={CardImages1}></img>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6  mb-3">
              <img src={CardImages3}></img>
            </div>

            <div className="col-md-6">
              <h2 className="text-white">Digital Marketing</h2>
              <p className="text-[#848892] mt-4 text-justify">
                Digital marketing encompasses a range of online strategies and
                techniques used to promote businesses, products, or services. It
                involves activities like SEO, social media marketing, email
                campaigns, content creation, and pay-per-click advertising.
              </p>

              <p className="text-[#848892] text-justify">
                The aim is to increase brand visibility, engage with the target
                audience, drive website traffic, and ultimately, convert leads
                into customers. Data analytics and continuous optimization are
                essential for measuring and improving digital marketing success
                in the ever-evolving online landscape.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 order-2 order-md-1">
              <h2 className="text-white">Social Media Management</h2>
              <p className="text-[#848892] mt-4 text-justify">
                Social media management involves overseeing and optimizing a
                brand's online presence across various social platforms like
                Facebook, Instagram, Twitter, and LinkedIn. Professionals in
                this field create and schedule content, engage with the
                audience, monitor analytics, and implement strategies to enhance
                brand visibility, engagement, and reputation.
              </p>
              <p className="text-[#848892] text-justify">
                It's vital for businesses seeking to connect with their target
                audience, build a loyal following, and drive traffic and
                conversions. Consistency, creativity, and adaptability are key
                in this dynamic digital domain.
              </p>
              <Link to="/markettwist">
                <Button className="services-button-section mt-2">
                  Read more
                </Button>
              </Link>
            </div>

            <div className="col-md-6 d-flex justify-content-end order-1 order-md-2 mb-3">
              <img src={CardImages2}></img>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6  mb-3">
              <img src={CardImages4}></img>
            </div>

            <div className="col-md-6">
              <h2 className="text-white">Strategy</h2>
              <p className="text-[#848892] mt-4 text-justify">
                Strategy is a thoughtful plan of action, guiding decisions to
                achieve specific goals by considering resources, timelines, and
                potential challenges. Whether in personal interactions, business
                endeavors, or creative expression, mastering communication
                skills is crucial for mutual understanding and connection.
              </p>

              <p className="text-[#848892] text-justify">
                A well-crafted strategy serves as a roadmap for achieving
                objectives by aligning resources, tactics, and timelines. It
                involves assessing strengths and weaknesses, opportunities and
                threats, and adapting plans as needed. Strategy is a fundamental
                tool in navigating the complexities of business, ensuring
                long-term success, and seizing competitive advantages.
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 order-2 order-md-1">
              <h2 className="text-white">Customised Service</h2>
              <p className="text-[#848892] mt-4 text-justify">
                Customized services are tailored to individual needs, offering
                unique solutions. They prioritize personalization and attention
                to detail, enhancing the customer experience. Through in-depth
                understanding and flexibility, these services address specific
                requirements, ensuring client satisfaction.
              </p>
              <p className="text-[#848892] text-justify">
                Customer service is the cornerstone of positive customer
                experiences. It involves assisting clients with inquiries,
                addressing issues, and providing solutions in a friendly and
                efficient manner. Exceptional customer service builds trust,
                loyalty, and brand reputation.
              </p>
              <Link to="/exclusive">
                <Button className="services-button-section mt-2">
                  Read more
                </Button>
              </Link>
            </div>

            <div className="col-md-6 d-flex justify-content-end order-1 order-md-2 mb-3">
              <img src={CardImages5}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
