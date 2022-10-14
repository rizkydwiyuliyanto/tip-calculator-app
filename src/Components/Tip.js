import React from "react";
import "../style.css";

const Tip = ({ SelectedTip, SetSelectedTip  }) => {

    const handleChange = (e) => {
        let value = parseInt(e.target.value);
        console.log(value)
        SetSelectedTip(SelectedTip.map((x, idx) => {
            return idx === SelectedTip.length - 1? {...x, value: (e.target.value)}:x
        }) 
    )}

    const handleClick = (comp) => {
        console.log(comp)
        SetSelectedTip(SelectedTip.map(item => {
            return item.comp === comp? {...item, select: !item.select} : {...item, select: false}
        }))
    }
    return (
      <div>
        <span>Select Tip %</span>
        <div className={"tips align-items-center fw-bold mt-2"}>
          {SelectedTip.map((item, idx) => {
            let color = SelectedTip[idx].select?"fc-very-dark-cyan":"text-light";
            let bgColor = SelectedTip[idx].select?"item-selected":"item";

            if (idx === SelectedTip.length - 1) {
              return (
                <div
                key={idx}
                onClick={() => {
                  handleClick((idx).toString());
                }}
                className={`rounded-2 ${bgColor}  overflow-hidden`}
              >
                <input
                  onChange={handleChange}
                  placeholder={"Custom"}
                  value={SelectedTip[idx].value}
                  style={{ background: "none", border: "none" }}
                  className={`${color}  fw-bold text-center col-12 py-2`}
                />
              </div>
              )
            }

            return (
              <div
                onClick={() => {
                  handleClick(idx.toString());
                }}
                
                key={idx}
                className={`${color} ${bgColor} button-tip text-center py-2 rounded-2`}
              >
                {item.value}%
              </div>
            );
          })}

        </div>
      </div>
    );
}

export default Tip;