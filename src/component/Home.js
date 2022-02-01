import React from 'react';
import "./home.css"
import img from "../images/img3.jpg"
import { MdDateRange} from "react-icons/md";

let iconStyles = { color:"#00004d",fontSize: "3.2em" };
export default function Home() {
  return( 
 <>
 <section id="header" className=' header d-flex align-items-center'>
<div className='container-fluid nav-bg'>
    <div className="row mt-1">
        <div className=' column col-12 mx-auto'>
            <div className='row'>
            <div className=' lorem col-md-6 pt-lg-0 order-2 order-lg-1 ' >
                  <div className='main'>
                  <h2 className='heading'>Lorem Ipsum</h2>
                  <h5 className='content'> Ut purus orci, placerat at odio eu, gravida sagittis est. 
                  Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sollicitudin et risus sit amet facilisis. Vestibulum auctor tempor tristique. Pellentesque non finibus ante, eu fermentum arcu. 
                  Curabitur congue justo vel elit dictum </h5>
                   <div className=' btn mt-3'>
                       <a href="#" className='button'>Know More</a>
                   </div>
                   </div>
            </div>
<div className='col-lg-6 col-md-6 order-1 order-lg-2 '>
  <div className='header-img'>
   {/* <img src={img}/> */}
   </div>
</div>
</div>

</div>
</div>
</div>
 </section>


<section className="card">
  <div className="container-fluid nav-bg"> 
    <div className="row">
      <div className="extra-div1 col-lg-4 col-md-4 col-12">
        <div className='quick-links'>
        <a href="#"> Quick Links</a>
       <a href="#">Lorem Ipsum</a>
       </div>
        <ul className='list'>
          <a href="#"className='list1'>Level 1 </a>
          <a href="#" className='list1'>Level 2 </a>
          </ul>
          <ul className='list'>
          <a href="#" className='list1'>Level 3 </a>
          <a  href="#" className='list1'>Enquiry </a>
          </ul>
         
        </div>
     <div className="extra-div2 col-lg-4 col-md-4 col-12">
     <div className='quick-links'>
        <a href="#"> Quick Links</a>
       <a href="#">Lorem Ipsum</a>
       </div>
        <ul className='list'>
          <a href="#"className='list1'>Level 1 </a>
          <a href="#" className='list1'>Level 2 </a>
          </ul>
          <ul className='list'>
          <a href="#" className='list1'>Level 3 </a>
          <a  href="#" className='list1'>Enquiry </a>
          </ul>
         
     </div>

<div className="extra-div3 col-lg-4 col-md-4 col-12">

<div className='quick-links'>
        <a href="#"> Quick Links</a>
       <a href="#">Lorem Ipsum</a>
       </div>
        <ul className='list'>
          <a href="#"className='list1'>Level 1 </a>
          <a href="#" className='list1'>Level 2 </a>
          </ul>
          <ul className='list'>
          <a href="#" className='list1'>Level 3 </a>
          <a  href="#" className='list1'>Enquiry </a>
          </ul>
         
</div>

</div>

</div> 

</section> 
{/* Examination part last section */}
<section>
  <div className=' cont container-fluid nav-bg'>
    <div className=' new row '>
       <div className='column1 col-lg-3 col-md-3 col-12'>
         <div className='exam'>
        <h4>Upcoming</h4>
        <h4>Examinations</h4>
        </div>
       </div>
       <div className='column1 col-lg-3 col-md-3 col-12'>
         <div className='date'>
        <MdDateRange style={iconStyles}/>
        </div>
        <div  className='level'>
       <h5>02 October 2014 </h5>
       <h6>Level 1</h6>
       </div>
       </div> 
      <div className='column1 col-lg-3 col-md-3 col-12'>
        <div className='date'>
        <MdDateRange style={iconStyles}/>
        </div>
        <div  className='level'>
        <h5>Nov-Dec 2016 </h5>
        <h6>Level 2</h6>
        </div>
     </div> 
      <div className='column1 col-lg-3 col-md-3 col-12'>
        <div className='date'>
      <MdDateRange style={iconStyles}/>
      </div>
      <div className='level'>
      <h5>Ongoing this year </h5>
      <h6>Level 3</h6>
      </div>
      </div>
    </div>
    </div>
</section>
  
  </>
  );
}

