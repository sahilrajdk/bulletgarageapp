import React from "react";

const electricalRadioGroup = props => {
  return (
    <React.Fragment>
      <div className="lightcheckgroup">
        <label htmlFor="conditionCheckGroup">{props.label}</label>
        <div id="conditionCheckGroup">
          <label className="green">
            <input
              type="radio"
              name={props.nameInState}
              className="yes"
              checked={props.isChecked === "y" ? true : false}
              onChange={props.handleChange}
              value="y"
            />

            <span>Y</span>
          </label>
          <label className="red">
            <input
              type="radio"
              checked={props.isChecked === "n" ? true : false}
              name={props.nameInState}
              className="no"
              value="n"
              onChange={props.handleChange}
            />
            <span>N</span>
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default electricalRadioGroup;
