import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Blog.css';
import BeautyImg from './BlogImgs/beauty-blog-img1.jpg';
import BeautyImg1 from './BlogImgs/beauty-blog-img2.jpg';
import BeautyImg2 from './BlogImgs/beauty-blog-img3.jpg';
import ShopFurniture from './BlogImgs/shop-furniture-6.jpg';
import ShopFurniture1 from './BlogImgs/shop-furniture-5.jpg';
import ShopFurniture2 from './BlogImgs/shop-furniture-4.jpg';
import ShopFurniture3 from './BlogImgs/shop-furniture-3.jpg';
import ShopFurniture4 from './BlogImgs/shop-furniture-2.jpg';
import ShopFurniture5 from './BlogImgs/shop-furniture-1.jpg';
import ShopBlog from './BlogImgs/blog-img-1.jpg';
import footer1 from './BlogImgs/footer1.jpg';
import footer2 from './BlogImgs/footer2.jpg';
import footer3 from './BlogImgs/footer3.jpg';
import footer4 from './BlogImgs/footer4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faPinterestP, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Blog = () => {
  return (
    <>
    <div className='blog-bg-color'>
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
    </div>
    </>
  )
}

export default Blog