import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
   
    <ul >  
        
     <li > <Link to="/">Home</Link> </li>
      <li> <Link to="/about">About</Link> </li>
      <li> <Link to="/blog">Blog</Link> </li>
      <li> <Link to="/detailsblog">Blog Details</Link></li>
      <li> <Link to="/services">Services</Link> </li> 
      <li> <Link to="/career">Career</Link></li>
    

        
        </ul>
    </div>
  )
}

export default Navbar