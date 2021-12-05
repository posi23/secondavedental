import { Link } from "react-router-dom";
import Image from "./Image"
import picture1 from "../images/home picture 2.jpeg"
import picture2 from "../images/home picture 3.jpeg"
import img1 from "../images/carousel img 2.jpeg"
import img2 from "../images/carousel img 3.jpeg"
import img3 from "../images/carousel img 1.jpeg"
import { FaCalendarAlt } from "react-icons/fa";
//import Carousel from "./Carousel";
import { Carousel } from "react-bootstrap"

const Home = () => {
      return (
            <div className="">

                  <div className="container-fluid bg-secondary py-5 mb-5">
                        <Carousel>
                              <Carousel.Item>
                                    <img src={img1} alt="" height="1000px" width="75%" />
                              </Carousel.Item>


                              <Carousel.Item>
                                    <img src={img2} alt="" height="1000px" width="75%" />
                              </Carousel.Item>

                              <Carousel.Item>
                                    <img src={img3} alt="" height="1000px" width="75%" />
                              </Carousel.Item>
                        </Carousel>

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