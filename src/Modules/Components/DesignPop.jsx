import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./DesignPop.css";

export default function DesignPop() {
  return (
    <>
    <div className='about-bg-color'> 
    <Container>
      <Row className='pt-4 pb-4'>
        <Col md={6}>
          <h1 className='about-heading'>Design That Pops Out</h1>
        </Col>
        <Col md={6}>
          <div className='d-flex justify-content-end align-items-center h-100'>
            <Link to="/" className="about-link"><span className='about-subheading'>Home</span></Link>
            <span className='about-subheading'>&nbsp;&gt;&nbsp;</span>
            <span className='about-subheading'>Design That Pops Out</span>
          </div>
        </Col>
      </Row>
    </Container>
    </div>

    <div className='design-content-section'>
      <div className='container pt-5 pb-5'>
        <div className="row">
            <div className="col">
            <h2 className='text-[#3b6d6e] mb-0'>These Are The Services That We Provide</h2>
            <p className='text-[#848892] mt-4'>
            Let us simplify for connecting with some creative image additions. 
            Get your logo, brochure, or even your visiting card designed by our 
            experts. <br></br>Share your vision, and with some popping designs and 
            shiny shades, we will mold your dream design into reality. 
            </p>

            <div className='row mt-5'>
              <div className='col-md-3'>
              <ul className='pl-4'>
              <li className='design-list-section'>Resume</li>
              <li className='design-list-section'>Brochure</li>
              <li className='design-list-section'>Posts</li>
              <li className='design-list-section'>Photoshop</li>
              <li className='design-list-section'>Image editing</li>
            </ul>
              </div>

              <div className='col-md-3'>
              <ul className='pl-4'>
              <li className='design-list-section'>Collage services</li>
              <li className='design-list-section'>Photography</li>
              <li className='design-list-section'>Caricature & Cartoons </li>
              <li className='design-list-section'>Banner Design</li>
              <li className='design-list-section'>Tattoo Design</li>
              <li className='design-list-section'>Business Cards</li>
             </ul>
              </div>

             
            </div>
            </div>
        </div>
      </div>
    </div>

    </>
  )
}
