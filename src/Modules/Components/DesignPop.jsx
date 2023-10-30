import React from 'react';
import ContentBanner from "./contentImg/content-banner1.jpg";
import "./DesignPop.css";
import Navbar from '../../common/Navbar';

export default function DesignPop() {
  return (
    <>
    <div className="content-section1 position-relative">
      <div className='our-nav'>
        <Navbar/>
      </div>
        <img
          src={ContentBanner}
          alt="Content Banner"
          className="content-section-image"
        />

        <div className="position-absolute top-50 start-50 translate-middle  w-50">
          <h1 className="mt-5 text-white text-center">
          Design That Pops Out
          </h1>
        </div>
    </div>

    <div className='design-content-section'>
      <div className='container pt-5 pb-5'>
        <div className="row">
            <div className="col">
            <h2 className='text-[#3b6d6e] mb-0'>These Are The Services That We Provide</h2>
            <p className='text-[#848892] mt-4'>
            Let us simplify for connecting with some creative image additions. 
            Get your logo, brochure, or even your visiting card designed by our 
            experts. <br></br>Share your vision, and with some popping designs and 
            shiny shades, we will mold your dream design into reality. 
            </p>

            <div className='row mt-5'>
              <div className='col-md-3'>
              <ul className='pl-4'>
              <li className='design-list-section'>Resume</li>
              <li className='design-list-section'>Brochure</li>
              <li className='design-list-section'>Posts</li>
              <li className='design-list-section'>Photoshop</li>
              <li className='design-list-section'>Image editing</li>
            </ul>
              </div>

              <div className='col-md-3'>
              <ul className='pl-4'>
              <li className='design-list-section'>Collage services</li>
              <li className='design-list-section'>Photography</li>
              <li className='design-list-section'>Caricature & Cartoons </li>
              <li className='design-list-section'>Banner Design</li>
              <li className='design-list-section'>Tattoo Design</li>
              <li className='design-list-section'>Business Cards</li>
             </ul>
              </div>

             
            </div>
            </div>
        </div>
      </div>
    </div>

    <div className='container mt-5 mb-5'>
    <h3 className='text-center package-heading-line'>Make Your Contect Visible</h3>
    <div className="row mt-5 d-flex justify-content-center">
      <div className="col-md-3 mb-3">
        <div className='card package-card-section'>
         <div className='package-card-text'>
         <h5>Basic</h5>
         </div>
         <div className='text-center mt-3'>
          <sub className='card-package-sub'>$</sub>
          <span class="card-package-price">29</span>
          <span class="card-package-mark">Monthly</span>
         </div>
         <ul className='pl-0 mt-3'>
          <li className='card-package-list'>Fully Responsive</li>
          <li className='card-package-list1'>WooCommerce</li>
          <li className='card-package-list'>SEO optimized</li>
          <li className='card-package-list1'>Easy to use</li>
          <li className='card-package-list'>5-Star Support</li>
         </ul>
         <div className='mx-auto'>
         <button className='card-package-button'>Purchase</button>
         </div>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className='card package-card-section'>
         <div className='package-card-text'>
         <h5>Regular</h5>
         </div>
         <div className='text-center mt-3'>
          <sub className='card-package-sub'>$</sub>
          <span class="card-package-price">39</span>
          <span class="card-package-mark">Monthly</span>
         </div>
         <ul className='pl-0 mt-3'>
          <li className='card-package-list'>Fully Responsive</li>
          <li className='card-package-list1'>WooCommerce</li>
          <li className='card-package-list'>SEO optimized</li>
          <li className='card-package-list1'>Easy to use</li>
          <li className='card-package-list'>5-Star Support</li>
         </ul>
         <div className='mx-auto'>
         <button className='card-package-button'>Purchase</button>
         </div>
        </div>
      </div>

      <div className="col-md-3">
        <div className='card package-card-section'>
         <div className='package-card-text'>
         <h5>Basic</h5>
         </div>
         <div className='text-center mt-3'>
          <sub className='card-package-sub'>$</sub>
          <span class="card-package-price">69</span>
          <span class="card-package-mark">Premium</span>
         </div>
         <ul className='pl-0 mt-3'>
          <li className='card-package-list'>Fully Responsive</li>
          <li className='card-package-list1'>WooCommerce</li>
          <li className='card-package-list'>SEO optimized</li>
          <li className='card-package-list1'>Easy to use</li>
          <li className='card-package-list'>5-Star Support</li>
         </ul>
         <div className='mx-auto'>
         <button className='card-package-button'>Purchase</button>
         </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
