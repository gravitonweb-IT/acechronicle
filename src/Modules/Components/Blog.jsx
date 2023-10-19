import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Blog.css";
import BeautyImg from "./BlogImgs/beauty-blog-img1.jpg";
import BeautyImg1 from "./BlogImgs/beauty-blog-img2.jpg";
import BeautyImg2 from "./BlogImgs/beauty-blog-img3.jpg";
import ShopFurniture from "./BlogImgs/shop-furniture-6.jpg";
import ShopFurniture1 from "./BlogImgs/shop-furniture-5.jpg";
import ShopFurniture2 from "./BlogImgs/shop-furniture-4.jpg";
import ShopFurniture3 from "./BlogImgs/shop-furniture-3.jpg";
import ShopFurniture4 from "./BlogImgs/shop-furniture-2.jpg";
import ShopFurniture5 from "./BlogImgs/shop-furniture-1.jpg";
import ShopBlog from "./BlogImgs/blog-img-1.jpg";
import footer1 from "./BlogImgs/footer1.jpg";
import footer2 from "./BlogImgs/footer2.jpg";
import footer3 from "./BlogImgs/footer3.jpg";
import footer4 from "./BlogImgs/footer4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faPinterestP,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import BlogBanner from "./BlogImgs/blog-banner-image1.png";
import Blog1 from "./BlogImgs/blog-img-1.jpg";
import Blog2 from "./BlogImgs/blog-img-2.jpg";
import Blog3 from "./BlogImgs/blog-img-3.jpg";
import Blog4 from "./BlogImgs/blog-img-4.jpg";
import Blog5 from "./BlogImgs/blog-img-5.jpg";
import Blog6 from "./BlogImgs/blog-img-6.jpg";
import Blog7 from "./BlogImgs/blog-img-7.jpg";
import Blog8 from "./BlogImgs/blog-img-8.jpg";

