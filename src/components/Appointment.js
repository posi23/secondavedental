import { Link } from "react-router-dom";
import map from "../images/map.png";
import Hospital from "./Hospital";
import { BsPhone, BsEnvelope } from "react-icons/bs";

const Appointment = () => {
      return (
            <div className="mt-5 p-5 row border-top border-dark">
                  <h3 className="fw-bold text-center">BOOK AN APPOINTMENT</h3>

                  <div className="d-md-flex justify-content-between mt-5">
                        <div>
                              <img src={map} alt="" className="w-100" />
                        </div>

                        <div className=" text-start align-self-center d-flex flex-column justify-content-between">
                              <div>
                                    <p className="lead fs-4 text-primary">Call us or Email us to book an appointment</p>
                              </div>

                              <br />

                              <div>
                                    <p className="fs-5">We are located us at Second Avenue in Downtown Saskatoon</p>
                              </div>

                              <br />

                              <div>
                                    <Hospital fontsize="fs-5" size="30" color="darkblue" />
                              </div>

                              <br />

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

                                          <div>

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