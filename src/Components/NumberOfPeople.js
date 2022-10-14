import React from "react";
import "../style.css";
import person from "../../images/icon-person.svg";

const NumberOfPeople = ({ NumberOfPeople,SetnumberOfPeople }) => {
    const handleChange = (e) => {
      SetnumberOfPeople(e.target.value)
    }
      return (
          <div className={"mt-4"}>
              <span className={"fc-grayish-cyan"}>
                  Number of People
              </span>

              <div className={"d-flex col-12 mt-1 justify-content-evenly input-bill rounded-2 align-items-center p-2"}>
                  <img src={person}/>
                  <input onChange={handleChange} value={NumberOfPeople} className={"text-end col-11"}/>
              </div>
          </div>
      )
  }

  export default NumberOfPeople