const Blog = () => {
  const [toggle, setToggle] = useState(1);
  function Toggle(id) {
    setToggle(id);
  }
  return (
    <>
      {/* <div className='blog-bg-color'>
    <Container>
      <Row className='p-3'>
        <Col md={6}>
          <h1 className='blog-heading'>Blog</h1>
        </Col>
        <Col md={6}>
          <div className='d-flex justify-content-end align-items-center h-100'>
            <Link to="/" className="blog-link"><span className='blog-subheading'>Home</span></Link>
            <span className='blog-subheading'>&nbsp;&gt;&nbsp;</span>
            <span className='blog-subheading'>Blog</span>
          </div>
        </Col>
      </Row>
    </Container>
    </div>

    <div className='blog-images-container-bg'>
      <Container>
        <Row className='pt-5 blog-container-box'>
          <Col md={7} className="mb-5">
            <div className='blog-container'>
              <div className='blog-images-box'>
              <img src={BeautyImg}></img>
              </div>
              <div className='blog-content-box'>
               <h2 className='blog-main-heading'>Time To Relax Your Body</h2>
               <span className="blog-short-description">October 7, 2016 &nbsp;</span>
               <span className="blog-short-description">By Admin</span>
               <p className='blog-main-paragraph mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo....</p>
                <div className="inline-block-container">
                <span className="blog-main-button">Read More</span>
                <div>
                <Link to="#"><FontAwesomeIcon icon={faFacebook} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faTwitter} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faPinterestP} className="blog-icons"/></Link>
               </div>
               </div>

              </div>
            </div>

            <div className='blog-container mt-4'>
              <div className='blog-images-box'>
              <img src={BeautyImg1}></img>
              </div>
              <div className='blog-content-box'>
               <h2 className='blog-main-heading'>Enjoy Thermal Experience</h2>
               <span className="blog-short-description">October 7, 2016 &nbsp;</span>
               <span className="blog-short-description">By Admin</span>
               <p className='blog-main-paragraph mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo....</p>
                <div className="inline-block-container">
                <span className="blog-main-button">Read More</span>
                <div>
                <Link to="#"><FontAwesomeIcon icon={faFacebook} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faTwitter} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faPinterestP} className="blog-icons"/></Link>
               </div>
               </div>

              </div>
            </div>

            <div className='blog-container mt-4'>
              <div className='blog-images-box'>
              <img src={BeautyImg2}></img>
              </div>
              <div className='blog-content-box'>
               <h2 className='blog-main-heading'>Relaxation At Its Absolute Best</h2>
               <span className="blog-short-description">October 7, 2016 &nbsp;</span>
               <span className="blog-short-description">By Admin</span>
               <p className='blog-main-paragraph mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo....</p>
                <div className="inline-block-container">
                <span className="blog-main-button">Read More</span>
                <div>
                <Link to="#"><FontAwesomeIcon icon={faFacebook} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faTwitter} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faPinterestP} className="blog-icons"/></Link>
               </div>
               </div>

              </div>
            </div>

            <div className='blog-container mt-4'>
              <div className='blog-images-box'>
              <img src={ShopFurniture}></img>
              </div>
              <div className='blog-content-box'>
               <h2 className='blog-main-heading'>Beautiful Product Pages</h2>
               <span className="blog-short-description">October 6, 2016 &nbsp;</span>
               <span className="blog-short-description">By Admin</span>
               <p className='blog-main-paragraph mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo....</p>
                <div className="inline-block-container">
                <span className="blog-main-button">Read More</span>
                <div>
                <Link to="#"><FontAwesomeIcon icon={faFacebook} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faTwitter} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faPinterestP} className="blog-icons"/></Link>
               </div>
               </div>

              </div>
            </div>

            <div className='blog-container mt-4'>
              <div className='blog-images-box'>
              <img src={ShopFurniture1}></img>
              </div>
              <div className='blog-content-box'>
               <h2 className='blog-main-heading'>New Collection</h2>
               <span className="blog-short-description">October 6, 2016 &nbsp;</span>
               <span className="blog-short-description">By Admin</span>
               <p className='blog-main-paragraph mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo....</p>
                <div className="inline-block-container">
                <span className="blog-main-button">Read More</span>
                <div>
                <Link to="#"><FontAwesomeIcon icon={faFacebook} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faTwitter} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faPinterestP} className="blog-icons"/></Link>
               </div>
               </div>

              </div>
            </div>

            <div className='blog-container mt-4'>
              <div className='blog-images-box'>
              <img src={ShopFurniture2}></img>
              </div>
              <div className='blog-content-box'>
               <h2 className='blog-main-heading'>Set Up Your Online Shop</h2>
               <span className="blog-short-description">October 6, 2016 &nbsp;</span>
               <span className="blog-short-description">By Admin</span>
               <p className='blog-main-paragraph mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo....</p>
                <div className="inline-block-container">
                <span className="blog-main-button">Read More</span>
                <div>
                <Link to="#"><FontAwesomeIcon icon={faFacebook} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faTwitter} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faPinterestP} className="blog-icons"/></Link>
               </div>
               </div>

              </div>
            </div>

            <div className='blog-container mt-4'>
              <div className='blog-images-box'>
              <img src={ShopFurniture3}></img>
              </div>
              <div className='blog-content-box'>
               <h2 className='blog-main-heading'>Furniture Trends</h2>
               <span className="blog-short-description">October 6, 2016 &nbsp;</span>
               <span className="blog-short-description">By Admin</span>
               <p className='blog-main-paragraph mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo....</p>
                <div className="inline-block-container">
                <span className="blog-main-button">Read More</span>
                <div>
                <Link to="#"><FontAwesomeIcon icon={faFacebook} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faTwitter} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faPinterestP} className="blog-icons"/></Link>
               </div>
               </div>

              </div>
            </div>

            <div className='blog-container mt-4'>
              <div className='blog-images-box'>
              <img src={ShopFurniture4}></img>
              </div>
              <div className='blog-content-box'>
               <h2 className='blog-main-heading'>Brand Colors</h2>
               <span className="blog-short-description">October 6, 2016 &nbsp;</span>
               <span className="blog-short-description">By Admin</span>
               <p className='blog-main-paragraph mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo....</p>
                <div className="inline-block-container">
                <span className="blog-main-button">Read More</span>
                <div>
                <Link to="#"><FontAwesomeIcon icon={faFacebook} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faTwitter} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faPinterestP} className="blog-icons"/></Link>
               </div>
               </div>

              </div>
            </div>

            <div className='blog-container mt-4'>
              <div className='blog-images-box'>
              <img src={ShopFurniture5}></img>
              </div>
              <div className='blog-content-box'>
               <h2 className='blog-main-heading'>Fall/Winter Collection</h2>
               <span className="blog-short-description">October 6, 2016 &nbsp;</span>
               <span className="blog-short-description">By Admin</span>
               <p className='blog-main-paragraph mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo....</p>
                <div className="inline-block-container">
                <span className="blog-main-button">Read More</span>
                <div>
                <Link to="#"><FontAwesomeIcon icon={faFacebook} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faTwitter} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faPinterestP} className="blog-icons"/></Link>
               </div>
               </div>

              </div>
            </div>

            <div className='blog-container mt-4'>
              <div className='blog-images-box'>
              <img src={ShopBlog}></img>
              </div>
              <div className='blog-content-box'>
               <h2 className='blog-main-heading'>What Your Browser Says About You</h2>
               <span className="blog-short-description">September 29, 2016 &nbsp;</span>
               <span className="blog-short-description">By Admin</span>
               <p className='blog-main-paragraph mt-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo....</p>
                <div className="inline-block-container">
                <span className="blog-main-button">Read More</span>
                <div>
                <Link to="#"><FontAwesomeIcon icon={faFacebook} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faTwitter} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="blog-icons"/></Link>
                <Link to="#"><FontAwesomeIcon icon={faPinterestP} className="blog-icons"/></Link>
               </div>
               </div>

              </div>
            </div>
          </Col>

           <Col md={5}>
            <div>
            <input type="text" value="" placeholder="Search" name="search" id="search"
             className='blog-input-search'></input>
            </div>

            <div className="blog-input-box">
            <h2 className="blog-input-content">About Me</h2>
            </div>

            <div className="blog-input-box">
            <figure className="d-flex justify-content-center">
            <img src="https://life2grow.com/ace/wp-content/uploads/2022/07/Ace-Logo_150pxh.png" 
            alt="Sidebar Image" className='blog-input-imgs'></img></figure>
           </div>

           <div className="blog-input-box"></div>

           <div className="blog-input-box"></div>

           <div className="blog-input-box">
           <ul className="p-0">
              <li className="main-blog-list mt-5">
                <div className='blog1-image'>
                 <img src={footer1}></img>
                </div>
                <div>
                  <h6 className="blog1-heading">10 Tips for Traveling with friends</h6>
                  <h6 className="blog1-subheading">September 29, 2016</h6>
                </div>
              </li>
              <li className="main-blog-list mt-5">
                <div className='blog1-image'>
                 <img src={footer2}></img>
                </div>
                <div>
                  <h6 className="blog1-heading">15 Signs you're in Love with UX Designs</h6>
                  <h6 className="blog1-subheading">April 29, 2016</h6>
                </div>
              </li>
              <li className="main-blog-list mt-5">
                <div className='blog1-image'>
                 <img src={footer3}></img>
                </div>
                <div>
                  <h6 className="blog1-heading">About Bicycle Touring Pro</h6>
                  <h6 className="blog1-subheading">September 29, 2016</h6>
                </div>
              </li>
           </ul>
           </div>

           <div className="blog-input-box">
           <ul>
					 <li className='blog-input-textcolor'>Beauty</li>
					<li className='blog-input-textcolor'>Furniture</li>
					<li className='blog-input-textcolor'>Ideas</li>
					<li className='blog-input-textcolor'>Innovation</li>
					<li className='blog-input-textcolor'>Interview</li>
					<li className='blog-input-textcolor'>Teach</li>
					<li className='blog-input-textcolor'>Travel</li>
					<li className='blog-input-textcolor'>Trending</li>

		     	</ul>
           </div>

           <div className="blog-input-box"></div>

           <div className="blog-input-box">
           <ul>
					 <li className='blog-input-textcolor'>October 2016</li>
					 <li className='blog-input-textcolor'>September 2016</li>
					 <li className='blog-input-textcolor'>July 2016</li>
					 <li className='blog-input-textcolor'>June 2016</li>
					 <li className='blog-input-textcolor'>May 2016</li>
					 <li className='blog-input-textcolor'>April 2016</li>
					 <li className='blog-input-textcolor'>March 2016</li>
					 <li className='blog-input-textcolor'>February 2016</li>

		     	</ul>
           </div>

           
           </Col>
          
        </Row>
      </Container>
    </div>  */}

      <div
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
                Ideas
              </li>
              <li
                className={`blog-item ${toggle === 3 ? "active" : ""}`}
                onClick={() => Toggle(3)}
              >
                Innovation
              </li>
              <li
                className={`blog-item ${toggle === 4 ? "active" : ""}`}
                onClick={() => Toggle(4)}
              >
                Interview
              </li>
              <li
                className={`blog-item ${toggle === 5 ? "active" : ""}`}
                onClick={() => Toggle(5)}
              >
                Tech
              </li>
              <li
                className={`blog-item ${toggle === 6 ? "active" : ""}`}
                onClick={() => Toggle(6)}
              >
                Travel
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

              <div className="row mt-5 mb-5">
                <div className="col-md-3">
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
                    <h6 className="text-[#aab3bc] mt-3">29 September 2016 </h6>
                    <p className="text-[#848892]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod...
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
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
                    <h6 className="text-[#aab3bc] mt-3">29 September 2016 </h6>
                    <p className="text-[#848892]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={toggle === 2 ? "show-content" : "content"}>
              <div className="row mt-5 mb-5">
                <div className="col-md-3">
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
                    <h6 className="text-[#aab3bc] mt-3">29 September 2016 </h6>
                    <p className="text-[#848892]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod...
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

            <div className={toggle === 4 ? "show-content" : "content"}>
              <div className="row mt-5 mb-5">
                <div className="col-md-3">
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
                    <h6 className="text-[#aab3bc] mt-3">29 September 2016 </h6>
                    <p className="text-[#848892]">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod...
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
