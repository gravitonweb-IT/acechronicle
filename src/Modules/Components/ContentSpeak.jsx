import React from "react";
import ContentBanner from "./contentImg/content-banner1.jpg";
import "./ContentSpeak.css";
import Navbar from "../../common/Navbar";


export default function ContentSpeak() {
  return (
    <>
      <div className="content-section1 position-relative">
        <div className="our-nav">
<Navbar/>
        </div>
        <img
          src={ContentBanner}
          alt="Content Banner"
          className="content-section-image"
        />

        <div className="position-absolute top-50 start-50 translate-middle  w-50">
          <h1 className="mt-5 text-white text-center">
            Content That Speaks For Itself
          </h1>
        </div>
      </div>

      <div className="content-second-section">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col">
              <h2 className="text-[#3b6d6e] mb-0">
                These Are The Services That We Provide
              </h2>
              <p className="text-[#848892] mt-4">
                Creating engaging content that connects with the audience is key
                to creating brand value. With the experts on board, get all your
                content needs fulfilled.<br></br> We have your back at every
                level, from blogs to website pages.
              </p>

              <div className="row mt-5">
                <div className="col-md-3">
                  <ul className="pl-4">
                    <li className="content-list-section">
                      Creative writing & Copywriting
                    </li>
                    <li className="content-list-section">Editing</li>
                    <li className="content-list-section">Proofreading</li>
                    <li className="content-list-section">
                      Product descriptions & Product reviews
                    </li>
                    <li className="content-list-section">Quotes & Captions</li>
                    <li className="content-list-section">Academic essays</li>
                    <li className="content-list-section">
                      Literature reviews & speeches
                    </li>
                    <li className="content-list-section">Press release</li>
                  </ul>
                </div>

                <div className="col-md-3">
                  <ul className="pl-4">
                    <li className="content-list-section">News editorials</li>
                    <li className="content-list-section">Ghostwriting</li>
                    <li className="content-list-section">eBooks </li>
                    <li className="content-list-section">Legal Writing </li>
                    <li className="content-list-section">
                      Financial Research{" "}
                    </li>
                    <li className="content-list-section">Resumes</li>
                    <li className="content-list-section">Business Writing </li>
                    <li className="content-list-section">SEO Writing</li>
                  </ul>
                </div>

                <div className="col-md-3">
                  <ul className="pl-4">
                    <li className="content-list-section">Medical Writing </li>
                    <li className="content-list-section">Survey Research</li>
                    <li className="content-list-section">Fiction </li>
                    <li className="content-list-section">Wikipedia </li>
                    <li className="content-list-section">Script Writing</li>
                    <li className="content-list-section">Newsletters </li>
                    <li className="content-list-section">Short Stories </li>
                    <li className="content-list-section">Journalism </li>
                  </ul>
                </div>

                <div className="col-md-3">
                  <ul className="pl-4">
                    <li className="content-list-section">Cover Letter </li>
                    <li className="content-list-section">Podcast Writing </li>
                    <li className="content-list-section">
                      Non-Fiction Writing{" "}
                    </li>
                    <li className="content-list-section">Web Page Writer</li>
                    <li className="content-list-section">Book Review</li>
                    <li className="content-list-section">
                      Environmental Science
                    </li>
                    <li className="content-list-section">Manuscripts</li>
                    <li className="content-list-section">White Paper</li>
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
