import React, { Component } from "react";
import CustomInput from "./CustomInput";
import DefectRadioGroup from "./DefectRadioGroup";
import ElectricalRadioGroup from "./ElectricalRadioGroup";
import PriceDisplay from "./PriceDisplay";

class NewJob extends Component {
  state = {
    currentPage: 3,
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
    battery: "",
    jobs: [],
    job: {
      description: "",
      repObserv: "",
      customerReq: "",
      typeOfService: "",
      charges: "",
      services: []
    },
    aproxPrice: ""
  };

  componentDidUpdate() {}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleJobInput = e => {
    this.setState({
      job: { ...this.state.job, [e.target.name]: e.target.value }
    });
  };

  handleJobsDropDown = e => {
    const { options } = e.target;

    const value = [];

    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      job: { ...this.state.job, services: value }
    });
  };

  handleNewJobCard = e => {
    e.preventDefault();
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
            <div className="page2__content__condition-check">
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
              <DefectRadioGroup
                nameInState="defects_crashgaurd"
                label="Crash gaurd/damage?"
                isChecked={this.state.defects_crashgaurd}
                handleChange={this.handleChange}
              />
            </div>
            <div>
              <h3>Electricals Check</h3>
            </div>
            <div className="page2__content__electrical-check">
              <ElectricalRadioGroup
                nameInState="electricals_headlight"
                isChecked={this.state.electricals_headlight}
                label="Headlights"
                handleChange={this.handleChange}
              />
              <ElectricalRadioGroup
                nameInState="electricals_tailLight"
                isChecked={this.state.electricals_tailLight}
                label="Seat Cover / Torn ?"
                handleChange={this.handleChange}
              />

              <ElectricalRadioGroup
                nameInState="electricals_console"
                label="Mirros / glass"
                handleChange={this.handleChange}
                isChecked={this.state.electricals_console}
              />
              <ElectricalRadioGroup
                nameInState="electricals_indicatorF"
                isChecked={this.state.electricals_indicatorF}
                label="Indicators"
                handleChange={this.handleChange}
              />
              <ElectricalRadioGroup
                nameInState="electricals_indicatorR"
                label="Crash gaurd/damage?"
                isChecked={this.state.electricals_indicatorR}
                handleChange={this.handleChange}
              />
              <ElectricalRadioGroup
                nameInState="electricals_horn"
                label="Crash gaurd/damage?"
                isChecked={this.state.electricals_horn}
                handleChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      );
    } else if (this.state.currentPage === 3) {
      formContent = (
        <div className="page3">
          <div className="page3__header">
            <h3>Job Details</h3>
          </div>
          <div className="page3__content">
            <CustomInput
              type="text"
              name="description"
              label="Job Description"
              placeholder="Job Description"
              onChange={this.handleJobInput}
              value={this.state.job.description}
            />
            <CustomInput
              type="text"
              name="repObserv"
              label="Rep Observation Description"
              placeholder="Rep Observation"
              onChange={this.handleJobInput}
              value={this.state.job.repObserv}
            />
            <CustomInput
              type="text"
              name="customerReq"
              label="Customer Request"
              placeholder="Customer Request"
              onChange={this.handleJobInput}
              value={this.state.job.customerReq}
            />
            <CustomInput
              type="text"
              name="typeOfService"
              label="Rep Observation Description"
              placeholder="Rep Observation"
              onChange={this.handleJobInput}
              value={this.state.job.typeOfService}
            />
            <CustomInput
              type="text"
              name="repObserv"
              label="Rep Observation Description"
              placeholder="Rep Observation"
              onChange={this.handleJobInput}
              value={this.state.job.repObserv}
            />
            <select
              multiple={true}
              value={this.state.job.services}
              onChange={this.handleJobsDropDown}
            >
              <option value="PAID_SERV">Paid Serv</option>
              <option value="FREE_SERV">Free Serv</option>
              <option value="OIL_CHANGE">Chain Serv</option>
              <option value="CHAIN_SERV">Rpt Serv</option>
            </select>
            <div />
          </div>
        </div>
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

            <div>
              {console.log(this.state)}
              {this.state.job.services.length > 0 ? (
                <PriceDisplay reqServices={this.state.job.services} />
              ) : null}

              {/* {this.state.job.services.length !== [] ? (
                <PriceDisplay priceInfo={this.state.job.services} />
              ) : null} */}
            </div>
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
