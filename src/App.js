import React, { useState } from "react";
import "./style.css";
import Bill from "./Components/Bill";
import Tip from "./Components/Tip";
import NumberOfPeople from "./Components/NumberOfPeople";

const TipPerPerson = ({ Bill, NumberOfPeople, SelectedTip }) => {
  const countTip = () => {
    let pattern = /^-?\d+\.?\d*$/
    if (!Bill || !NumberOfPeople || !Tip) return "0.00"
    for (let i = 0; i < SelectedTip.length;i++) {
      if (SelectedTip[i].select){
        let tip = SelectedTip[i].value;

        if (!Bill.match(pattern) || !NumberOfPeople.match(pattern) || !tip.match(pattern)) return;

        return parseFloat((Bill) * (tip/100) /NumberOfPeople).toFixed(2)
      }
    }
  }
  return (
    <div>
      <span style={{"color":"hsl(172, 67%, 45%)"}} className={"fs-large"}>
        ${countTip()}
      </span>
    </div>
  )
}

const TotalPerPerson = ({ Bill, NumberOfPeople, SelectedTip }) => {
  const countTotal = () => {
    let pattern = /^-?\d+\.?\d*$/;
    if (!Bill || !NumberOfPeople || !Tip) return "0.00";
    for (let i = 0; i < SelectedTip.length;i++) {
      if (SelectedTip[i].select){
        let tip = SelectedTip[i].value;
        if (!Bill.match(pattern) || !NumberOfPeople.match(pattern) || !tip.match(pattern)) return;

        return parseFloat((Bill) * (tip/100 + 1) /NumberOfPeople).toFixed(2)
      }
    }
  }
  return (
    <div>
      <span style={{"color":"hsl(172, 67%, 45%)"}} className={"fs-large"}>
       ${countTotal()}
      </span>
    </div>
  )
}

const Content = ({ children }) => {
  return <div className={"content"}>{children}</div>;
};

const Card = () => {
const [bill, setBill] = useState("");
const [numberOfPeople, setNumberOfPeople] = useState("");
const initialState = [
  {
    comp: "0",
    select: false,
    value: "5"    
},
{
    comp: "1",
    select: false,
    value: "10"
},
{
    comp: "2",
    select: false,
    value: "15"
},
{
    comp: "3",
    select: false,
    value: "25"
},
{
    comp: "4",
    select: false,
    value: "50"
},
{
    comp: "5",
    select: false,
    value: ""
}
]
const [selectedTip, setSelectedTip] = useState(initialState)

const handleClick = () => {
  setSelectedTip(initialState);
  setNumberOfPeople("");
  setBill("");
}

  return (
    <div className={"col-12"}>
    <h3 style={{"wordSpacing":"8px", "width":"150px"}} className={"mx-auto fs-medium text-center fc-grayish-cyan mt-4 mt-md-2 mb-5"}>S P L I T T E R</h3>
    <div className={"bg-light col-11 mx-auto col-xl-10 col-xxl-9 row p-3 py-4 rounded-3"}>
      <div className={"col-lg col-12 p-0 me-0 me-md-3 fs-normal"}>
        <Bill Bill = {bill} Setbill={setBill}/>
        <Tip SelectedTip={selectedTip} SetSelectedTip={setSelectedTip}/>
        <NumberOfPeople NumberOfPeople={numberOfPeople} SetnumberOfPeople={setNumberOfPeople}/>
      </div> 
      <div className={"col-lg col-12 mt-4 mt-md-0 py-4 total px-4 flex-column d-flex rounded-2 text-light fs-normal"}>
        <div className={"position-relative"}>
        <div className={"d-flex justify-content-between align-items-center"}>
          <div className={"d-flex flex-column"}>
            <span className={"fs-normal"}>Tip Amount</span>
            <span className={"fs-small fc-grayish-cyan"}>/ person</span>
          </div>
          <TipPerPerson SelectedTip={selectedTip} Bill={bill} NumberOfPeople={numberOfPeople}/>
        </div>

        <div className={"mt-4 d-flex justify-content-between align-items-center"}>
          <div className={"d-flex flex-column"}>
            <span className={"fs-normal"}>Total</span>
            <span className={"fs-small fc-grayish-cyan"}>/ person</span>
          </div>
          <TotalPerPerson SelectedTip={selectedTip} Bill={bill} NumberOfPeople={numberOfPeople}/>
        </div>
        </div>
        <button onClick={handleClick} className={"mt-md-auto mt-5 button py-2 rounded-2"}>RESET</button>
      </div>
    </div>
    <p class="mx-auto fs-small my-3 text-center col-8">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Rizky Yuliyanto</a>.
    </p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Content>
        <Card />
      </Content>
    </>
  );
};

export default App;
