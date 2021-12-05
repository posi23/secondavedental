import picture1 from "../images/services picture 1.jpeg"
import picture2 from "../images/services picture 2.jpeg"
import picture3 from "../images/home picture 1.png"
import { Link } from "react-router-dom"
import { FaCalendarAlt } from "react-icons/fa"


const Services = () => {
      return (
            <>
                  <div className="d-md-flex my-5 justify-content-center bg-secondary py-5">
                        {/* <div className="w-auto"> */}
                        <img src={picture1} alt="boy & doctor" style={{ width: "45%" }} />
                        {/* </div> */}

                        {/* <div className="w-auto"> */}
                        <img src={picture2} alt="person holding teeth and wand" style={{ width: "45%" }} />
                        {/* </div> */}
                  </div>

                  <div className="d-md-flex justify-content-between mx-5">

                        <div id="serviceList">
                              <p className="lead fs-4 fw-bold text-light">OUR SERVICES</p>
                              <ul className="fw-bold fs-5">
                                    <li>Lorem, ipsum dolor.</li>
                                    <br />
                                    <li>Lorem, ipsum dolor.</li>
                                    <br />
                                    <li>Lorem, ipsum dolor.</li>
                                    <br />
                                    <li>Lorem, ipsum dolor.</li>
                                    <br />
                                    <li>Lorem, ipsum dolor.</li>
                                    <br />
                                    <li>Lorem, ipsum dolor.</li>
                                    <br />
                                    <li>Lorem, ipsum dolor.</li>
                                    <br />
                                    <li>Lorem, ipsum dolor.</li>

                              </ul>
                        </div>

                        <div className="d-flex flex-column justify-content-between">

                              <div className="align-self-end">
                                    <p className="lead text-light fs-4 text-center fw-bold">We will take good care of your teeth... <br />
                                          so come visit us as soon you can</p>
                              </div>

                              <div className="align-self-end w-50">
                                    <img src={picture3} alt="" className="w-100" />
                              </div>

                              <div className="align-self-end">
                                    <Link to="/appointment" className="text-decoration-none fs-4">
                                          <button className="btn btn-dark rounded-pill shadow text-light fw-bold p-2">
                                                <FaCalendarAlt color="grey" /> BOOK AN APPOINTMENT WITH US NOW
                                          </button>
                                    </Link>

                              </div>
                        </div>
                  </div>

            </>
      );
}

export default Services;