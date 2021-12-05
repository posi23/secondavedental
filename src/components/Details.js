import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";

const Details = ({ fontsize, size, color }) => {
      return (
            <>
                  <span>
                        <p><BsTelephoneFill size={size} color={color} /> <a href="tel:123456789" className={"text-light ms-3 " + fontsize} >(123) 456-789</a> <br /></p>
                        <p><BsEnvelopeFill size={size} color={color} /> <a href="mailto:posi@secondavedental.com" className={"text-light ms-3 " + fontsize}>posi@secondavedental.com</a> </p>
                  </span>

            </>
      );
}

export default Details;