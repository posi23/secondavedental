import { Link } from "react-router-dom";
import picture1 from "../images/home picture 2.jpeg"
import picture2 from "../images/home picture 3.jpeg"
import img1 from "../images/carousel img 2.jpeg"
import img2 from "../images/carousel img 3.jpeg"
import img3 from "../images/carousel img 1.jpeg"
import { FaCalendarAlt } from "react-icons/fa";

const Home = () => {
      return (
            <div className="">

                  <div className="container-fluid bg-secondary py-5 mb-5">

                        {/* <div className="container max-height d-flex align-items-center"> */}
                        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">

                              <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

                                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-current="true" aria-label="Slide 2"></button>

                                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-current="true" aria-label="Slide 3"></button>
                              </div>

                              <div className="carousel-inner">
                                    <div className="carousel-item active text-center" style={{ height: "500px" }}>

                                          <img src={img1} alt="" className="d-block d-lg-none" width="100%" style={{ height: "500px" }} />

                                          <img src={img1} alt="" className="d-none d-lg-block mx-auto" width="70%" style={{}} />

                                          <div className="carousel-caption d-block d-lg-none">
                                                <h2 className="text-dark fw-bold">Welcome to Second Avenue Dental</h2>
                                                <p className="fs-5">Dive into the world of the best oral-care clinic</p>
                                          </div>

                                          <div className="carousel-caption d-none d-lg-block w-50 mx-auto">
                                                <h2 className="text-dark fw-bold">Welcome to Second Avenue Dental</h2>
                                                <p className="fs-5">Dive into the world of the best oral-care clinic</p>
                                          </div>
                                    </div>

                                    <div className="carousel-item text-center" style={{ height: "500px" }}>

                                          <img src={img2} alt="" className="d-block d-lg-none" width="100%" style={{ height: "500px" }} />

                                          <img src={img2} alt="" className="d-none d-lg-block mx-auto" width="50%" style={{}} />

                                          <div className="carousel-caption d-block d-lg-none">

                                                <p className="visually-hidden fs-5">With our team of dentists being no. 1</p>
                                                <p className="fs-5 fw-bold">We offer variety of dental services and deliver with top notch quality</p>
                                          </div>

                                          <div className="carousel-caption text-light d-none d-lg-block w-50 mx-auto">

                                                <p className="visually-hidden fs-5">With our team of dentists being no. 1</p>
                                                <p className="fs-5 fw-bold">We offer variety of dental services and deliver with top notch quality</p>
                                          </div>
                                    </div>

                                    <div className="carousel-item text-center" style={{ height: "500px" }}>

                                          <img src={img3} alt="" className="d-block d-lg-none" width="100%" style={{ height: "500px" }} />

                                          <img src={img3} alt="" className="d-none d-lg-block mx-auto" width="50%" style={{}} />

                                          <div className="carousel-caption d-block d-lg-none text-center">
                                                <span className="text-white-50 fs-5 fw-bold mb-0">Come on down to Second Avenue Dental</span>
                                                <br />
                                                <Link to="/appointment" className="text-decoration-none fs-6 mt-0">
                                                      <button className="btn btn-light rounded-pill shadow text-primary fw-bold p-2">
                                                            <FaCalendarAlt color="grey" /> BOOK AN APPOINTMENT WITH US NOW
                                                      </button>
                                                </Link>
                                          </div>

                                          <div className="carousel-caption d-none d-lg-block w-50 mx-auto text-end">
                                                <span className="text-white-50 fs-5 fw-bold mb-0">Come on down to Second Avenue Dental</span>
                                                <br />
                                                <Link to="/appointment" className="text-decoration-none fs-6 mt-0">
                                                      <button className="btn btn-light rounded-pill shadow text-primary fw-bold p-2">
                                                            <FaCalendarAlt color="grey" /> BOOK AN APPOINTMENT WITH US NOW
                                                      </button>
                                                </Link>
                                          </div>
                                    </div>
                              </div>

                              <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                    <span className="visually-hidden">Previous</span>
                              </button>

                              <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon">
                                          <span className="visually-hidden">Next</span>
                                    </span>
                              </button>
                        </div>
                        {/* </div> */}

                        <div className="d-md-flex mt-5 justify-content-center">
                              {/* <div className="w-auto"> */}
                              <img src={picture2} alt="teeth" style={{ width: "45%" }} />
                              {/* </div> */}

                              {/* <div className="w-auto"> */}
                              <img src={picture1} alt="dental office" style={{ width: "45%" }} />
                              {/* </div> */}
                        </div>

                  </div>

                  <div className="text-end">

                        <Link to="/appointment" className="text-decoration-none fs-5 me-5">
                              <button className="btn btn-dark rounded-pill shadow text-light fw-bold p-2">
                                    <FaCalendarAlt color="grey" /> BOOK AN APPOINTMENT WITH US NOW
                              </button>
                        </Link>

                  </div>

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <div className="mt-5 p-5 pb-0">
                        <h3 className="text-muted fw-bold text-md-center">
                              ABOUT US
                        </h3>
                        <p className="text-light text-md-center text-align-center fs-5">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum vitae ratione nemo ut tempora eum voluptates maxime perspiciatis aliquam facere, a fuga magnam iure dicta aperiam optio unde deserunt consectetur ad accusantium et reprehenderit. Nulla numquam voluptatem nihil optio atque, impedit explicabo cupiditate libero consequatur exercitationem porro quibusdam alias facilis aspernatur excepturi voluptates corrupti odio, officiis sequi reiciendis nam culpa! Dicta recusandae officiis accusamus. Officia cum facere repellendus iste recusandae.
                        </p>
                  </div>

            </div>
      );
}

export default Home;