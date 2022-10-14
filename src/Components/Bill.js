import React from "react";
import "../style.css";
import dollar from "../../images/icon-dollar.svg";

const Bill = ({ Setbill, Bill }) => {
    const handleChange = (e) => {
        
        Setbill(e.target.value);
    }
      return (
          <div className={"mb-4"}>
              <span className={"fc-grayish-cyan"}>
                  Bill
              </span>
              <div className={"d-flex col-12 justify-content-evenly mt-1 input-bill rounded-2 align-items-center p-2"}>
                  <img src={dollar} className={""}/>
                  <input onChange={handleChange} value={Bill} className={"text-end col-11"}/>
              </div>
          </div>
      )
  }

export default Bill;