import React from 'react';
import ContentBanner from "./contentImg/content-banner1.jpg";
import "./ContentSpeak.css"
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ContentSpeak() {
  return (
   <>
    {/* <div className='content-section'>
      <img src={ContentBanner} alt="Content Banner" className="content-section-image" />
      <div className='content-section-text'>
       <h1 className='mt-5'>
       Content That Speaks For Itself
       </h1>
      </div>
    </div> */}

    <div className='about-bg-color'> 
    <Container>
      <Row className='pt-4 pb-4'>
        <Col md={6}>
          <h1 className='about-heading'>Content That Speaks For Itself</h1>
        </Col>
        <Col md={6}>
          <div className='d-flex justify-content-end align-items-center h-100'>
            <Link to="/" className="about-link"><span className='about-subheading'>Home</span></Link>
            <span className='about-subheading'>&nbsp;&gt;&nbsp;</span>
            <span className='about-subheading'>Content That Speaks For Itself</span>
          </div>
        </Col>
      </Row>
    </Container>
    </div>

    <div className='content-second-section'>
      <div className='container pt-5 pb-5'>
        <div className="row">
            <div className="col">
            <h2 className='text-[#3b6d6e] mb-0'>These Are The Services That We Provide</h2>
            <p className='text-[#848892] mt-4'>
             Creating engaging content that connects with the audience is key 
             to creating brand value. With the experts on board, get all your 
             content needs fulfilled.<br></br> We have your back at every level, from 
             blogs to website pages. 
            </p>

            <div className='row mt-5'>
              <div className='col-md-3'>
              <ul className='pl-4'>
              <li className='content-list-section'>Creative writing & Copywriting</li>
              <li className='content-list-section'>Editing</li>
              <li className='content-list-section'>Proofreading</li>
              <li className='content-list-section'>Product descriptions & Product reviews</li>
              <li className='content-list-section'>Quotes & Captions</li>
              <li className='content-list-section'>Academic essays</li>
              <li className='content-list-section'>Literature reviews & speeches</li>
              <li className='content-list-section'>Press release</li>
            </ul>
              </div>

              <div className='col-md-3'>
              <ul className='pl-4'>
              <li className='content-list-section'>News editorials</li>
              <li className='content-list-section'>Ghostwriting</li>
              <li className='content-list-section'>eBooks </li>
              <li className='content-list-section'>Legal Writing </li>
              <li className='content-list-section'>Financial Research </li>
              <li className='content-list-section'>Resumes</li>
              <li className='content-list-section'>Business Writing </li>
              <li className='content-list-section'>SEO Writing</li>
             </ul>
              </div>

              <div className='col-md-3'>
              <ul className='pl-4'>
              <li className='content-list-section'>Medical Writing </li>
              <li className='content-list-section'>Survey Research</li>
              <li className='content-list-section'>Fiction </li>
              <li className='content-list-section'>Wikipedia </li>
              <li className='content-list-section'>Script Writing</li>
              <li className='content-list-section'>Newsletters </li>
              <li className='content-list-section'>Short Stories </li>
              <li className='content-list-section'>Journalism </li>
            </ul>
              </div>

              <div className='col-md-3'>
              <ul className='pl-4'>
              <li className='content-list-section'>Cover Letter </li>
              <li className='content-list-section'>Podcast Writing </li>
              <li className='content-list-section'>Non-Fiction Writing </li>
              <li className='content-list-section'>Web Page Writer</li>
              <li className='content-list-section'>Book Review</li>
              <li className='content-list-section'>Environmental Science</li>
              <li className='content-list-section'>Manuscripts</li>
              <li className='content-list-section'>White Paper</li>
            </ul>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
   </>
  )
}
