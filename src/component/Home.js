import React from 'react';
import "./home.css"

import img from "../images/cal2.jpg"
import phone from "../images/phone.jpg"
import web from "../images/img4.jpg";
import work from "../images/work.jpg"
import new1 from "../images/img9.jpg"
import new2 from "../images/img10.jpg"

import { MdDateRange } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai"
import { ImFacebook, ImInstagram } from "react-icons/im";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaQuora } from "react-icons/fa";
import { ImLocation } from "react-icons/im"
import { BiTime } from "react-icons/bi"
import { FaTrain } from "react-icons/fa"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import { BsFillArrowRightSquareFill } from "react-icons/bs"
import { BsFillArrowLeftSquareFill } from "react-icons/bs"

let iconStyles = { color: "#00004d", fontSize: "4em" };
let plus = { color: "#00004d", fontSize: "2.5em", display: "grid" };
let f = { color: "white", fontSize: "2em" }
let i = { color: "white", fontSize: "2em" }
let l = { color: "white", fontSize: "2em" }
let y = { color: "white", fontSize: "2em" }
let t = { color: "white", fontSize: "2em" }
let q = { color: "white", fontSize: "2em" }
let lo = { color: "white", fontSize: "1.5em" }
let c = { color: "white", fontSize: "1.5em" }
let tr = { color: "white", fontSize: "1.5em" }
let icon = { color: "white", fontSize: "1.5em" }
let a = { fontSize: "2em" }
let a1 = { fontSize: "2em" }
export default function Home() {

  return (
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
                      <a href="#" className='button4'>Know More  <IoIosArrowDroprightCircle style={icon} /></a>

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
                <a href="#" className='list1'>Level 1 </a>
                <a href="#" className='list1'>Level 2 </a>
              </ul>
              <ul className='list'>
                <a href="#" className='list1'>Level 3 </a>
                <a href="#" className='list1'>Enquiry </a>
              </ul>

            </div>
            <div className="extra-div2 col-lg-4 col-md-4 col-12">
              <div className='quick-links'>
                <a href="#"> Quick Links</a>
                <a href="#">Lorem Ipsum</a>
              </div>
              <ul className='list'>
                <a href="#" className='list1'>Level 1 </a>
                <a href="#" className='list1'>Level 2 </a>
              </ul>
              <ul className='list'>
                <a href="#" className='list1'>Level 3 </a>
                <a href="#" className='list1'>Enquiry </a>
              </ul>

            </div>

            <div className="extra-div3 col-lg-4 col-md-4 col-12">

              <div className='quick-links'>
                <a href="#"> Quick Links</a>
                <a href="#">Lorem Ipsum</a>
              </div>
              <ul className='list'>
                <a href="#" className='list1'>Level 1 </a>
                <a href="#" className='list1'>Level 2 </a>
              </ul>
              <ul className='list'>
                <a href="#" className='list1'>Level 3 </a>
                <a href="#" className='list1'>Enquiry </a>
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
                <MdDateRange style={iconStyles} />
              </div>
              <div className='level'>
                <h5>02 October 2014 </h5>
                <h6>Level 1</h6>
              </div>
            </div>
            <div className='column1 col-lg-3 col-md-3 col-12'>
              <div className='date'>
                <MdDateRange style={iconStyles} />
              </div>
              <div className='level'>
                <h5>Nov-Dec 2016 </h5>
                <h6>Level 2</h6>
              </div>
            </div>
            <div className='column1 col-lg-3 col-md-3 col-12'>
              <div className='date'>
                <MdDateRange style={iconStyles} />
              </div>
              <div className='level'>
                <h5>Ongoing this year </h5>
                <h6>Level 3</h6>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* section 4 starts here */}
      <section className="section4" >
        <div className=" container-fluid nav-bg">
          <div className="row">

            <div className="col-lg-3 col-md-3 col-12">
              <div className="card1 ">
                <div className="card-body">
                  <h4>Lorem Ipsum</h4>
                  <p className="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                  <a href="#" className="button3">Know More</a>
                  <IoIosArrowDroprightCircle style={icon} />

                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="card1">

                <div className="card-body">
                  <h4>Lorem Ipsum</h4>
                  <p className="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className='button3'>Know More</a>
                  <IoIosArrowDroprightCircle style={icon} />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <div className="card1 ">
                <div className="card-body">
                  <h4>Lorem Ipsum</h4>
                  <p className="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="button3">Know More</a>
                  <IoIosArrowDroprightCircle style={icon} />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-12">
              <div className="card1 ">
                <div className="card-body">
                  <h4>Lorem Ipsum</h4>
                  <p className="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="button3">Know More</a>
                  <IoIosArrowDroprightCircle style={icon} />
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* section 5 starts */}

      <section className='section5'>
        <div className="section-5 container-fluid nav-bg">
          <div className="row">

            <div className="col-lg-3 col-md-3 col-12">

              <h5>Lorem Ipsum</h5>

              <div className="number">
                <h1 >2500</h1>
                <AiOutlinePlus style={plus} />
              </div>
              <div className='p-1'>
                <h5 className='section-51'>Lorem Ipsum</h5>
                <p>There are many variations of passages of Lorem Ipsum available
                  There are many variations of passages of Lorem Ipsum available
                </p>

              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className='p-1 section-5'>
                <h5>Lorem Ipsum</h5>
                <div className="number">
                  <h1 >12</h1>
                  <AiOutlinePlus style={plus} />
                </div>
                <h5 className='section-51'>Lorem Ipsum</h5>
                <p>There are many variations of passages of Lorem Ipsum available
                  There are many variations of passages of Lorem Ipsum available
                </p>
              </div>
            </div><div className="col-lg-3 col-md-3 col-12">
              <div className='p-1'>
                <h5>Lorem Ipsum</h5>
                <div className="number">
                  <h1 >12</h1>
                  <AiOutlinePlus style={plus} />
                </div>
                <h5 className='section-51'>Lorem Ipsum</h5>
                <p>There are many variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className='p-1'>
                <h5>Lorem Ipsum</h5>
                <h1 className="count">123</h1>
                <h5 className='section-51'>Lorem Ipsum</h5>
                <p>There are many variations of passages of Lorem Ipsum available</p>
              </div>
            </div>
          </div>
        </div>
        <section className='section'>
          <div className=" passage1 container-fluid nav-bg ">
            <div className="row passage">
              <div className="col-lg-4 col-md-4 col-12">
                <div>
                  <p className='passage-para'>December 16 2021</p>
                </div>
                <div className='passage2'>
                  <h6>Lorem Ipsum  </h6>
                  <h6>passages of</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div>
                  <p className='passage-para'>December 16 2021</p>
                </div>
                <div className='passage2'>
                  <h6>Lorem Ipsum  </h6>
                  <h6>passages of</h6>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-12">

                <div>
                  <p className='passage-para'>December 16 2021</p>
                </div>
                <div className='passage2'>
                  <h6>Lorem Ipsum  </h6>
                  <h6>passages of</h6>
                </div>

              </div>
            </div>
          </div>
        </section>
      </section>
      {/* section 6 starts here */}
      <section className='section-6'>
        <div className=" container-fluid nav-bg ">
          <div className="row ">
            <div className="col-lg-4 col-md-4 col-12 ">
              <div className="container image">
                <img src={web} className="card-img-top" alt="..." />
                <div class="card-body">
                  <div className='p-1'>
                    <p className="card-text">There are many variations of passages of Lorem Ipsum available
                      There are many variations of  </p>
                  </div>
                  <a href="#" className='img-btn'>Know More</a>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-4 col-12 cols-img">
              <div className="container-fluid nav-bg image">
                <img src={new1} className="card-img-top" alt="..." />
                <div class="card-body">
                  <div className='p-1'>
                    <p className="card-text">There are many variations of passages of Lorem Ipsum available
                      There are many variations of </p>
                  </div>
                  <a href="#" className='img-btn'>Know More</a>
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-4 col-12 cols-img">

              <div className="container image">
                <img src={new2} className="card-img-top" alt="..." />
                <div class="card-body">
                  <div className='p-1'>
                    <p className="card-text">There are many variations of passages of Lorem Ipsum available
                      There are many variations  </p>
                  </div>
                  <a href="#" className='mt-1 img-btn'>Know More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 7 starts here */}
      <section className='section-7'>
        <div className='container-fluid nav-bg'>
          <div className='row mt-1'>
            <div className=' col-12 mx-auto'>
              <div className='row'>
                <div className=' col-md-6 pt-lg-0 order-2 order-lg-1 ' >
                  <h3 className='ml-2 mb-1'>Lorem Ipsum</h3>
                  <div className='container-7 mt-3 pb-2'>
                    <div className='column-col '>
                      <div className='para m-2'>
                        <img src={web} className="card-img-top-1 mt-4" alt="..." />
                        <div className='p-3 pb-0'>
                          <h5 className='sec'>Lorem Ipsum</h5>
                          <p>There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour,
                            or randomised words which don't look even slightly believable.
                            There are many variations of passages of Lorem Ipsum available</p>
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                    <div className='column-col'>
                      <div className='para'>
                        <img src={work} className="card-img-top-1" alt="..." />
                        <div className='p-3 '>
                          <h5 className='sec'>Hiring this Month</h5>
                          <div className=' column hiring '>
                            <h2 className='m-3 pl-4'>Barcaleys</h2>
                            <h2 className='m-3'>Deloitte.</h2>
                          </div>

                        </div>
                      </div>
                    </div>
                    <hr></hr>
                    <div className='column-col'>
                      <div className='para'>
                        <img src={web} className="card-img-top-1" alt="..." />
                        <div className='p-3 ' >
                          <h5 className='sec'>Video of the Month</h5>
                          <p>There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour,
                           
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className='  col-md-6 pt-lg-0 order-2 order-lg-1 ' >

                  <h3 className='ml-2 mb-1 col-md-8'>Lorem Ipsum</h3>

                   <div>

                   </div>
                  <div className='container-7 mt-3 pb-1'>
                    <div className='column-col '>
                      <div className='para m-2 mb-3'>
                        <img src={img} className="card-img-top-1 mt-4" alt="..." />
                        <div className='p-3 pb-0'>
                          <h5 className='sec'>Lorem Ipsum</h5>
                          <p>There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected humour,
                            or randomised words which don't look even slightly believable.
                            There are many variations of passages of Lorem Ipsum available</p>
                          <div className='register'>
                            <p className='time'>07.00-10.00 (March 20,2021)</p>
                            <a href="#" className='time1' ><u>Register now</u></a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className='container-7 mt-3 pb-1'>
                    <div className='column-col '>
                      <div className='para m-2'>
                        <img src={img} className="card-img-top-1 mt-4" alt="..." />
                        <div className='p-3 pb-0'>
                          <h5 className='sec'>Lorem Ipsum</h5>
                          <p>Nor is there anyone who loves or pursues or desires to obtain pain of itself,
                            because it is pain, but occasionally circumstances occur
                            in which toil and pain can procure him some great pleasure</p>
                          <div className='register'>
                            <p className='time'>07.00-10.00 (March 20,2021)</p>
                            <a href="#" className='time1' ><u>Register now</u></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section-8'>
        <div className='container-fluid nav-bg'>
          <div className='row mt-1'>
            <div className=' col-12 mx-auto'>
              <div className='row'>
                <div className=' col-md-6 pt-lg-0 order-2 order-lg-1 ' >
                  <div className='subscribe'>
                    <h2>Subscribe</h2>
                    <p>There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form, by injected humour</p>
                    <div className='text-main'>
                      <input type="text" className='col-md-8 textbox' placeholder=" Enter Your Email Address" />
                      <a href="#" className='button3'> Subscribe Now  <IoIosArrowDroprightCircle style={icon} /></a>
                    </div>
                  </div>

                </div>

                <div className=' col-md-6 pt-lg-0 order-2 order-lg-1 ' >
                  <div className='phone-img'>
                    <img className='phone img-fluid' src={phone} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='footer container-fluid nav-bg'>
          <div className='row'>
            <div className="col-lg-4 col-md-4 col-12  footer-cols">
              <h4>Contact Us</h4>
              <p className='contact-para'>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form</p>
              <p className='contact-para'>phone no 235656578</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12 footer-cols">
              <h4>Follow Us</h4>
              <div className='footer-social-media'>
                <div>
                  <ImFacebook style={f} />
                </div>
                <div>
                  <BsInstagram style={i} />
                </div>
                <div>
                  <BsLinkedin style={l} />
                </div>
                <div>
                  <BsTwitter style={t} />
                </div>
                <div>
                  <FaQuora style={q} />
                </div>
                <div>
                  <AiFillYoutube style={y} />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mb-2 footer-cols">
              <h4>Head Office</h4>
              <div>
                <div className='head-office'>
                  <ImLocation style={lo} />
                  <p >There are many variations of passages of Lorem Ipsum available</p>
                </div>
                <div className='head-office'>
                  <BiTime style={c} />
                  <p>There are many variations of passages of Lorem Ipsum available</p>
                </div>
                <div className='head-office'>
                  <BiTime style={c} />
                  <p>There are many variations of passages of Lorem Ipsum available</p>
                </div>
                <div className='head-office'>
                  <FaTrain style={tr} />
                  <p>There are many variations of passages of Lorem Ipsum available</p>
                </div>

              </div>
            </div>


          </div>

        </div>
        <p className="last-foot text-center">
          Copyright @2021 All rights reserved | Privacy Policy
        </p>
      </section>
    </>
  );
}

