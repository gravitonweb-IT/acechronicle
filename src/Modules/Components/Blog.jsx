import React, { useState } from "react";
import "./Blog.css";
import Blog1 from "./BlogImgs/blog-img-1.jpg";
import Blog2 from "./BlogImgs/blog-img-2.jpg";
import Blog13 from "./BlogImgs/blog-img-13.jpg";
import Blog14 from "./BlogImgs/blog-img-14.jpg";
import Blog15 from "./BlogImgs/blog-img-15.jpg";
import Blog16 from "./BlogImgs/blog-img-16.jpg";
import Icon from "./BlogImgs/user-icon-image.png";
import blogbannergiff from "./BlogImgs/blogpagegif.gif";
import { Link } from "react-router-dom";
import Navbar from "../../common/Navbar";

const Blog = () => {
  const [toggle, setToggle] = useState(1);
  function Toggle(id) {
    setToggle(id);
  }
  return (
    <>
      <div className="gif-blog-container">
        <div className="our-nav">
          <Navbar />
        </div>

        <img src={blogbannergiff} className="blog-home-gif"></img>

        <div className="content-overlay1 ">Knowledge <br/>Center </div>
      </div>

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
                    <Link to="/blog1" style={{ textDecoration: "none" }}>
                      <div className="">
                        <img src={Blog13}></img>
                      </div>
                      <div class=" blog-section-card p-3">
                        <h5 class="text-black">
                          The Power of SEO in Content Marketing
                        </h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Discover how SEO and content marketing enhances brand
                          visibility, drives organic traffic, and increases
                          conversions.
                        </p>
                        <div className="d-flex">
                          <div className="blog-icon-image">
                            <img src={Icon}></img>
                          </div>
                          <div>
                            <h6 className="pl-4 pt-2 text-black">Yashita</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-3 mb-3">
                    <Link to="/blog2" style={{ textDecoration: "none" }}>
                      <div className="">
                        <img src={Blog14}></img>
                      </div>
                      <div class=" blog-section-card p-3">
                        <h5 class="text-black">
                          {" "}
                          Exploring the Future of Digital Marketing
                        </h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          The future of digital marketing and also find out the
                          present trends in this article. Read the case studies
                          to learn how to expand your business.
                        </p>
                        <div className="d-flex">
                          <div className="blog-icon-image">
                            <img src={Icon}></img>
                          </div>
                          <div>
                            <h6 className="pl-4 pt-2 text-black">Anvi</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-3 mb-3">
                    <Link to="/blog3" style={{ textDecoration: "none" }}>
                      <div className="">
                        <img src={Blog16}></img>
                      </div>
                      <div class=" blog-section-card p-3">
                        <h5 class="text-black">
                          Adopting AI for Business Process Automation
                        </h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          In this article, learn how to unlock the power of AI
                          and transform your business by automating & optimizing
                          processes.
                        </p>
                        <div className="d-flex">
                          <div className="blog-icon-image">
                            <img src={Icon}></img>
                          </div>
                          <div>
                            <h6 className="pl-4 pt-2 text-black">Aditi</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-3">
                    <Link to="/blog4" style={{ textDecoration: "none" }}>
                      <div className="">
                        <img src={Blog15}></img>
                      </div>
                      <div class=" blog-section-card p-3">
                        <h5 class="text-black">
                          Content Writing Services for E-commerce Businesses
                        </h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Learn to transform descriptions into persuasive tools.
                          Learn how SEO-optimized content and social proof can
                          convert browsers into buyers.
                        </p>
                        <div className="d-flex">
                          <div className="blog-icon-image">
                            <img src={Icon}></img>
                          </div>
                          <div>
                            <h6 className="pl-4 pt-2 text-black">Aarohi</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={toggle === 2 ? "show-content" : "content"}>
                <div className="row mt-5">
                  <div className="col-md-3 mb-3">
                    <Link to="/blog1" style={{ textDecoration: "none" }}>
                      <div className="">
                        <img src={Blog13}></img>
                      </div>
                      <div class=" blog-section-card p-3">
                        <h5 class="text-black">
                          The Power of SEO in Content Marketing
                        </h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Discover how SEO and content marketing enhances brand
                          visibility, drives organic traffic, and increases
                          conversions.
                        </p>
                        <div className="d-flex">
                          <div className="blog-icon-image">
                            <img src={Icon}></img>
                          </div>
                          <div>
                            <h6 className="pl-4 pt-2 text-black">Yashita</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-3">
                    <Link to="/blog2" style={{ textDecoration: "none" }}>
                      <div className="">
                        <img src={Blog14}></img>
                      </div>
                      <div class=" blog-section-card p-3">
                        <h5 class="text-black">
                          {" "}
                          Exploring the Future of Digital Marketing
                        </h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          The future of digital marketing and also find out the
                          present trends in this article. Read the case studies
                          to learn how to expand your business.
                        </p>
                        <div className="d-flex">
                          <div className="blog-icon-image">
                            <img src={Icon}></img>
                          </div>
                          <div>
                            <h6 className="pl-4 pt-2 text-black">Anvi</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={toggle === 3 ? "show-content" : "content"}>
                <div className="row mt-5">
                  <div className="col-md-3 mb-3">
                    <div className="">
                      <img src={Blog1}></img>
                    </div>
                    <div class=" blog-section-card p-3">
                      <h5 class="">What Your Browser Says About You</h5>
                      <h6 className="text-[#aab3bc] mt-3">
                        29 September 2016{" "}
                      </h6>
                      <p className="text-[#848892]">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod...
                      </p>
                      <div className="d-flex">
                        <div className="blog-icon-image">
                          <img src={Icon}></img>
                        </div>
                        <div>
                          <h6 className="pl-4 pt-2">Tanvi</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="">
                      <img src={Blog2}></img>
                    </div>
                    <div class=" blog-section-card p-3">
                      <h5 class="">New Trends In Responsive Design</h5>
                      <h6 className="text-[#aab3bc] mt-3">
                        29 September 2016{" "}
                      </h6>
                      <p className="text-[#848892]">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod...
                      </p>
                      <div className="d-flex">
                        <div className="blog-icon-image">
                          <img src={Icon}></img>
                        </div>
                        <div>
                          <h6 className="pl-4 pt-2">Peehu</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={toggle === 4 ? "show-content" : "content"}>
                <div className="row mt-5">
                  <div className="col-md-3">
                    <Link to="/blog3" style={{ textDecoration: "none" }}>
                      <div className="">
                        <img src={Blog16}></img>
                      </div>
                      <div class=" blog-section-card p-3">
                        <h5 class="text-black">
                          Adopting AI for Business Process Automation
                        </h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          In this article, learn how to unlock the power of AI
                          and transform your business by automating & optimizing
                          processes.
                        </p>
                        <div className="d-flex">
                          <div className="blog-icon-image">
                            <img src={Icon}></img>
                          </div>
                          <div>
                            <h6 className="pl-4 pt-2 text-black">Aditi</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={toggle === 5 ? "show-content" : "content"}>
                <div className="row mt-5">
                  <div className="col-md-3">
                    <div className="">
                      <img src={Blog2}></img>
                    </div>
                    <div class=" blog-section-card p-3">
                      <h5 class="">New Trends In Responsive Design</h5>
                      <h6 className="text-[#aab3bc] mt-3">
                        29 September 2016{" "}
                      </h6>
                      <p className="text-[#848892]">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod...
                      </p>
                      <div className="d-flex">
                        <div className="blog-icon-image">
                          <img src={Icon}></img>
                        </div>
                        <div>
                          <h6 className="pl-4 pt-2">Amisha</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={toggle === 6 ? "show-content" : "content"}>
                <div className="row mt-5">
                  <div className="col-md-3">
                    <Link to="/blog4" style={{ textDecoration: "none" }}>
                      <div className="">
                        <img src={Blog15}></img>
                      </div>
                      <div class=" blog-section-card p-3">
                        <h5 class="text-black">
                          Content Writing Services for E-commerce Businesses
                        </h5>
                        <h6 className="text-[#aab3bc] mt-3">
                          29 September 2016{" "}
                        </h6>
                        <p className="text-[#848892]">
                          Learn to transform descriptions into persuasive tools.
                          Learn how SEO-optimized content and social proof can
                          convert browsers into buyers.
                        </p>
                        <div className="d-flex">
                          <div className="blog-icon-image">
                            <img src={Icon}></img>
                          </div>
                          <div>
                            <h6 className="pl-4 pt-2 text-black">Aarohi</h6>
                          </div>
                        </div>
                      </div>
                    </Link>
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
