import React, { Component } from "react";
import CustomInput from "./CustomInput";
import DefectRadioGroup from "./DefectRadioGroup";

class NewJob extends Component {
  state = {
    currentPage: 2,
    custFirstname: "",
    custLastName: "",
    custPhoneNum: "",
    custEmail: "",
    vehicleNum: "",
    vehicleMake: "",
    vehicleModel: "",
    defects_tank: "",
    defects_tankLogo: "",
    defects_lightglass: "",
    defects_seatcover: "",
    defects_crashgaurd: "",
    defects_mirrors: "",
    defects_indicators: "",
    electricals_headlight: "y",
    electricals_tailLight: "y",
    electricals_console: "y",
    electricals_indicatorF: "y",
    electricals_indicatorR: "y",
    electricals_horn: "y",
    petrolLevel: "",
    battery: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleNewJobCard = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handlePageButton = value => {
    if (value === "prev" && this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    } else if (value === "next" && this.state.currentPage < 3) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  };

  render() {
    let formContent;
    if (this.state.currentPage === 1) {
      formContent = (
        <div className="page1">
          <div className="page1__header">
            <h3>Customer Details</h3>
          </div>
          <div className="page1__content">
            <div className="page1__left">
              <CustomInput
                type="text"
                name="custFirstname"
                label="First Name"
                placeholder="First Name"
                onChange={this.handleChange}
                value={this.state.custFirstname}
              />
              <CustomInput
                type="text"
                name="custLastName"
                placeholder="Last Name"
                label="Last Name"
                onChange={this.handleChange}
                value={this.state.custLastName}
              />
              <CustomInput
                type="text"
                name="custPhoneNum"
                label="Phone Number"
                placeholder="Phone Number"
                onChange={this.handleChange}
                value={this.state.custPhoneNum}
              />
              <CustomInput
                type="text"
                name="custEmail"
                label="Email"
                placeholder="Email Address"
                onChange={this.handleChange}
                value={this.state.custEmail}
              />
            </div>
            <div className="page1__right">
              <CustomInput
                type="text"
                name="vehicleNum"
                placeholder="Bike Reg Number"
                label="Bike Number"
                onChange={this.handleChange}
                value={this.state.vehicleNum}
              />
              <CustomInput
                type="text"
                name="vehicleMake"
                label="Manufacturer"
                placeholder="Manufacturer"
                onChange={this.handleChange}
                value={this.state.vehicleMake}
              />
              <CustomInput
                type="text"
                name="vehicleModel"
                placeholder="Bike Model"
                label="Bike Model"
                onChange={this.handleChange}
                value={this.state.vehicleModel}
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.currentPage === 2) {
      formContent = (
        <div className="page2">
          <div className="page2__header">
            <h3>Condition Check</h3>
          </div>
          <div className="page2__content">
            <div>
              <DefectRadioGroup
                nameInState="defects_tank"
                isChecked={this.state.defects_tank}
                label="Tank / Dents"
                handleChange={this.handleChange}
              />
              <DefectRadioGroup
                nameInState="defects_tankLogo"
                isChecked={this.state.defects_tankLogo}
                label="Tank Logo"
                handleChange={this.handleChange}
              />
              <DefectRadioGroup
                nameInState="defects_lightglass"
                isChecked={this.state.defects_lightglass}
                label="Lights / glass"
                handleChange={this.handleChange}
              />
              <DefectRadioGroup
                nameInState="defects_seatcover"
                isChecked={this.state.defects_seatcover}
                label="Seat Cover / Torn ?"
                handleChange={this.handleChange}
              />
            </div>

            <div>
              <DefectRadioGroup
                nameInState="defects_crashgaurd"
                label="Crash gaurd / bend damage?"
                isChecked={this.state.defects_crashgaurd}
                handleChange={this.handleChange}
              />
              <DefectRadioGroup
                nameInState="defects_mirrors"
                label="Mirros / glass"
                handleChange={this.handleChange}
                isChecked={this.state.defects_mirrors}
              />
              <DefectRadioGroup
                nameInState="defects_indicators"
                isChecked={this.state.defects_indicators}
                label="Indicators"
                handleChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.currentPage === 3) {
      formContent = (
        <React.Fragment>
          <h2>Job Details</h2>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className="new__jobcard">
          <form
            id="jobcardform"
            className="new__jobcard-form"
            onSubmit={this.handleNewJobCard}
          >
            {formContent}
            {console.log(this.state)}
          </form>
          <div className="form-buttons">
            <div>
              {this.state.currentPage !== 1 ? (
                <button
                  className="btn-prev"
                  onClick={() => this.handlePageButton("prev")}
                >
                  &larr; Prev Page
                </button>
              ) : null}

              <button
                className="btn-next"
                onClick={() => this.handlePageButton("next")}
              >
                Next Page &rarr;
              </button>
            </div>

            <button type="submit" form="jobcardform">
              Submit
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewJob;
