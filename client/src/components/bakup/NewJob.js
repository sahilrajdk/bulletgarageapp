import React, { Component } from "react";
import CustomInput from "./CustomInput";

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
    islightsCheckOk: true,
    lightsComments: "",
    isNoiseCheckOk: true,
    noiseComments: "",
    isTyresOk: true,
    tyreComments: ""
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
                onChange={this.handleChange}
                value={this.state.custFirstname}
              />
              <CustomInput
                type="text"
                name="custLastName"
                label="Last Name"
                onChange={this.handleChange}
                value={this.state.custLastName}
              />
              <CustomInput
                type="text"
                name="custPhoneNum"
                label="Phone Number"
                onChange={this.handleChange}
                value={this.state.custPhoneNum}
              />
              <CustomInput
                type="text"
                name="custEmail"
                label="Email"
                onChange={this.handleChange}
                value={this.state.custEmail}
              />
            </div>
            <div className="page1__right">
              <CustomInput
                type="text"
                name="vehicleNum"
                label="Bike Number"
                onChange={this.handleChange}
                value={this.state.vehicleNum}
              />
              <CustomInput
                type="text"
                name="vehicleMake"
                label="Manufacturer"
                onChange={this.handleChange}
                value={this.state.vehicleMake}
              />
              <CustomInput
                type="text"
                name="vehicleModel"
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
            <div className="lightcheckgroup">
              <div>
                <label htmlFor="conditionCheckGroup">Lights</label>
                <div id="conditionCheckGroup">
                  <label className="green">
                    <input
                      onChange={this.handleChange}
                      type="radio"
                      name="islightsCheckOk"
                      className="ok"
                      value={true}
                    />
                    <span>OK</span>
                  </label>
                  <label className="red">
                    <input
                      onChange={this.handleChange}
                      type="radio"
                      name="islightsCheckOk"
                      className="notok"
                      value={false}
                    />
                    <span>NOT OK</span>
                  </label>
                </div>
              </div>
              <div className="txtarea">
                {this.state.islightsCheckOk === "true" ||
                this.state.islightsCheckOk === true ? null : (
                  <textarea
                    rows="4"
                    cols="50"
                    name="lightsComments"
                    onChange={this.handleChange}
                  />
                )}
              </div>
            </div>
            <div className="tyrecheckgroup">
              <div>
                <label htmlFor="conditionCheckGroup">Tyres</label>
                <div id="conditionCheckGroup">
                  <label className="green">
                    <input
                      onChange={this.handleChange}
                      type="radio"
                      name="isTyresOk"
                      className="ok"
                      value={true}
                    />
                    <span>OK</span>
                  </label>
                  <label className="red">
                    <input
                      onChange={this.handleChange}
                      type="radio"
                      name="isTyresOk"
                      className="notok"
                      value={false}
                    />
                    <span>NOT OK</span>
                  </label>
                </div>
              </div>
              <div className="txtarea">
                {this.state.isTyresOk === "true" ||
                this.state.isTyresOk === true ? null : (
                  <textarea
                    rows="4"
                    cols="50"
                    name="tyreComments"
                    onChange={this.handleChange}
                  />
                )}
              </div>
            </div>
            <div className="noisecheckgroup">
              <div>
                <label htmlFor="conditionCheckGroup">Engine / Noise</label>
                <div id="conditionCheckGroup">
                  <label className="green">
                    <input
                      onChange={this.handleChange}
                      type="radio"
                      name="isNoiseCheckOk"
                      className="ok"
                      value={true}
                    />
                    <span>OK</span>
                  </label>
                  <label className="red">
                    <input
                      onChange={this.handleChange}
                      type="radio"
                      name="isNoiseCheckOk"
                      className="notok"
                      value={false}
                    />
                    <span>NOT OK</span>
                  </label>
                </div>
              </div>
              <div className="txtarea">
                {this.state.isNoiseCheckOk === "true" ||
                this.state.isNoiseCheckOk === true ? null : (
                  <textarea
                    rows="5"
                    cols="50"
                    name="noiseComments"
                    onChange={this.handleChange}
                  />
                )}
              </div>
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
            <button onClick={() => this.handlePageButton("prev")}>
              &larr; Prev Page
            </button>
            <button onClick={() => this.handlePageButton("next")}>
              Next Page &rarr;
            </button>
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
