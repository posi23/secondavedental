import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../images/Group 45.png";

const Navbar = () => {
      return (
            <>
                  <div className="row justify-content-center">
                        <div className="logo col-2 d-none d-sm-block text-start text-md-center mt-4">
                              <Link to="/">
                                    <img src={logo} alt="Clinic logo" className="img-fluid" />
                              </Link>

                        </div>
                  </div>

                  <nav id="header" className="navbar navbar-expand-lg navbar-light my-3 mx-4">
                        <div className="container">

                              <Link to="/" className="navbar-brand fs-1 text-white">
                                    Second Avenue Dental
                              </Link>



                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-expanded="false">
                                    <span className="navbar-toggler-icon"></span>
                              </button>

                              <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                                    <ul className="navbar-nav text-primary">
                                          <li className="nav-item me-3">
                                                <Link to="/" className="nav-link fs-5" active>
                                                      Home
                                                </Link>
                                          </li>

                                          <li className="nav-item me-3">
                                                <Link to="/services" className="nav-link fs-5">
                                                      Services
                                                </Link>
                                          </li>

                                          <li className="nav-item me-3">
                                                <Link to="/contact" className="nav-link fs-5">
                                                      Contact
                                                </Link>
                                          </li>

                                          <li className="nav-item me-3">
                                                <Link to="/faq" className="nav-link fs-5">
                                                      FAQ
                                                </Link>
                                          </li>

                                          <li className="nav-item me-3 d-lg-none">
                                                <Link to="/appointment" className="nav-link fs-5">
                                                      Book an Appointment
                                                </Link>
                                          </li>



                                          <li className="nav-item me-3 px-3 d-none d-lg-inline">
                                                <Link to="/appointment" className="btn btn-light rounded-pill shadow text-primary fs-5">
                                                      Book an Appointment
                                                </Link>
                                          </li>


                                    </ul>
                              </div>
                        </div>

                  </nav>
            </>
      );
}

export default Navbar;