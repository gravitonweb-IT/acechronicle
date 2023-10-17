import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Exclusive.css"

export default function Exclusive() {
  return (
    <>
      <div className="about-bg-color">
        <Container>
          <Row className="pt-4 pb-4">
            <Col md={6}>
              <h1 className="about-heading">Exclusively Customised Services</h1>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-end align-items-center h-100">
                <Link to="/" className="about-link">
                  <span className="about-subheading">Home</span>
                </Link>
                <span className="about-subheading">&nbsp;&gt;&nbsp;</span>
                <span className="about-subheading">
                  Exclusively Customised Services
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="exclusive-content-section">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col">
              <h2 className="text-[#3b6d6e] mb-0">
                These Are The Services That We Provide
              </h2>
              <p className="text-[#848892] mt-4">
                Facebook, Instagram, Twitter, or LinkedIn, you name the social
                media account, and we will design a strategy to help increase
                your reach there.<br></br> With genuine strategy, authentic
                increase in number, and income gain, we are here to help you
                conquer social media platforms.
              </p>

              <div className="row mt-5">
                <div className="col-md-3">
                  <ul className="pl-4">
                    <li className="list-Exclusively-item">
                      WordPress Handling
                    </li>

                    <li className="list-Exclusively-item">
                      Translation & Transcription
                    </li>

                    <li className="list-Exclusively-item">
                      Digital Content Management
                    </li>

                    <li className="list-Exclusively-item">Video Marketing</li>

                    <li className="list-Exclusively-item">Audio Marketing</li>
                  </ul>
                </div>

                <div className="col-md-3">
                  <ul className="pl-4">
                    <li className="list-Exclusively-item">
                      Voice Overs & Podcasts
                    </li>

                    <li className="list-Exclusively-item">
                      Data Entry and Admin Work
                    </li>

                    <li className="list-Exclusively-item">
                      Virtual Assistance
                    </li>

                    <li className="list-Exclusively-item">
                      Customer Support and Services
                    </li>

                    <li className="list-Exclusively-item">
                      Data Extraction and Management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
