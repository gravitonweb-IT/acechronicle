import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Contact.css";
import ContactBanner from "./contentImg/contact-banner-image1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextArea] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      phone,
      textarea,
    });

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setTextArea("");
  };

  return (
    <>
      <div className="content-section1 position-relative d-flex justify-content-center
       align-items-center">
        <img
          src={ContactBanner}
          alt="Content Banner"
          className="content-section-image1"
        />

        <div className="position-absolute">
          <h1 className="text-white text-center contact-content-heading">Contact</h1>
        </div>
      </div>

      <div className="contact-content-bgcolor">
        <Container>
          <Row className="pt-5 pb-5 contact-container-box">
            <Col md={6}>
              <h2 className="main-contact-heading">Let's Talk</h2>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mt-3">
                    <div className="contact-input-field mb-3">
                      <input
                        name="fname"
                        type="text"
                        className="contact-input"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      ></input>
                    </div>
                  </Col>

                  <Col md={6} className="mt-3">
                    <div className="contact-input-field mb-3">
                      <input
                        type="text"
                        name="lname"
                        className="contact-input"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      ></input>
                    </div>
                  </Col>

                  <Col md={6} className="mt-3">
                    <div className="contact-input-field mb-3">
                      <input
                        name="email"
                        type="email"
                        className="contact-input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></input>
                    </div>
                  </Col>

                  <Col md={6} className="mt-3">
                    <div className="contact-input-field mb-3">
                      <input
                        name="phone"
                        type="text"
                        className="contact-input"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      ></input>
                    </div>
                  </Col>

                  <Col md={12}>
                    <textarea
                      className="contact-input mt-3"
                      rows="5"
                      name="message"
                      placeholder="Leave a comment here"
                      value={textarea}
                      onChange={(e) => setTextArea(e.target.value)}
                    ></textarea>
                  </Col>

                  <div class="mt-4 text-center">
                    <button
                      type="submit"
                      className="btn contact-button-hover px-5"
                    >
                      Submit
                    </button>
                  </div>
                </Row>
              </Form>
            </Col>

            <Col md={6} className="pt-4 contact-icons-details">
              <h3 className="text-white">Contact Details</h3>

              <ul class="list-inline mt-4">
                <li>
                  <Link href="#" className="contact-link">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="contact1-icon"
                    />
                    ace.chronicle.official.id@gmail.com
                  </Link>
                </li>

                <li className=" mt-2">
                  <Link href="#" className="contact-link">
                    <FontAwesomeIcon icon={faPhone} className="contact1-icon" />
                    (+91) 7972-585-033
                  </Link>
                </li>

                <li className=" mt-2">
                  <Link href="#" className="contact-link">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="contact1-icon"
                    />
                    Mumbai , Maharashtra
                  </Link>
                </li>

                <li className=" mt-2">
                  <Link href="#" className="contact-link">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="contact1-icon"
                    />
                    7972585033 , 9309317893
                  </Link>
                </li>

                <li className=" mt-3 contact-link">
                  Working Days : Monday - Saturday
                </li>

                <li className=" mt-2 contact-link">
                  Working Hours : 10 AM - 9 PM IST
                </li>

                <li className=" mt-2 contact-link">
                  Email & Whatsapp 24/7 available.
                </li>
              </ul>

              <hr className="text-white mt-4"></hr>

              <div className="mt-4">
                <Link to="#">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="contact2-icon"
                  />
                </Link>

                <Link to="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="contact2-icon"
                  />
                </Link>

                <Link to="#">
                  <FontAwesomeIcon icon={faTwitter} className="contact2-icon" />
                </Link>

                <Link to="#">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="contact2-icon"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <div
          className="map-container"
          style={{ padding: "20px", width: "calc(100% )" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571337597!2d72.71637411447857!3d19.082177513371683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693390573268!5m2!1sen!2sin"
            frameBorder="0"
            style={{ border: 0, width: "100%", height: "calc(100vh - 300px)" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
