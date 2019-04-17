import React from "react";

const DefectRadioGroup = props => {
  return (
    <React.Fragment>
      <div className="lightcheckgroup">
        <label htmlFor="conditionCheckGroup">{props.label}</label>
        <div id="conditionCheckGroup">
          <label className="green">
            <input
              type="radio"
              name={props.nameInState}
              className="nw"
              checked={props.isChecked === "nw" ? true : false}
              onChange={props.handleChange}
              value="nw"
            />

            <span>NW</span>
          </label>
          <label className="red">
            <input
              type="radio"
              checked={props.isChecked === "s" ? true : false}
              name={props.nameInState}
              className="s"
              value="s"
              onChange={props.handleChange}
            />
            <span>S</span>
          </label>
          <label className="yellow">
            <input
              type="radio"
              checked={props.isChecked === "d" ? true : false}
              name={props.nameInState}
              className="d"
              value="d"
              onChange={props.handleChange}
            />
            <span>D</span>
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DefectRadioGroup;
