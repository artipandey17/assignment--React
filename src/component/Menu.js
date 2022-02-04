import React from 'react';
import "./navbar.css"
import { FaSistrix} from "react-icons/fa";

let style1={color:"white",fontSize: "1.7em"}
export default function Menu() {
  return(
      <>
<nav className="nav-main">
  <div className='logo'>
      <h2>LOGO</h2>
  </div>
  <div className='link-menu'>
 <ul>
 <li className="nav-item dropdown">
   <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Organizations
    </a>
    </li>  
  <li className="nav-item dropdown">
   <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Qualifications
    </a>
    </li>   
  <li className="nav-item dropdown">
   <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Report Analysis
    </a>
    </li>  
  <li className="nav-item dropdown">
   <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Lorem Ipsum
    </a>
    </li> 
  <li className="nav-item dropdown">
   <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Lorem Ipsum
    </a>
    </li>  
  <li className="nav-item dropdown">
   <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Contact
    </a>
    </li>
 </ul>
  </div>
  <div className='search'>
   <FaSistrix style={style1}/>
   <div>
   <a href="#" className='button1'>Enrollment</a>
   </div>
  </div>


</nav>
      </>
  )
}
