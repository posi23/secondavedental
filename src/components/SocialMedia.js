import { BsFacebook, BsInstagram, BsTwitter, BsSnapchat } from "react-icons/bs"
import { Link } from "react-router-dom";

const SocialMedia = ({ fontsize, size, color }) => {
      return (
            <>
                  <p className={"lead " + fontsize}>SOCIAL MEDIA PAGES</p>
                  <div className="d-flex">
                        <Link to="/" className="text-light">
                              <div className="me-5">
                                    <BsFacebook size={size} color={color} />
                              </div>
                        </Link>


                        <Link to="/" className="text-light">
                              <div className="me-5">
                                    <BsInstagram size={size} color={color} />
                              </div>
                        </Link>


                        <Link to="/" className="text-light">
                              <div className="me-5">
                                    <BsTwitter size={size} color={color} />
                              </div>
                        </Link>


                        <Link to="/" className="text-light">
                              <div className="me-5">
                                    <BsSnapchat size={size} color={color} />
                              </div>
                        </Link>


                  </div>
            </>
      );
}

export default SocialMedia;