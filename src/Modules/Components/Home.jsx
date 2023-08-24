import React from 'react'


import Carousel from 'react-bootstrap/Carousel';
import image1 from './Images/Slider1.jpg';
import image2 from './Images/slider2.jpg';
import image3 from './Images/Slider3.jpg';


const Home = () => {
  return (

    //navbar 
<>




















    <Carousel>
    <Carousel.Item>
      <img src= {image1} alt ='my image' className='slider-img1'/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src= {image2} alt ='my image' className='slider-img1'/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src= {image3} alt ='my image' className='slider-img1'/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>
  )
}

export default Home