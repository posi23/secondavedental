import Details from "./Details";
import Hospital from "./Hospital";
import SocialMedia from "./SocialMedia";
import map from "../images/map.png"
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import Submit from "./Submit";
import picture1 from "../images/smile pic 1.jpeg";

const Contact = () => {
      return (
            <div className="mt-5 p-5 row border-top border-dark">
                  <div className="col-md-8">
                        <p className="lead fs-4 fw-bold-text-light">CONTACT US AT...</p>
                        <br />
                        <Details fontsize="fs-5" size="35" color="black" />

                        <br />

                        <SocialMedia fontsize="fs-4" size="35" color="black" />

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />


                        <div className="">
                              <form>
                                    <p className="lead fs-5 fw-bold text-danger">Contact Us form</p>
                                    <p>
                                          <label htmlFor="name">Full Name</label>
                                          <br />
                                          <input type="text" className="bg-secondary text-light" id="name" />
                                    </p>
                                    <p>
                                          <label htmlFor="email">Email Address</label>
                                          <br />
                                          <input type="email" className="bg-secondary text-light" id="email" />
                                    </p>
                                    <p>
                                          <label htmlFor="phoneNo">Phone Number</label>
                                          <br />
                                          <input type="number" className="bg-secondary text-light" id="phoneNo" />
                                    </p>
                                    <p>
                                          <label htmlFor="callTime">Best time to reach you?</label>
                                          <br />
                                          <input type="text" className="bg-secondary text-light" id="callTime" />
                                    </p>
                                    <p>
                                          <label htmlFor="msg">Enter your message</label>
                                          <br />
                                          <textarea rows="5" cols="30" className="bg-secondary text-light" id="msg"></textarea>
                                    </p>

                                    <Submit feedbackMsg="Thank you! We will be in touch!" width="w-50" />
                              </form>
                        </div>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <Link to="/appointment" className="text-decoration-none fs-5 me-3">
                              <button className="btn btn-dark rounded-pill shadow text-light fw-bold p-2">
                                    <FaCalendarAlt color="grey" /> BOOK AN APPOINTMENT WITH US NOW
                              </button>
                        </Link>

                  </div>

                  <div className="col-md-4">
                        <p className="lead fs-4 fw-bold-text-light">VISIT US AT...</p>

                        <Hospital fontsize="fs-5" size="35" color="black" />
                        <br />
                        <img src={map} alt="" className="img-fluid" />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <div className="w-75"></div>
                        <img src={picture1} alt="" className="img-fluid" />

                        <br />

                        <p className="lead text-light fs-4 text-center fw-bold">We value your smile... so give us a call soon.
                        </p>
                  </div>
            </div>
      );
}

export default Contact;