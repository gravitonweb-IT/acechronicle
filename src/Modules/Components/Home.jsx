import React from "react";
import {Col, Container, Row,Button}from 'react-bootstrap';
import Avatar1 from './Images/avatar1.jpg';
import Avatar2 from './Images/avatar2.jpg';
import KnowledgeImg from './Images/Knowledge-Hub-05.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCubes ,faGem ,faAnchor,faEye,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight,faStar } from "@fortawesome/free-solid-svg-icons";
import './Home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderIcon1 from './Images/slider-icon1.jpg';
import SliderIcon2 from './Images/slider-icon2.jpg';
import SliderIcon3 from './Images/slider-icon3.jpg';
import SliderIcon4 from './Images/slider-icon4.jpg';
import SliderIcon5 from './Images/slider-icon5.jpg';

const Home = () => {
  
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
  };
  const settings1 = {
    fade:false,
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow:4, 
    slidesToScroll:1,
    autoplay: true, 
    autoplaySpeed: 3000,
  };
  return (
    <>
    <Container>
    <div className="main-container">
    {/* *************avatar*********** */}
    <Row>
        <Col md={9}>
        <div className="d-flex justify-content-center align-items-center h-100 text-center">
        <div>
        <h3 className="avatar-heading">Meet The Heads Of Different Departments</h3>
        <p className="avatar-paragraph">It’s time to meet our heads of the different departments
           who are on their tiptoes to offer you their service<br></br> and 
           help you with achieving success.
        </p>
         
        <p className="avatar-paragraph">Our team works for excellence. All we need is your specifications
          and a hot cup of coffee to deliver the<br></br> difference you are looking for.
        </p> 

        <div className="border-divider"></div>
        </div> 
        </div>
        </Col>
        <Col md={3}>
          <div className="avatar-section">
            <div className="avatar-image text-center">
              <img src={Avatar1}></img>
            </div>
            <h2 className="avatar-profile-title">
						Palak Singh</h2>
            <p className="avatar-profile-designation">Digital Marketing</p>
          </div>
        </Col>
    </Row>

   <Row className="mt-5">
      <Col md={3}>
          <div className="avatar-section mb-3">
            <div className="avatar-image text-center">
              <img src={Avatar1}></img>
            </div>
            <h2 className="avatar-profile-title">
						Jassmine</h2>
            <p className="avatar-profile-designation">Content Strategy</p>
          </div>
      </Col>
      <Col md={3}>
          <div className="avatar-section mb-3">
            <div className="avatar-image text-center">
              <img src={Avatar2}></img>
            </div>
            <h2 className="avatar-profile-title">
						Rudra Rathore</h2>
            <p className="avatar-profile-designation">Content Writing/Editing</p>
          </div>
      </Col>
      <Col md={3}>
          <div className="avatar-section mb-3">
            <div className="avatar-image text-center">
              <img src={Avatar2}></img>
            </div>
            <h2 className="avatar-profile-title">
						kaye</h2>
            <p className="avatar-profile-designation">Designing</p>
          </div>
      </Col>
      <Col md={3}>
          <div className="avatar-section mb-3">
            <div className="avatar-image text-center">
              <img src={Avatar1}></img>
            </div>
            <h2 className="avatar-profile-title">
						Barkha</h2>
            <p className="avatar-profile-designation">Project Management</p>
          </div>
      </Col>
   </Row>

  {/*********rating***************/}

  <Row className="rating">
      <h2 className="rating-heading">We believe in quality</h2>
      <Col md={3} sm={6}>
        <div className="rating-section mb-3">
         <div className="rating-content">
         <span>1,200</span>
         <span className="super">+</span>
         </div>
         <h3 class="rating-title">Projects</h3>
        </div>
      </Col>
      <Col md={3} sm={6}>
      <div className="rating-section mb-3">
         <div className="rating-content">
         <span>580</span>
         <span className="super">+</span>
         </div>
         <h3 class="rating-title">Startups Association</h3>
        </div>
      </Col>
      <Col md={3} sm={6}>
      <div className="rating-section mb-3">
         <div className="rating-content">
         <span>20</span>
         <span className="super">+</span>
         </div>
         <h3 class="rating-title">Brands</h3>
        </div>
      </Col>
      <Col md={3}sm={6}>
      <div className="rating-section mb-3">
         <div className="rating-content">
         <span>1,000</span>
         <span className="super">+</span>
         </div>
         <h3 class="rating-title">Satisfied Clients</h3>
        </div>
      </Col>
  </Row>

   {/* ***********cards********** */}

    <Row className="animated-cards">
       <Col md={4} className="mb-3">
        <div className="animated-card-content">
        <FontAwesomeIcon icon={faUser} className="fa-2x"/>
        <h2 className="animated-card-heading mt-3">About Us</h2>
        <p className="mt-3">Explore the competitive leverage of the immense digital universe
           with experts at Ace Chronicle and experience success at its best.</p>
        </div>
       </Col>

       <Col md={4} className="mb-3">
       <div className="animated-card-content">
        <FontAwesomeIcon icon={faCubes} className="fa-2x"/>
        <h2 className="animated-card-heading mt-3">Vision</h2>
        <p>To become the top digital management agency by delivering valuable 
          and satisfactory services to our customers and audience.</p>
        </div>
       </Col>

       <Col md={4} className="mb-3">
       <div className="animated-card-content">
        <FontAwesomeIcon icon={faGem} className="fa-2x"/>
        <h2 className="animated-card-heading mt-3">Mission</h2>
        <p>To collaborate with multiple customers and work endlessly to bring their
           dreams of digital presence into reality.</p>
        </div>
       </Col>
    </Row>

    <Row className="mt-5">
       <Col md={4} className="mb-3">
        <div className="animated-card-content">
        <FontAwesomeIcon icon={faAnchor} className="fa-2x"/>
        <h2 className="animated-card-heading mt-3">Aim</h2>
        <p>To deliver results-oriented branding, digitalisation, 
          and marketing services to help every business explore the 
          digital horizon and foster growth.</p>
        </div>
       </Col>

       <Col md={4} className="mb-3">
       <div className="animated-card-content">
        <FontAwesomeIcon icon={faEye} className="fa-2x"/>
        <h2 className="animated-card-heading mt-3">Values</h2>
        <p>Our values define the way we work and why we are the best 
          which are Service delivery, Teamwork, Integrity, Passionate,
           Creativity, Result-oriented, Customer-centric, Open-minded</p>
        </div>
       </Col>

       <Col md={4} className="mb-3">
       <div className="animated-card-content">
        <FontAwesomeIcon icon={faEnvelope} className="fa-2x"/>
        <h2 className="animated-card-heading mt-3">Connect with us Today</h2>
        <p>&nbsp;It's time for us to work together to bring your 
          dream of digital reach to reality. With our innovation and 
          creativity.</p>
        </div>
       </Col>
    </Row>

    {/* *********experience********* */}
    <Row className="experience-part">
      <Col md={12}>
        <div className="experience-content">
          <h2 className="experience-heading">Our <span className="experience-higlight">Experience</span></h2>
          <p>Ace Chronicle has worked with a diverse array 
            of companies and individuals. We have helped businesses
            establish their websites, develop their customer base, create
            brand value, and revamp their image with a team of experts having
            years of experience. Ace Chronicle has assisted numerous national and 
            international businesses to attain undeniable recognition by using expertise,
            creativity, and talent. We lead the design, development, and implementation 
            of content while helping clients cut costs by an average of 15%. Aimed at 
            assisting small, medium to large businesses in reaching the digital platform 
            and connecting with a larger customer base thereby resulting in higher revenue 
            turnover.&nbsp;</p>
        </div>
      </Col>
    </Row>

    {/* *********knowledge******** */}
    <Row className="knowledge-part">
      <Col md={6}>
        <div>
          <img src={ KnowledgeImg}></img>
        </div>
      </Col>
      <Col md={6}>
      <h2 className="knowledge-heading">Knowledge Hub</h2>
      <p className="mt-4 knowledge-paragraph">We have experts on board, that is, avid bloggers
         and writers who have been sharing their experience, 
         knowledge, and expertise through our blog posts. We’ve
         covered almost every topic under the sun, from the best 
        and most profitable business to set up with minimal 
        investment to a blog dedicated to the art of blogging itself.
       Dive into our knowledge hub to find anything and everything that
        you’ve ever wanted to read about.&nbsp;</p>
        <Button variant="primary" className="px-5 mt-3">Click Me</Button>
      </Col>
    </Row>

    {/* *************slider***********/}
    <div className="carousel1">
    <Row className="home-slider">
      <h3 className="slider-heading text-center">What Our Client Say  About Us</h3>
     <Col md={12}>
     <Slider {...settings}>
      <div className="swipper-slide">
        <div className="testimonial-slider">
          <div className="avatar-slider">
            <div className="avatar1-image">
              <img src={Avatar2}></img>
            </div>
          </div>

          <div className="avatar-content text-center">
          <FontAwesomeIcon icon={faQuoteRight} className="fa-3x text-white"/>
          <p className="mt-3 text-white">We are a startup and were looking for someone who can help
             us build a newsletter with well-researched content. After trying 
             on a couple of teams, we got in connection with Ace Chronicle. 
             Our requirement was to have the weekly top news based on different 
             segments compiled in a creative way in the letter. After initial
              meetings and all clarifications, we were very happy with the results.
               They offered us a perfectly designed newsletter with informative infographics,
                which we were looking for. Thank you for your service.</p>
          <ul className="d-flex justify-content-center">
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
          </ul>
         <div className="d-flex justify-content-end text-white">
         <h5>~ Abhinav</h5>  
        </div>    
          </div>
        </div>
      </div>

      <div className="swipper-slide">
        <div className="testimonial-slider">
          <div className="avatar-slider">
            <div className="avatar1-image">
              <img src={Avatar2}></img>
            </div>
          </div>

          <div className="avatar-content text-center">
          <FontAwesomeIcon icon={faQuoteRight} className="fa-3x text-white"/>
          <p className="mt-3 text-white">We are thrilled to work with Ace Chronicle for the translation
             services. However, our requirement was simple yet specific.
            We needed a few of our videos to be converted into English but
            with similar essence and simplicity. The team worked on the described
            format and offered us simple and precise content for the videos, 
            which was amazing. Indeed, working with you was great and looking
            forward to connecting soon.</p>
          <ul className="d-flex justify-content-center">
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
          </ul>
         <div className="d-flex justify-content-end text-white">
         <h5>~ Kunal</h5>  
        </div> 
          </div>
        </div>
      </div>

      <div className="swipper-slide">
        <div className="testimonial-slider">
          <div className="avatar-slider">
            <div className="avatar1-image">
              <img src={Avatar2}></img>
            </div>
          </div>

          <div className="avatar-content text-center">
          <FontAwesomeIcon icon={faQuoteRight} className="fa-3x text-white"/>
          <p className="mt-3 text-white">We needed someone to manage our social media platform in terms 
            of posts on our website, Instagram handle, and other platforms.
            Ace Chronicle offered us the complete timeline in advance as to 
           when and how the posts will go. With this clarity, it was easier
           for us to chart our way to social media management and reach. We are 
           glad to be in association with them.</p>
          <ul className="d-flex justify-content-center">
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
          </ul>
         <div className="d-flex justify-content-end text-white">
         <h5>~ Prashant</h5>  
        </div> 
          </div>

        </div>
      </div>

      <div className="swipper-slide">
        <div className="testimonial-slider">
          <div className="avatar-slider">
            <div className="avatar1-image">
              <img src={Avatar1}></img>
            </div>
          </div>
          <div className="avatar-content text-center">
          <FontAwesomeIcon icon={faQuoteRight} className="fa-3x text-white"/>
          <p className="mt-3 text-white">Finding quality content that's also optimized for SEO purposes 
            has been one of the biggest pain points for our SEO services.
             We were relieved when we came in contact with Ace Chronicle. 
             It turned out to be so great for the actual content creation
            and for getting new ideas that can help us improve our reach.</p>
          <ul className="d-flex justify-content-center">
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
            <li><FontAwesomeIcon icon={faStar} className="text-white p-1"/></li>
          </ul>
         <div className="d-flex justify-content-end text-white">
         <h5>~ Akhilesh</h5>  
        </div> 
          </div>
        </div>
      </div>

     
      </Slider>
     </Col> 
    </Row>
    </div>


    {/* **********2-slider************ */}
    <div  className="carousel1">
    <Row className="home-slider1">
    <h3 className="slider-heading text-center">Our Client & Partners</h3>
      <Col md={12} className="mt-5">
        <Slider {...settings1}>
          <img src={SliderIcon1}></img>
          <img src={SliderIcon2}></img>
          <img src={SliderIcon3}></img>
          <img src={SliderIcon4}></img>
          <img src={SliderIcon5}></img>
        </Slider>
      </Col>
    </Row>
    </div>

    </div>
    </Container>
   </>
  );
};

export default Home;
