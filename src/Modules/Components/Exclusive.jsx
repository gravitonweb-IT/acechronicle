import React from "react";
import ContentBanner from "./contentImg/content-banner1.jpg";
import "./Exclusive.css";

export default function Exclusive() {
  return (
    <>
      <div className="content-section1 position-relative">
        <img
          src={ContentBanner}
          alt="Content Banner"
          className="content-section-image"
        />

        <div className="position-absolute top-50 start-50 translate-middle  w-50">
          <h1 className="mt-5 text-white text-center">
            Exclusively Customised Services
          </h1>
        </div>
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

      <div className="container mt-5 mb-5">
        <h3 className="text-center package-heading-line">
          Make Your Contect Visible
        </h3>
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-md-3 mb-3">
            <div className="card package-card-section">
              <div className="package-card-text">
                <h5>Basic</h5>
              </div>
              <div className="text-center mt-3">
                <sub className="card-package-sub">$</sub>
                <span class="card-package-price">29</span>
                <span class="card-package-mark">Monthly</span>
              </div>
              <ul className="pl-0 mt-3">
                <li className="card-package-list">Fully Responsive</li>
                <li className="card-package-list1">WooCommerce</li>
                <li className="card-package-list">SEO optimized</li>
                <li className="card-package-list1">Easy to use</li>
                <li className="card-package-list">5-Star Support</li>
              </ul>
              <div className="mx-auto">
                <button className="card-package-button">Purchase</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card package-card-section">
              <div className="package-card-text">
                <h5>Regular</h5>
              </div>
              <div className="text-center mt-3">
                <sub className="card-package-sub">$</sub>
                <span class="card-package-price">39</span>
                <span class="card-package-mark">Monthly</span>
              </div>
              <ul className="pl-0 mt-3">
                <li className="card-package-list">Fully Responsive</li>
                <li className="card-package-list1">WooCommerce</li>
                <li className="card-package-list">SEO optimized</li>
                <li className="card-package-list1">Easy to use</li>
                <li className="card-package-list">5-Star Support</li>
              </ul>
              <div className="mx-auto">
                <button className="card-package-button">Purchase</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card package-card-section">
              <div className="package-card-text">
                <h5>Basic</h5>
              </div>
              <div className="text-center mt-3">
                <sub className="card-package-sub">$</sub>
                <span class="card-package-price">69</span>
                <span class="card-package-mark">Premium</span>
              </div>
              <ul className="pl-0 mt-3">
                <li className="card-package-list">Fully Responsive</li>
                <li className="card-package-list1">WooCommerce</li>
                <li className="card-package-list">SEO optimized</li>
                <li className="card-package-list1">Easy to use</li>
                <li className="card-package-list">5-Star Support</li>
              </ul>
              <div className="mx-auto">
                <button className="card-package-button">Purchase</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
