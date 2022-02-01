import React from 'react';
import reactDom from 'react-dom';
// import {Navlink} from "react-router-dom"
import  "./Navbar-top.css"


export default function Navbar () {
  return (
  <>
  <nav className='top-nav'>
  
  <div className='logo1'>
   <h2></h2>
  </div>
  <div className='link'>
    <ul>
        <li>
            <a href='#'>About Us</a>
        </li>
        <li>
            <a href='#'>Lorem Ipsum</a>
        </li> 
        <li>
            <a href='#'>Lorem Ipsum</a>
        </li> 
        <li>
            <a href='#'>Lorem Ipsum</a>
        </li> 
        <li>
            <a href='#'>News Room</a>
        </li> 
        <li>
            <a href='#'>Press Release</a>
        </li>
        <li>
            {/* <Navlink to="#">Privacy Policy</Navlink> */}
            <a href="#">Privacy Policy</a>
           
        </li> 
        <li>
            <a href='#'>Lorem Ipsum</a>
        </li> 
        <li>
            <a href='#'>Contact us</a>
        </li>
         
    </ul>
  </div>
  </nav>
  </>
  
  )
}
