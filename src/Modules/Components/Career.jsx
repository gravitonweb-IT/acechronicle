import React from "react";
import "./Career.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CareerBanner from "./contentImg/career-banner-image1.png";

const Career = () => {
  return (
    <>
      {/* <div className='career-bg-color'>
    <Container>
      <Row className='p-3'>
        <Col md={6}>
          <h1 className='career-heading'>Career With Us</h1>
        </Col>
        <Col md={6}>
          <div className='d-flex justify-content-end align-items-center h-100'>
            <Link to="/" className="career-link"><span className='career-subheading'>Home</span></Link>
            <span className='career-subheading'>&nbsp;&gt;&nbsp;</span>
            <span className='career-subheading'>Career with us</span>
          </div>
        </Col>
      </Row>
    </Container>
      </div> */}

      <div
        className="content-section1 position-relative d-flex justify-content-center
       align-items-center"
      >
        <img
          src={CareerBanner}
          alt="Content Banner"
          className="content-section-image1"
        />

        <div className="position-absolute">
          <h1 className="text-white text-center blog-content-heading">
            Career{" "}
          </h1>
        </div>
      </div>

      <div className="career-middle-bg">
        <Container>
          <Row>
            <Col>
              <div className="career-paragraph">
                <p>
                  If you are someone who has – a ton of intent, the capacity
                  multitask, an eye for details, and the will to better yourself
                  every day, then contact us today by mailing your resume. Add
                  the subject line as ‘applying for a career with AC for XYZ job
                  position(mention the service). Our team will get in touch with
                  you within 5-7 business days.&nbsp;
                </p>
                <p>
                  <span>
                    <strong>Email</strong>:{" "}
                  </span>
                  <Link
                    to="mailto:ace.chronicle.official.id@gmail.com"
                    className="career-link"
                  >
                    <span className="career-email">
                      ace.chronicle.official.id@gmail.com
                    </span>
                  </Link>
                </p>
                <h3 className="career-heading1">
                  We have various job positions such as:
                </h3>
                <ul className="mt-4 pl-4">
                  <li className="career-list">Content writer</li>
                  <li className="career-list">Digital Marketer</li>
                  <li className="career-list">Project Manager</li>
                  <li className="career-list">Editor and Proofreader</li>
                  <li className="career-list">Graphic Designer.&nbsp;</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Career;
