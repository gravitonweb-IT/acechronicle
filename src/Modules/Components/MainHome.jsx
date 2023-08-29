import React from 'react';
import './MainHome.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Blog1 from './MainHomeImgs/blog1.jpg';
import Blog2 from './MainHomeImgs/blog2.jpg';
import Blog3 from './MainHomeImgs/blog3.jpg';
import Blog4 from './MainHomeImgs/blog4.jpg';
import Blog5 from './MainHomeImgs/blog5.jpg';
import Blog6 from './MainHomeImgs/blog6.jpg';
import SliderIcon1 from "./Images/slider-icon1.jpg";
import SliderIcon2 from "./Images/slider-icon2.jpg";
import SliderIcon3 from "./Images/slider-icon3.jpg";
import SliderIcon4 from "./Images/slider-icon4.jpg";
import SliderIcon5 from "./Images/slider-icon5.jpg";
import KnowledgeImg from "./Images/Knowledge-Hub-05.png";
import OfferImg from './MainHomeImgs/offer-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking, faPuzzlePiece , faCamera ,faShieldHalved} from '@fortawesome/free-solid-svg-icons';

export default function MainHome() {
  const CustomNextArrow = (props) => {
    return null;
  };
  
  const CustomPrevArrow = (props) => {
    return null;
  };
  const settings = {
    fade:false,
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
    dots:false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
  <>
 {/* **********rates**************/}

 <div className='main-home-rating'>
      <Container>
        <Row className='d-flex align-items-center main-home-rating-container'>
          <Col md={3} sm={6} className='text-center'>
            <div className='home-main-icons-rating'>
              <FontAwesomeIcon icon={faWalking} />
            </div>
            <div className="main-home-rating-section">
               <h1 className="main-home-rating-content">1200+</h1>
               <p className="main-home-rating-title">Projects</p>
            </div>
          </Col>

          <Col md={3} sm={6} className='text-center'>
          <div className='home-main-icons-rating'>
              <FontAwesomeIcon icon={faPuzzlePiece} />
            </div>
            <div className="main-home-rating-section">
               <h1 className="main-home-rating-content">580+</h1>
               <p className="main-home-rating-title">Startups Association</p>
            </div>
          </Col>

          <Col md={3} sm={6} className='text-center'>
          <div className='home-main-icons-rating'>
              <FontAwesomeIcon icon={faCamera} />
            </div>
            <div className="main-home-rating-section">
               <h1 className="main-home-rating-content">20+</h1>
               <p className="main-home-rating-title">Brands</p>
            </div>
          </Col>

          <Col md={3} sm={6} className='text-center'>
          <div className='home-main-icons-rating'>
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <div className="main-home-rating-section">
               <h1 className="main-home-rating-content">1000+</h1>
               <p className="main-home-rating-title">Satisfied Clients</p>
            </div>
          </Col>
        </Row>
      </Container>
 </div>

 {/* ********experience************/}
 <Container>
 <Row className='d-flex align-items-center main-home-experience'>
  <Col md={4}>
    <div>
      <h6 className='main-home-exp-heading mb-0'>Our</h6>
      <h6 className='main-home-exp-heading'>Experience</h6>
      <p className='main-home-exp-paragraph mt-3'>
       A multifaceted creative digital media<br></br> management agency.
      </p>
   </div>
  </Col>
  <Col md={8}>
  <p className='main-home-exp-paragraph1'>Ace Chronicle has worked with a diverse array of companies 
     and individuals. We have helped businesses establish their websites,
     develop their customer base, create brand value, and revamp their image 
     with a team of experts having years of experience. Ace Chronicle has assisted
     numerous national and international businesses to attain undeniable
     recognition by using expertise, creativity, and talent. We lead the design,
     development, and implementation of content while helping clients cut costs by
     an average of 15%. Aimed at assisting small, medium to large businesses in 
     reaching the digital platform and connecting with a larger customer base thereby
     resulting in higher revenue turnover.</p>
  </Col>
</Row>

 </Container>

  {/* ******Steeper-start*******/}
  <div className='main-home-offer-bg'>
  <Container>
    <Row className='pt-5 main-home-offer-container'>
      <Col md={6}>
            <h2 className='mainhome-offer-heading'>What We Offer</h2>
            <h5 className='mainhome-offer-subheading'>We provide worldwide services.</h5>
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
        <div className='offer-image'>
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
      <div className='knowledge-image'>
        <img src={KnowledgeImg}></img>
      </div>
      </Col>
      <Col md={6} className='mb-4 d-flex align-items-center'>
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
      <Button className="knowledge-button">
        Click Here
      </Button>
    </Link>
  </div>
</Col>

    </Row>
   </Container>

   {/******slider1-start*****/}
  
   <div className='main-home-slider-bg client-slider'>
    <Container>
     <Row>
      <h2 className="client-slider-heading">
       Testimonials
       </h2>
      <Col  md={{ span: 8, offset: 2 }} sm={12}>
      <Slider {...settings}>
       <div className='mt-5'>
       <h2 className="client-slider-heading">Akhilesh</h2>
       <p className='client-slider-paragraph mt-4'>We are a startup and were looking for someone who
         can help us build a newsletter with well-researched content.
         After trying on a couple of teams,we got in connection with Ace 
         Chronicle. Our requirement was to have the weekly top news based on
         different segments compiled in a creative way in the letter. After 
         initial meetings and all clarifications, we were very happy with the 
         results. They offered us a perfectly designed newsletter with
         informative infographics, which we were looking for.
         Thank you for your service.</p>
      </div> 
      <div className='mt-5'>
       <h2 className="client-slider-heading">Khushboo</h2>
       <p className='client-slider-paragraph mt-4'>With timely uploads, edits, and 
       trackable results, Ace Chronicle has helped us to grow our business 
       positively in the digital arena. Good work and extremely
        upfront and proven results.</p>
      </div>     
       <div className='mt-5'>
       <h2 className="client-slider-heading">Prashant</h2>
       <p className='client-slider-paragraph mt-4'>We needed someone to manage our social media 
        platform in terms of posts on our website, Instagram handle,
        and other platforms. Ace Chronicle offered us the complete timeline
        in advance as to when and how the posts will go. With this clarity,
        it was easier for us to chart our way to social media management and reach.
         We are glad to be in association with them.        
         Thank you for your service.</p>
      </div>   
       <div className='mt-5'>
       <h2 className="client-slider-heading">Abhinav</h2>
       <p className='client-slider-paragraph mt-4'>We are a startup and were 
       looking for someone who can help us build a newsletter with well-researched 
       content. After trying on a couple of teams, we got in connection with Ace
       Chronicle. Our requirement was to have the weekly top news based on 
       different segments compiled in a creative way in the letter. After initial
        meetings and all clarifications, we were very happy with the results.
        They offered us a perfectly designed newsletter with informative infographics,
         which we were looking for. Thank you for your service.        </p>
      </div> 
       <div className='mt-5'>
       <h2 className="client-slider-heading">Kunal</h2>
       <p className='client-slider-paragraph mt-4'>We are thrilled to work with Ace 
       Chronicle for the translation services. However, our requirement was simple yet 
       specific. We needed a few of our videos to be converted into English but with 
       similar essence and simplicity. The team worked on the described format and 
       offered us simple and precise content for the videos, which was amazing. Indeed,
        working with you was great and looking forward to connecting soon.</p>
      </div> 
       <div className='mt-5'>
       <h2 className="client-slider-heading">Deepak</h2>
       <p className='client-slider-paragraph mt-4'>The team has been quite supportive 
       and has helped us to make our way through the cutting-edge competition.
        Seriously, it is a pleasure to work with them and have a chance to get 
        customized services. Looking forward to continued association.</p>
      </div> 
      </Slider>
      </Col>
      </Row>
    </Container>
   </div>

   {/*******slider2-start******/}
   <div className='client-slider'>
   <Container>
   <Row className="mt-5 mb-5">
      <h2 className="client-slider-heading">
        Our Client & Partners
      </h2>
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
   <div className='main-home-bg-color'>
   <Container>
    <div className='home-knowledge-container'>
      <Row>
        <h2 className='knowledge-center-heading'>Knowledge Center</h2>
        <Col md={4} className='mt-5'>
          <div className='knowledge-center-images'>
            <img src={Blog1}></img>
          </div>
          <div>
            <h6 className='knowledge-center-short-heading'>Treding</h6>
            <h2 className='knowledge-center-main-heading'>
                10 Tips For Traveling With Friends
            </h2>
            <p className='knowledge-center-paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
              sed diam nonummy nibh euismod ti...</p>
          </div>
        </Col>
        <Col md={4} className='mt-5'>
          <div className='knowledge-center-images'>
            <img src={Blog2}></img>
          </div>
          <div>
            <h6 className='knowledge-center-short-heading'>Treding</h6>
            <h2 className='knowledge-center-main-heading'>
                15 Signs You're In Love With UX Design
            </h2>
            <p className='knowledge-center-paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
              sed diam nonummy nibh euismod ti...</p>
          </div>
        </Col >
        <Col md={4} className='mt-5'>
          <div className='knowledge-center-images'>
            <img src={Blog3}></img>
          </div>
          <div>
            <h6 className='knowledge-center-short-heading'>Travel,Treding</h6>
            <h2 className='knowledge-center-main-heading'>
               About Bicycle Touring<br></br> Pro
            </h2>
            <p className='knowledge-center-paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
              sed diam nonummy nibh euismod ti...</p>
          </div>
        </Col>
        
      </Row>
       <Row>
        <Col md={4} className='mt-5'>
          <div className='knowledge-center-images'>
            <img src={Blog4}></img>
          </div>
          <div>
            <h6 className='knowledge-center-short-heading'>Furniture</h6>
            <h2 className='knowledge-center-main-heading'>
               Beautiful Product Pages
            </h2>
            <p className='knowledge-center-paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
              sed diam nonummy nibh euismod ti...</p>
          </div>
        </Col>
        <Col md={4} className='mt-5'>
          <div className='knowledge-center-images'>
            <img src={Blog5}></img>
          </div>
          <div>
            <h6 className='knowledge-center-short-heading'>Furniture</h6>
            <h2 className='knowledge-center-main-heading'>
                Brand Colors
            </h2>
            <p className='knowledge-center-paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
              sed diam nonummy nibh euismod ti...</p>
          </div>
        </Col >
        <Col md={4} className='mt-5'>
          <div className='knowledge-center-images'>
            <img src={Blog6}></img>
          </div>
          <div>
            <h6 className='knowledge-center-short-heading'>Ideas, Interview, Treding</h6>
            <h2 className='knowledge-center-main-heading'>
               Creat An Exceptional Blog For Exceptional Writing
            </h2>
            <p className='knowledge-center-paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
              sed diam nonummy nibh euismod ti...</p>
          </div>
        </Col>
        
      </Row>
    </div>
   </Container>
   </div>

   
    </>
  )
}
