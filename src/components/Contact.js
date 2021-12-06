import Details from "./Details";
import Hospital from "./Hospital";
import SocialMedia from "./SocialMedia";
import map from "../images/map.png"
import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import Submit from "./Submit";
import { useState } from "react";
import picture1 from "../images/smile pic 1.jpeg";

const Contact = () => {


      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [msg, setMsg] = useState("");
      const [time, setTime] = useState("");


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
                                    <p className="lead fs-4 fw-bold text-danger">Send us a message!</p>
                                    <p className="lead fs-5 text-danger">We will reply within 24 hours.</p>
                                    <p>
                                          <label htmlFor="name">Full Name</label>
                                          <br />
                                          <input type="text" className="text-dark w-50" id="name" style={{ backgroundColor: "rgb(237, 225, 225)" }} required value={name} onChange={(e) => setName(e.target.value)} />
                                    </p>
                                    <p>
                                          <label htmlFor="email">Email Address</label>
                                          <br />
                                          <input type="email" className="text-dark w-50" id="email" style={{ backgroundColor: "rgb(237, 225, 225)" }} required value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </p>
                                    <p>
                                          <label htmlFor="phoneNo">Phone Number</label>
                                          <br />
                                          <input type="tel" className="text-dark w-50" id="phoneNo" style={{ backgroundColor: "rgb(237, 225, 225)" }} required value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </p>
                                    <p>
                                          <label htmlFor="callTime">Best time to reach you?</label>
                                          <br />
                                          <input type="text" className="text-dark w-50" id="callTime" style={{ backgroundColor: "rgb(237, 225, 225)" }} required value={time} onChange={(e) => setTime(e.target.value)} />
                                    </p>
                                    <p>
                                          <label htmlFor="msg">Enter your message</label>
                                          <br />
                                          <textarea rows="10" cols="20" className="text-dark w-50" id="msg" style={{ backgroundColor: "rgb(237, 225, 225)" }} required value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
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

                  <div className="col-md-4 mt-5 mt-md-0">
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