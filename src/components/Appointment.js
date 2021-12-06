import { Link } from "react-router-dom";
import map from "../images/map.png";
import Hospital from "./Hospital";
import { BsPhone, BsEnvelope } from "react-icons/bs";
import TimeSelect from "./TimeSelect";
import { useState } from "react";
import Submit from "./Submit";



const Appointment = () => {

      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [msg, setMsg] = useState("");
      const [patient, setPatient] = useState(false);

      return (
            <div className="mt-5 p-5 row border-top border-dark">
                  <h3 className="fw-bold text-center">BOOK AN APPOINTMENT</h3>

                  <div className="d-md-flex justify-content-between mt-5">
                        <div>
                              <div>
                                    <img src={map} alt="" className="w-100" />
                              </div>

                              <div className="mt-5">
                                    <form>
                                          <p>
                                                <label htmlFor="name" className="text-dark" >Full Name</label>
                                                <br />
                                                <input type="text" className="text-dark w-75" id="name" style={{ backgroundColor: "rgb(237, 225, 225)" }} required value={name} onChange={(e) => setName(e.target.value)}
                                                />
                                          </p>
                                          <p>
                                                <label htmlFor="email" className="text-dark" >Email Address</label>
                                                <br />
                                                <input type="email" className="text-dark w-75" id="email" style={{ backgroundColor: "rgb(237, 225, 225)" }} required value={email} onChange={(e) => setEmail(e.target.value)} />
                                          </p>
                                          <p>
                                                <label htmlFor="phoneNo" className="text-dark">Phone Number</label>
                                                <br />
                                                <input type="tel" className="text-dark w-75" id="phoneNo" style={{ backgroundColor: "rgb(237, 225, 225)" }} required value={phone} onChange={(e) => setPhone(e.target.value)} />
                                          </p>
                                          <p>
                                                <label htmlFor="time" className="text-dark">Choose a time</label>
                                                <br />
                                                <TimeSelect />
                                          </p>

                                          <p>
                                                <label htmlFor="patient" className="text-dark">New or Existing Patient</label>
                                                <br />
                                                <select id="patient" className="text-dark w-75" style={{ backgroundColor: "rgb(237, 225, 225)" }} value={patient} onChange={(e) => setPatient(e.target.value)}>
                                                      <option value={false}>New Patient</option>
                                                      <option value={true}>Existing Patient</option>
                                                </select>
                                          </p>
                                          <p>
                                                <label htmlFor="msg" className="text-dark">Reason for visit</label>
                                                <br />
                                                <textarea rows="5" cols="20" className="text-dark w-75" id="msg" style={{ backgroundColor: "rgb(237, 225, 225)" }} value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
                                          </p>

                                          <Submit feedbackMsg="Great! A confirmation email will be sent to your email!" width="w-75" />
                                    </form>

                              </div>

                        </div>

                        <div className=" text-start d-flex flex-column justify-content-evenly mt-5 mt-md-0">
                              <div>
                                    <span>
                                          <p className="lead fs-4 fw-bold">Want to know more? </p>
                                          <p className="fs-5">
                                                Visit our <Link to="/faq" className="text-dark text-decoration-none fw-bold"> FAQ page</Link>
                                          </p>
                                    </span>

                              </div>


                              <div>
                                    <p className="lead fs-4 text-primary">Call us or Email us to book an appointment</p>
                                    <div>
                                          <p className="fs-5">We are located us at Second Avenue in Downtown Saskatoon</p>
                                    </div>
                                    <div>
                                          <Hospital fontsize="fs-5" size="30" color="darkblue" />
                                    </div>
                              </div>


                              <div>
                                    <div className="d-md-flex justify-content-between">
                                          <div>
                                                <span className="lead fs-4">Phone</span>
                                                <br />
                                                <br />
                                                <span className="fs-5 text-black-50">(123) 456-789</span>

                                                <br />
                                                <br />


                                                <a href="tel:123456789">
                                                      <button className="btn btn-primary rounded-pill shadow fs-5">CALL US <BsPhone /> </button>
                                                </a>
                                          </div>

                                          <div className="mt-5 mt-md-0">

                                                <span className="lead fs-4">Email</span>
                                                <br />
                                                <br />
                                                <span className="fs-5 text-black-50">posi@secondavedental.com</span>

                                                <br />
                                                <br />

                                                <a href="mailto:posi@secondavedental.com">
                                                      <button className="btn btn-primary rounded-pill shadow fs-5">EMAIL US <BsEnvelope /> </button>
                                                </a>

                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>

            </div>
      );
}

export default Appointment;