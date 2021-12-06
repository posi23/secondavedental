import { useEffect, useState } from "react";
import Alert from "./Alert";

const Submit = ({ feedbackMsg, width }) => {

      const [placeholder, setPlaceholder] = useState(false);


      const handleClick = (e) => {
            e.preventDefault();
            setPlaceholder(true);

            // setTimeout(() => {
            //       setPlaceholder(false);
            // }, 5000);
      }

      const makeAlertFalse = () => {
            setPlaceholder(false);
      }

      useEffect(() => {
            console.log(placeholder)
      }, [placeholder])

      return (
            <div>
                  <button className="btn btn-light text-primary rounded-pill shadow" type="submit" onClick={handleClick}>Submit</button>

                  <div id="alertPlaceholder" className="mt-3">
                        {placeholder && <Alert message={feedbackMsg} makeFalse={makeAlertFalse} width={width} />}
                  </div>
            </div>
      );
}

export default Submit;