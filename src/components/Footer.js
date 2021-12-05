import { Link } from "react-router-dom";
import logo from "../images/Group 45.png";
import map from "../images/map.png"
import Details from "./Details";
import Hospital from "./Hospital";
import Image from "./Image"
import SocialMedia from "./SocialMedia";
//import { useState } from "react";
import Submit from "./Submit";


const Footer = () => {

      var style = {
            backgroundColor: "#D4AAD8"
      }

      return (
            <div className="mt-5" style={style}>
                  <div className="p-3 p-lg-0">
                        <div className="row">
                              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0 ps-5 p-3">
                                    <Link to="/" className="text-decoration-none">
                                          <img src={logo} alt="logo" className="img-fluid" />
                                          <p className="lead text-dark text-lg-center">Second Avenue Dental</p>
                                    </Link>

                              </div>
                              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                                    <Link to="/services" className="text-light text-decoration-none">
                                          <p className="lead">SERVICES</p>
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <p>Lorem ipsum dolor sit amet.</p>

                                    <br />

                                    <SocialMedia size="30" />
                              </div>
                              <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                                    <Link to="/contact" className="text-light text-decoration-none">
                                          <p className="lead">CONNECT WITH US</p>
                                    </Link>

                                    <Details fontsize="fs-6" size="20" />

                                    <Hospital fontsize="fs-6" size="20" />



                              </div>
                              <div className="col-12 col-md-6 col-lg-2">
                                    <p className="lead">ENQUIRE MORE</p>
                                    <form>
                                          <p>
                                                <input type="text" placeholder="Full Name" />
                                          </p>
                                          <p>
                                                <input type="text" placeholder="Email Address" />
                                          </p>
                                          <p>
                                                <textarea placeholder="Enter your message"></textarea>
                                          </p>

                                          <Submit feedbackMsg="Enquiry submitted" />
                                    </form>

                              </div>
                        </div>

                        <p className="lead text-center mt-5 mb-0">Copyright 2021 &copy; 2nd Avenue Dental</p>
                  </div>
            </div>
      );
}

export default Footer;