import React from "react";
import "./Career.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CareerBanner from "./contentImg/career-banner-image1.png";
import Navbar from "../../common/Navbar";

const Career = () => {
  return (
    <>
   

      <div
        className="content-section1 position-relative d-flex justify-content-center
       align-items-center"
      >
        <div className="our-nav">
          <Navbar/>
        </div>
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
