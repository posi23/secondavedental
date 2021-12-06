import { useState } from "react";

const TimeSelect = () => {

      const [time, setTime] = useState("default");


      return (
            <select type="" className="text-dark w-75" id="time" style={{ backgroundColor: "rgb(237, 225, 225)" }} value={time} onChange={(e) => setTime(e.target.value)}>
                  <option value="default">Choose your appointment time</option>
                  <option value="9">9:00AM</option>
                  <option value="10">10:00AM</option>
                  <option value="11">11:00AM</option>
                  <option value="12">12:00PM</option>
                  <option value="13">1:00PM</option>
                  <option value="14">2:00PM</option>
                  <option value="15">3:00PM</option>
                  <option value="16">4:00PM</option>
                  <option value="17">5:00PM</option>

            </select>
      );
}

export default TimeSelect;