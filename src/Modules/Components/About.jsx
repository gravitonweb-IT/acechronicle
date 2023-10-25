import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutBanner from "./AboutImg/aboutus-banner.jpg";
import aboutussection1 from "./AboutImg/about-section1.jpg";
import aboutussection2 from "./AboutImg/about-section2.jpg";
import aboutussection3 from "./AboutImg/about-section3.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slicksection from "./AboutImg/slicksection.jpg";
import slicksection1 from "./AboutImg/slicksection1.jpg";
import slicksection2 from "./AboutImg/slicksection2.jpg";
import slicksection3 from "./AboutImg/slicksection3.jpg";
import slicksection4 from "./AboutImg/slicksection4.jpg";
import slicksection5 from "./AboutImg/slicksection5.png";
import SliderIcon1 from "./Images/slider-icon1.jpg";
import SliderIcon2 from "./Images/slider-icon2.jpg";
import SliderIcon3 from "./Images/slider-icon3.jpg";
import SliderIcon4 from "./Images/slider-icon4.jpg";
import SliderIcon5 from "./Images/slider-icon5.jpg";

import "./About.css";

const About = () => {
  var settings3 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
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
      {/* <div className='about-bg-color'>
    <Container>
      <Row className='p-3'>
        <Col md={6}>
          <h1 className='about-heading'>About Us</h1>
        </Col>
        <Col md={6}>
          <div className='d-flex justify-content-end align-items-center h-100'>
            <Link to="/" className="about-link"><span className='about-subheading'>Home</span></Link>
            <span className='about-subheading'>&nbsp;&gt;&nbsp;</span>
            <span className='about-subheading'>About Us</span>
          </div>
        </Col>
      </Row>
    </Container>
    </div>

    <div className='about-middle-bg'>
      <Container>
        <Row>
          <Col>
          <div className='about-paragraph'>
          <p>Ace Chronicle is all about creativity and innovation, an 
            independent agency that took its shape with a dream to help 
            businesses and influencers reach the masses on digital platforms.
            Providing end-to-end service and support to create a brand value
            for every client, we thrive on creating the difference that matters.
            Starting as a team of content writers, the agency flourished to offer
            multiple services to define excellence. With global reach, unique content,
            and an effective visual approach to making your digital footprints count,
            we aim to offer you budget-friendly services to reach the pinnacle. Leveraging
            the expertise of people from various backgrounds, Ace Chronicle thrive for
            excellence at every level of service.</p>
            <p>&nbsp;</p>
            <p>Explore the competitive leverage of the immense digital
               universe with experts at Ace Chronicle and experience success 
               at its best.</p>
          </div>
          </Col>
        </Row>
      </Container>
    </div>  */}

      {/* banner-part */}
      <div
        className="content-section1 position-relative d-flex justify-content-center
       align-items-center"
      >
        <img
          src={AboutBanner}
          alt="Content Banner"
          className="content-section-image1"
        />

        <div className="position-absolute">
          <h1 className="text-white text-center about-content-heading">
            About Us
          </h1>
        </div>
      </div>

      {/* section1 */}
      <div class="container mt-4">
        <div class="row">
          {/* <!--ADD CLASSES HERE d-flex align-items-stretch--> */}
          <div class="col-lg-4 col-md-6 mb-3 d-flex align-items-stretch">
            <div class="card">
              <img
                src={aboutussection1}
                class="card-img-top"
                alt="Card Image"
              />
              <div class="aboutcard-content p-3">
                <h5 class="card-title">
                  Tailored Strategies for Content Excellence
                </h5>
                <p class="card-text mt-3 text-[#848892]">
                  {" "}
                  Every brand has a unique story. Our dedicated team at Ace
                  Chronicle delves deep into understanding your vision, crafting
                  a bespoke content strategy and modeling plan that sets you up
                  for success.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-3 d-flex align-items-stretch">
            <div class="card">
              <img
                src={aboutussection2}
                class="card-img-top"
                alt="Card Image"
              />
              <div class="aboutcard-content p-3">
                <h5 class="card-title">Always There, Always Ready</h5>
                <p class="card-text mt-3 text-[#848892]">
                  In the dynamic world of content, responsiveness is key. Our
                  team ensures that your queries are addressed swiftly, ensuring
                  seamless project progression and satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-3 d-flex align-items-stretch">
            <div class="card">
              <img src={aboutussection3} alt="Card Image" />
              <div class="aboutcard-content p-3">
                <h5 class="card-title">Collaborative Brilliance</h5>
                <p class="card-text mt-3 text-[#848892]">
                  At Ace Chronicle, we believe in the power of collaboration.
                  Merging diverse talents and insights, our team works
                  cohesively to create content that stands out and resonates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="aboutsection3">
        <div className="container">
          <div className="row">
            <div class="col-md-6">
              <h1>All You Need In One Theme</h1>
              <p className="text-[#848892] text-justify">
                From content ideation and strategy formulation to development
                and optimization,<br></br> we offer an all-encompassing suite of
                services. Whether launching a new <br></br> brand or reinventing an
                existing one, Ace Chronicle is your go-to content<br></br> partner.
              </p>
            </div>

            <div class="col-md-6">
              <div className="wrapper">
                <div className="skills">
                  <div className="details">
                    <span>Strategy Development: Laying down the roadmap for content success.</span>
                    <span>100%</span>
                  </div>
                  <div class="bar">
                    <div id="html-bar"></div>
                  </div>
                </div>
                <div className="skills">
                  <div className="details">
                    <span>Content Creation: Tailored narratives that resonate with your audience.</span>
                    <span>93%</span>
                  </div>
                  <div class="bar">
                    <div id="css-bar"></div>
                  </div>
                </div>
                <div className="skills">
                  <div className="details">
                    <span>Market Research & Insights: Understanding trends to ensure content relevancy.</span>
                    <span>86%</span>
                  </div>
                  <div class="bar">
                    <div id="javascript-bar"></div>
                  </div>
                </div>
                <div className="skills">
                  <div className="details">
                    <span>Content Optimization: Fine-tuning content for maximum performance.</span>
                    <span>91%</span>
                  </div>
                  <div class="bar">
                    <div id="jQuery-bar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12  aboutus-our-cards1">
            <div className="aboutus-hover-cards">
              <div className="aboutus-cards-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-person-fill icon"></i>
                <h5 className="aboutus-card-title ">User-Focused Approach</h5>
                <p className="card-text aboutus-text text">
                 User-focused approach ensures products meet needs and delights customers effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 aboutus-our-cards2 ">
            <div className="aboutus-hover-cards">
              <div className="aboutus-cards-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-cloud-download icon"></i>

                <h5 className="aboutus-card-title">Constant Evolution</h5>

                <p className="card-text aboutus-text">
                Constant evolution drives progress, adaptability, and innovation in every aspect.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 aboutus-our-cards1">
            <div className="aboutus-hover-cards">
              <div className="aboutus-cards-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-chat-dots icon"></i>

                <h5 className="aboutus-card-title">Quick Support</h5>

                <p className="card-text aboutus-text">
                Quick support ensures customer satisfaction and resolves issues promptly and effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 aboutus-our-cards2">
            <div className="aboutus-hover-cards">
              <div className="aboutus-cards-body d-flex flex-column align-items-center justify-content-center">
                <i className="bi bi-book icon"></i>

                <h5 className="aboutus-card-title">Knowledge Sharing</h5>

                <p className="card-text aboutus-text">
                Knowledge sharing fosters collaboration, empowers growth, and cultivates a culture of continuous learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* circle-cards */}

      <div className="container text-center mt-5">
        <h1 className="text-[#3b6d6e]">Awesome Shortcodes</h1>
        <div className="row justify-content-center mt-5">
          <div className="col-sm-12 col-md-3">
            <div className="circle">
              <div className="inner-circle">1</div>
              Brainstorm
            </div>
          </div>

          <div className="col-sm-12 col-md-3">
            <div className="circle">
              <div className="inner-circle">2</div>
              Narrative Blueprint
            </div>
          </div>

          <div className="col-sm-12 col-md-3">
            <div className="circle">
              <div className="inner-circle">3</div>
              Develop
            </div>
          </div>

          <div className="col-sm-12 col-md-3">
            <div className="circle">
              <div className="inner-circle">4</div>
              Evaluate
            </div>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="container-fluid mt-3">
        <div className="slicksection">
          <Slider {...settings3}>
            <div>
              <img src={slicksection} alt="" style={{ width: "100%" }} />
            </div>
            <div>
              <img src={slicksection1} alt="" style={{ width: "100%" }} />
            </div>
            <div>
              <img src={slicksection2} alt="" style={{ width: "100%" }} />
            </div>
            <div>
              <img src={slicksection3} alt="" style={{ width: "100%" }} />
            </div>
            <div>
              <img src={slicksection4} alt="" style={{ width: "100%" }} />
            </div>
          </Slider>
        </div>
      </div>

      {/* section4 */}
      {/* <div className="about-background-color1">
        <Container>
          <Row>
            <Col xs={12} sm={6} className="mb-3">
              <img src={aboutushero} alt="" className="aboutsection6" />
            </Col>
            <Col xs={12} sm={6} className="d-flex items-center">
              <div>
                <h1 className="about-girl-image1">Set Your Creativity Free</h1>
                <p className="mt-3 text-[#848892]">
                  In the boundless expanse of imagination, worlds unfurl, dreams
                  take flight, and words weave enchanting tales of wonder and
                  discovery.
                </p>
                <Row className="mt-4">
                  <Col xs={12} sm={6}>
                    <div className="text-[#848892]">What is WooCommerce?</div>
                    <hr className="text-[#848892]" />
                    <div className="text-[#848892]">
                      Can I Sell Items With This Theme?
                    </div>
                    <hr className="text-[#848892]" />
                    <div className="text-[#848892]">What is Layer Slider?</div>
                    <hr className="text-[#848892]" />
                    <div className="text-[#848892]">
                      What is WPBakery Page Builder?
                    </div>
                    <hr className="text-[#848892]" />
                    <div className="text-[#848892]">
                      Is This Theme Optimized?
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      {/* section5 */}
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
    </>
  );
};

export default About;
