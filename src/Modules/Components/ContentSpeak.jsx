import React from 'react';
import ContentBanner from "./contentImg/content-banner1.jpg";
import "./ContentSpeak.css"

export default function ContentSpeak() {
  return (
   <>
    <div className='content-section'>
      <img src={ContentBanner} alt="Content Banner" className="content-section-image" />
      <div className='content-section-text'>
       <h1 className='mt-5'>
       Content That Speaks For Itself
       </h1>
      </div>
    </div>

    <div className='content-second-section'>
      <h2 className='text-[#3b6d6e] mb-0'>These Are The Services That We Provide</h2>
    </div>
   </>
  )
}
