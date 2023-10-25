import React, { useState } from "react";

import "./Blog.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import Blog1 from "./BlogImgs/blog-img-1.jpg";
import Blog2 from "./BlogImgs/blog-img-2.jpg";
import Blog3 from "./BlogImgs/blog-img-3.jpg";
import Blog4 from "./BlogImgs/blog-img-4.jpg";
import Blog5 from "./BlogImgs/blog-img-5.jpg";
import Blog6 from "./BlogImgs/blog-img-6.jpg";
import Blog7 from "./BlogImgs/blog-img-7.jpg";
import Blog8 from "./BlogImgs/blog-img-8.jpg";
import blogbannervideo from "./BlogImgs/blogpagevideo.mp4";

const Blog = () => {
  const [toggle, setToggle] = useState(1);
  function Toggle(id) {
    setToggle(id);
  }
  return (
    <>
      <div className="video-blog-container">
        <video id="video" autoPlay loop className="blogbanner-vdeo">
          <source src={blogbannervideo} type="video/mp4" />
        </video>
        <div className="content-overlay text-center">An Awesome Blog </div>
      </div>

      {/* <div
        className="content-section1 position-relative d-flex justify-content-center
       align-items-center"
      >
        <img
          src={BlogBanner}
          alt="Content Banner"
          className="content-section-image1"
        />

        <div className="position-absolute">
          <h1 className="text-white text-center blog-content-heading">An Awesome Blog</h1>
        </div>
      </div> */}

      <div className="second-blog-section pt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="blog-section-menu p-0">
                <li
                  className={`blog-item ${toggle === 1 ? "active" : ""}`}
                  onClick={() => Toggle(1)}
                >
                  All
                </li>
                <li
                  className={`blog-item ${toggle === 2 ? "active" : ""}`}
                  onClick={() => Toggle(2)}
                >
                  Marketing
                </li>
                <li
                  className={`blog-item ${toggle === 3 ? "active" : ""}`}
                  onClick={() => Toggle(3)}
                >
                 Cyber Security
                </li>
                <li
                  className={`blog-item ${toggle === 4 ? "active" : ""}`}
                  onClick={() => Toggle(4)}
                >
                  Tech & Innovation
                </li>
                <li
                  className={`blog-item ${toggle === 5 ? "active" : ""}`}
                  onClick={() => Toggle(5)}
                >
                 How- to's
                </li>
                <li
                  className={`blog-item ${toggle === 6 ? "active" : ""}`}
                  onClick={() => Toggle(6)}
                >
                 Content Creation
                </li>
              </ul>

              <div className={toggle === 1 ? "show-content" : "content"}>
                <div className="row mt-5">
                  <div className="col-md-3 mb-3">
                    <div className="">
                      <img src={Blog1}></img>
                      <div class=" blog-section-card p-3">
                        <h5 class="">What Your Browser Says About You</h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="">
                      <img src={Blog2}></img>
                      <div class=" blog-section-card p-3">
                        <h5 class="">New Trends In Responsive Design</h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="">
                      <img src={Blog3}></img>
                      <div class=" blog-section-card p-3">
                        <h5 class="">
                          About Bicycle Touring<br></br> Pro
                        </h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="">
                      <img src={Blog4}></img>
                      <div class=" blog-section-card p-3">
                        <h5 class="">10 Tips For Traveling With Friends</h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-3 mb-3">
                    <div className="">
                      <img src={Blog5}></img>
                      <div class=" blog-section-card p-3">
                        <h5 class="">Tips & Tricks For The Fashion Blogger</h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="">
                      <img src={Blog6}></img>
                      <div class=" blog-section-card p-3">
                        <h5 class="">
                          Working Hours Everyday The Same Happy Days
                        </h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="">
                      <img src={Blog7}></img>
                      <div class=" blog-section-card p-3">
                        <h5 class="">Turn Your Dog Into A Social Media Guru</h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="">
                      <img src={Blog8}></img>
                      <div class=" blog-section-card p-3">
                        <h5 class="">15 Signs You’re In Love With UX Design</h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-3 mb-3">
                    <div className="blog-shade-image">
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="fa-4x text-[#848892]"
                      />
                      <h2 className="mt-3">
                        The details are not the details. They make the design.
                      </h2>
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="blog-shade-image">
                      <h5 className="mt-3">
                        Create An Exceptional Blog For Exceptional Writing
                      </h5>
                      <h6 className="text-[#aab3bc] mt-3">
                        29 September 2016{" "}
                      </h6>
                      <p className="text-[#848892]">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod...
                      </p>
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="blog-shade-image">
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="fa-4x text-[#848892]"
                      />
                      <h2 className="mt-3">
                        Create a gorgeous blog that will capture the attention
                      </h2>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="blog-shade-image">
                      <h5 className="mt-3">
                        Motion Animation And Augmented Reality
                      </h5>
                      <h6 className="text-[#aab3bc] mt-3">
                        29 September 2016{" "}
                      </h6>
                      <p className="text-[#848892]">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={toggle === 2 ? "show-content" : "content"}>
                <div className="row mt-5 mb-5">
                  <div className="col-md-3 mb-3">
                    <div className="blog-shade-image">
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="fa-4x text-[#848892]"
                      />
                      <h2 className="mt-3">
                        The details are not the details. They make the design.
                      </h2>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="blog-shade-image">
                      <h5 className="mt-3">
                        Create An Exceptional Blog For Exceptional Writing
                      </h5>
                      <h6 className="text-[#aab3bc] mt-3">
                        29 September 2016{" "}
                      </h6>
                      <p className="text-[#848892]">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={toggle === 3 ? "show-content" : "content"}>
                <div className="row mt-5 mb-5">
                  <div className="col-md-3 mb-3">
                    <div className="">
                      <img src={Blog1}></img>
                      <div class=" blog-section-card p-3">
                        <h5 class="">What Your Browser Says About You</h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="">
                      <img src={Blog2}></img>
                      <div class=" blog-section-card p-3">
                        <h5 class="">New Trends In Responsive Design</h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={toggle === 4 ? "show-content" : "content"}>
                <div className="row mt-5 mb-5">
                  <div className="col-md-3 mb-3">
                    <div className="blog-shade-image">
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="fa-4x text-[#848892]"
                      />
                      <h2 className="mt-3">
                        Create a gorgeous blog that will capture the attention
                      </h2>
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div className="blog-shade-image">
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="fa-4x text-[#848892]"
                      />
                      <h2 className="mt-3">
                        The details are not the details. They make the design.
                      </h2>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="blog-shade-image">
                      <h5 className="mt-3">
                        Create An Exceptional Blog For Exceptional Writing
                      </h5>
                      <h6 className="text-[#aab3bc] mt-3">
                        29 September 2016{" "}
                      </h6>
                      <p className="text-[#848892]">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={toggle === 5 ? "show-content" : "content"}>
                <div className="row mt-5 mb-5">
                  <div className="col-md-3 mb-3">
                    <div className="">
                      <img src={Blog2}></img>
                      <div class=" blog-section-card p-3">
                        <h5 class="">New Trends In Responsive Design</h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={toggle === 6 ? "show-content" : "content"}>
                <div className="row mt-5 mb-5">
                  <div className="col-md-3">
                    <div className="">
                      <img src={Blog3}></img>
                      <div class=" blog-section-card p-3">
                        <h5 class="">
                          About Bicycle Touring<br></br> Pro
                        </h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
