import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './About.css'

const About = () => {
  return (
    <>
    <div className='about-bg-color'>
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
    </div>
    </>
  )
}

export default About