import React from 'react';
import Logo from "./Images/Logo.png";
import footer1 from './Images/footer1.jpg';
import footer2 from './Images/footer2.jpg';
import footer3 from './Images/footer3.jpg';
import footer4 from './Images/footer4.jpg';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './style.css';

export default function Footer1() {
  return (
    <>
    <div className='footer-background'>
    <div className='container-fluid'>
        <div className='row p-4 text-white'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
            <div>
              <img src={Logo}></img>
            </div>
            <p className="mt-3 mb-0">Ace Chronicle is all about creativity and innovation</p>
            <p className='mb-0'>an independent agency that took its shape with </p>
            <p className='mb-0'>a dream to help businesses and influencers</p>
            <p>reach the masses on digital platforms.</p>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
            <h4>Latest Post</h4>
            <ul className="p-0">
             <Link to="/blog" style={{ textDecoration: "none" }}>
             <li className="footer-list mt-5">
                <div className='footer-image'>
                 <img src={footer1}></img>
                </div>
                <div>
                  <h6 className="footer-heading">10 Tips for Traveling with friends</h6>
                  <span className="footer-subheading">September 29, 2016</span>
                </div>
              </li>
             </Link>

              <Link to="/blog" style={{ textDecoration: "none" }}>
              <li className="footer-list mt-5">
                <div className='footer-image'>
                 <img src={footer2}></img>
                </div>
                <div>
                  <h6 className="footer-heading">15 Signs you're in Love with UX Designs</h6>
                  <span className="footer-subheading">April 29, 2016</span>
                </div>
              </li>
              </Link>

              {/* <li className="footer-list mt-5">
                <div className='footer-image'>
                 <img src={footer3}></img>
                </div>
                <div>
                  <h6 className="footer-heading">About Bicycle Touring Pro</h6>
                  <span className="footer-subheading">September 29, 2016</span>
                </div>
              </li>
              <li className="footer-list mt-5">
                <div className='footer-image'>
                 <img src={footer4}></img>
                </div>
                <div>
                  <h6 className="footer-heading">Beautiful Products Pages</h6>
                  <span className="footer-subheading">October 6, 2016</span>
                </div>
              </li> */}
            </ul>
            </div>

            <div className='col-lg-2 col-md-6 col-sm-6'>
              <h4>Services Link</h4>
              <p className="mt-5 mb-0">
                <Link to="/" className='footer-linking'>Home</Link>
              </p>
              <p className="mt-2 mb-0">
                <Link to="/about" className='footer-linking'>About</Link>
              </p>
              <p className="mt-2 mb-0">
                <Link to="/career" className='footer-linking'>Career</Link>
              </p>
              <p className="mt-2 mb-0">
                <Link to="services" className='footer-linking'>Services</Link>
              </p>
              <p className="mt-2 mb-0">
                <Link to="/blog" className='footer-linking'>Blog</Link>
              </p>
              <p className="mt-1">
                <Link to="/contact" className='footer-linking'>Contact</Link>
              </p>
              
            </div>

            <div className='col-lg-2 col-md-6 col-sm-6'>
              <h4>Follow Us</h4>
             <div class="social-link mt-5">
             <Link to="#"><FontAwesomeIcon icon={faFacebook} className="social-icon"/></Link>
             <Link to="#"><FontAwesomeIcon icon={faInstagram} className="social-icon"/></Link>
             <Link to="#"><FontAwesomeIcon icon={faTwitter} className="social-icon"/></Link>
             <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="social-icon"/></Link>
            </div>
            </div>
        </div>
        
    </div>
    </div>
    </>
  )
}
