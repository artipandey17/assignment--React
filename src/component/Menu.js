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
  <li>
  <a href='#'>Organizations</a>
  </li> 
  <li>
  <a href='#'>Qualifications</a>
  </li>  <li>
  <a href='#'>Report Analysis</a>
  </li>  <li>
  <a href='#'>Lorem Ipsum</a>
  </li>  <li>
  <a href='#'>Lorem Ipsum</a>
  </li>  <li>
  <a href='#'>Contact</a>
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
