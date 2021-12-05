
import first from "../images/carousel img 2.jpeg"
import second from "../images/carousel img 3.jpeg"
import third from "../images/carousel img 1.jpeg"
import { useEffect } from "react"

const Carousel = () => {

      var overlayStyle = {
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            top: "0",
            backgroundImage: `url(${first})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.5",
      }

      var carouselItemStyle = {
            height: "32rem",
            background: `url(${first})`,
            position: "relative",
      }

      useEffect(() => {
            console.log(first);
      }, [])


      return (
            // <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
            //       <div className="carousel-indicators">
            //             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            //             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            //             <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            //       </div>
            //       <div className="carousel-inner">
            //             <div className="carousel-item active" style={carouselItemStyle}>
            //                   {/* <img src={first} className="d-block w-100 h-30" alt="..." /> */}
            //                   <div className="overlay-image" style={overlayStyle}></div>
            //             </div>
            //             <div className="carousel-item" style={carouselItemStyle}>
            //                   {/* <img src={second} className="d-block w-100 h-30" alt="..." /> */}
            //                   <div className="overlay-image" style={overlayStyle}></div>
            //             </div>
            //             <div className="carousel-item" style={carouselItemStyle}>
            //                   {/* <img src={third} className="d-block w-100 h-30" alt="..." /> */}
            //                   <div className="overlay-image" style={overlayStyle}></div>
            //             </div>
            //       </div>
            //       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            //             <span className="visually-hidden">Previous</span>
            //       </button>
            //       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
            //             <span className="visually-hidden">Next</span>
            //       </button>
            // </div>

            <p></p>

      );
}

export default Carousel;