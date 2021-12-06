import pic1 from "../images/smile pic 1.jpeg"
import pic2 from "../images/carousel img 2.jpeg"

import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

const FAQ = () => {
      return (

            <div className="">
                  <div className="text-center bg-secondary pb-3">
                        <img src={pic1} alt="" className="text-center" width="30%" />
                        <h3 className="fw-bold mt-3">FREQUENTLY ASKED QUESTIONS</h3>
                  </div>

                  <div className="mt-5">
                        <h4 className="fw-bold text-black-50 text-center">Important Facts About Your Oral Health</h4>

                        <div className="accordion text-dark" id="accordionExample">
                              <div className="row mx-5">
                                    <div className="col-md-6">
                                          <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            First Question
                                                      </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                      <div className="accordion-body">
                                                            <strong>Lorem ipsum dolor sit amet..</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti quibusdam minima mollitia molestiae dicta hic cupiditate adipisci veniam commodi tempore, vel voluptates eum, dolor, impedit iusto optio ipsam. Est accusantium odit consectetur, fugiat illo aperiam iure, rerum molestiae eveniet nemo alias quis natus minima consequuntur quod ipsum voluptatibus mollitia!
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Second Question
                                                      </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                      <div className="accordion-body">
                                                            <strong>Lorem ipsum dolor sit amet consectetur.</strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus eos pariatur earum repellat esse, iste placeat explicabo debitis alias facere! Perferendis maxime vel quasi aspernatur laborum exercitationem modi inventore numquam? Sit id, illo natus praesentium nihil aperiam blanditiis adipisci ipsa magnam voluptatibus eaque hic necessitatibus enim cumque porro recusandae neque corporis, unde aspernatur quam saepe.
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            Third Question
                                                      </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                      <div className="accordion-body">
                                                            <strong>Lorem ipsum dolor sit amet.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore qui ea, sed voluptas fugiat. Ipsam hic harum saepe nostrum? Velit ad vero, ratione quam laboriosam nostrum totam eos mollitia, nobis blanditiis perferendis asperiores fugiat facilis adipisci doloremque cupiditate iure architecto? Placeat quae assumenda error, veniam iure id inventore non impedit consequuntur. Rem nisi, soluta aspernatur fuga facilis quaerat ipsum?
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="col-md-6">
                                          <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFour">
                                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            Fourth Question
                                                      </button>
                                                </h2>
                                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                      <div className="accordion-body">
                                                            <strong>Lorem ipsum dolor sit amet.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore qui ea, sed voluptas fugiat. Ipsam hic harum saepe nostrum? Velit ad vero, ratione quam laboriosam nostrum totam eos mollitia, nobis blanditiis perferendis asperiores fugiat facilis adipisci doloremque cupiditate iure architecto? Placeat quae assumenda error, veniam iure id inventore non impedit consequuntur. Rem nisi, soluta aspernatur fuga facilis quaerat ipsum?
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFive">
                                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                            Fifth Question
                                                      </button>
                                                </h2>
                                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                      <div className="accordion-body">
                                                            <strong>Lorem ipsum dolor sit amet.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore qui ea, sed voluptas fugiat. Ipsam hic harum saepe nostrum? Velit ad vero, ratione quam laboriosam nostrum totam eos mollitia, nobis blanditiis perferendis asperiores fugiat facilis adipisci doloremque cupiditate iure architecto? Placeat quae assumenda error, veniam iure id inventore non impedit consequuntur. Rem nisi, soluta aspernatur fuga facilis quaerat ipsum?
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingSix">
                                                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                            Sixth Question
                                                      </button>
                                                </h2>
                                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                      <div className="accordion-body">
                                                            <strong>Lorem ipsum dolor sit amet.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventore qui ea, sed voluptas fugiat. Ipsam hic harum saepe nostrum? Velit ad vero, ratione quam laboriosam nostrum totam eos mollitia, nobis blanditiis perferendis asperiores fugiat facilis adipisci doloremque cupiditate iure architecto? Placeat quae assumenda error, veniam iure id inventore non impedit consequuntur. Rem nisi, soluta aspernatur fuga facilis quaerat ipsum?
                                                      </div>
                                                </div>
                                          </div>
                                    </div>

                              </div>

                        </div>

                  </div>


                  <div className="mt-5 p-5 d-md-flex justify-content-between">
                        <div className="align-self-center">
                              <p className="lead fs-4 fw-bold">Why not come in today? &#x1F601;</p>
                              <Link to="/appointment" className="text-decoration-none fs-5 me-3">
                                    <button className="btn btn-dark rounded-pill shadow text-light fw-bold p-2">
                                          <FaCalendarAlt color="grey" /> BOOK AN APPOINTMENT WITH US NOW
                                    </button>
                              </Link>
                        </div>

                        <div className="d-flex flex-column justify-content-around text-center mt-5 mt-md-0">
                              <div>
                                    <Link to="/services" className="text-light text-decoration-none">
                                          <button className="btn btn-light btn-lg lead fs-4 fw-bold text-primary shadow rounded-pill">SERVICES</button>
                                    </Link>
                              </div>

                              <br />

                              <div className="fs-5 fw-bold">
                                    <span>Lorem ipsum dolor sit amet.</span>
                                    <br />
                                    <span>Lorem ipsum dolor sit amet.</span>
                                    <br />
                                    <span>Lorem ipsum dolor sit amet.</span>
                                    <br />
                                    <span>Lorem ipsum dolor sit amet.</span>
                              </div>

                              <br />

                              <div>
                                    <Link to="/services" className="text-black-50">
                                          <p className="lead">View More...</p>
                                    </Link>
                              </div>

                        </div>

                        <div className="text-dark d-lg-none">
                              <br className="" />
                              <hr />
                        </div>

                        <div className="w-100 mt-5 d-md-none">
                              <p className="fw-bold fs-5 text-dark text-center">Let's turn that frown...</p>
                              <div className="">
                                    <img src={pic2} alt="" width="100%" />
                              </div>
                              <p className="fw-bold fs-5 text-black-50 text-center">...upside down</p>
                        </div>

                        <div className="w-25 d-none d-md-inline">
                              <p className="fw-bold fs-5 text-dark text-center">Let's turn that frown...</p>
                              <div className="">
                                    <img src={pic2} alt="" width="100%" />
                              </div>
                              <p className="fw-bold fs-5 text-black-50 text-center">...upside down</p>
                        </div>



                  </div>
            </div>

      );
}

export default FAQ;