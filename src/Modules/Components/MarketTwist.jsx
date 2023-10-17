import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MarketTwist.css";

export default function MarketTwist() {
  return (
    <>
      <div className="about-bg-color">
        <Container>
          <Row className="pt-4 pb-4">
            <Col md={6}>
              <h1 className="about-heading">
                Social Media Reach That You Need
              </h1>
            </Col>
            <Col md={6}>
              <div className="d-flex justify-content-end align-items-center h-100">
                <Link to="/" className="about-link">
                  <span className="about-subheading">Home</span>
                </Link>
                <span className="about-subheading">&nbsp;&gt;&nbsp;</span>
                <span className="about-subheading">
                  Social Media Reach That You Need
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="market-content-section">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col">
              <h2 className="text-[#3b6d6e] mb-0">
                These Are The Services That We Provide
              </h2>
              <p className="text-[#848892] mt-4">
                Facebook, Instagram, Twitter, or LinkedIn, you name the social
                media account, and we will design a strategy to help increase
                your reach there.<br></br> With genuine strategy, authentic increase in
                number, and income gain, we are here to help you conquer social
                media platforms.
              </p>

              <div className="row mt-5">
                <div className="col-md-3">
                  <ul className="pl-4">
                    <li className="market-list-item">Content Marketing</li>
                    <li className="market-list-item">
                      Search Engine Optimization (SEO) …
                    </li>
                    <li className="market-list-item">
                      Search Engine Marketing (SEM) …
                    </li>
                    <li className="market-list-item">
                      Social Media Marketing (SMM)
                    </li>
                    <li className="market-list-item">Influencer Marketing.</li>
                  </ul>
                </div>

                <div className="col-md-3">
                  <ul className="pl-4">
                    <li className="market-list-item">Affiliate Marketing.</li>
                    <li className="market-list-item">Instagram Ads </li>
                    <li className="market-list-item">Google Ads </li>
                    <li className="market-list-item">Facebook Ads</li>
                    <li className="market-list-item">Google Adsense </li>
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
