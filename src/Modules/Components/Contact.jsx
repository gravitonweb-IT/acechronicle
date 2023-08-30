import React, { useState } from 'react';
import { Col, Container, Form, Row} from "react-bootstrap";
import {Link} from 'react-router-dom';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faPhone ,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textarea, setTextArea] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      password,
      textarea,
    });

    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setTextArea('');
  };
    
  return (
    <>
    <div className='contact-bg-color'>
    <Container>
      <Row className='p-3'>
        <Col md={6}>
          <h1 className='contact-heading'>Contact Us</h1>
        </Col>
        <Col md={6}>
          <div className='d-flex justify-content-end align-items-center h-100'>
            <Link to="/" className="contact-link"><span className='contact-subheading'>Home</span></Link>
            <span className='contact-subheading'>&nbsp;&gt;&nbsp;</span>
            <span className='contact-subheading'>Contact Us</span>
          </div>
        </Col>
      </Row>
    </Container>
    </div>

    <div className="contact-content-bgcolor">
    <Container>
    <Row className="pt-5 pb-5 contact-container-box">
        <Col md={6}>
        <h2 className="main-contact-heading">Let's Talk</h2>
        <Form onSubmit={handleSubmit} className='pt-4'>
        <Row>
           <Col md={6}>
           <div className="contact-input-field mb-3">
            <input type="text" className="contact-input" placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} ></input>
            </div>
           </Col>

            <Col md={6}>
            <div className="contact-input-field mb-3">
            <input type="text" className="contact-input" placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}></input>
            </div>
            </Col>

            <Col md={6} className="mt-3">
             <div className="contact-input-field mb-3">
             <input type="email" className="contact-input" placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}></input>
             </div>
            </Col>

            <Col md={6} className="mt-3">
            <div className="contact-input-field mb-3">
             <input type="password" className="contact-input" placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            </Col>

            <Col md={12}>
            <textarea
            className="contact-input mt-3"
            rows="5"
            placeholder="Leave a comment here"
            value={textarea}
            onChange={(e) => setTextArea(e.target.value)}>
           </textarea>
            </Col>

            <div class="mt-4 text-center">
                <button type="submit" className="btn contact-button-hover px-5">Submit</button>
            </div>
        </Row>
        </Form>
        </Col>

        <Col md={6} className='pt-5 contact-icons-details'>
        <h3 className='text-white'>Contact Details</h3>
        <ul class="list-inline mt-4">
          <li><Link href="#" className='contact-link'><FontAwesomeIcon icon={faEnvelope} className="contact1-icon"/>
          info@gravitonweb.com</Link></li>
          <li className=" mt-3"><Link href="#" className='contact-link'><FontAwesomeIcon icon={faPhone} className="contact1-icon"/>
          +91-8400952502</Link></li>
          <li className=" mt-3"><Link href="#" className='contact-link'><FontAwesomeIcon icon={faLocationDot} className="contact1-icon"/>
          Dubai office:Office No.904,Aspin
          <br></br>Commercial Tower,Sheikh Zayed Road,<br></br>Dubai,P.O. Box 118658 UAE</Link></li>
         
        </ul>
        <hr className='text-white mt-4'></hr>
        <div className='mt-4'>
        <Link to="#"><FontAwesomeIcon icon={faFacebook} className="contact2-icon"/></Link>
        <Link to="#"><FontAwesomeIcon icon={faInstagram} className="contact2-icon"/></Link>
        <Link to="#"><FontAwesomeIcon icon={faTwitter} className="contact2-icon"/></Link>
        <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="contact2-icon"/></Link>
        </div>
        </Col>
    </Row>
    </Container>
    </div>
   
    </>
  );
}
