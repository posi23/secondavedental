import { FaHospitalSymbol } from "react-icons/fa";

const Hospital = ({ fontsize, size, color }) => {
      return (
            <>
                  <div className="d-flex">
                        <FaHospitalSymbol size={size} color={color} />
                        <span className={"ms-3 " + fontsize}>
                              2ND AVENUE DENTAL,
                              <br />
                              111 2ND AVENUE,
                              <br />
                              SASKATOON,
                              <br />
                              SASKATCHEWAN
                              <br />
                              S7N XXX
                        </span>
                  </div>
            </>
      );
}

export default Hospital;