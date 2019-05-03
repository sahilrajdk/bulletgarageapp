import React, { Component } from "react";

class JobsDueItem extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { jobCard } = this.props;
    return (
      <li
        className={
          this.state.isOpen
            ? "jobsdueitem jobsdueitem__open"
            : "jobsdueitem jobsdueitem__closed"
        }
        onClick={this.toggle}
        key={jobCard._id}
      >
        {jobCard.vehicleNum},{jobCard.custPhoneNum},{this.props.convDate}
        <div className={this.state.isOpen ? "btns_show" : "btns_hide"}>
          <button
            className={
              this.state.isOpen
                ? "btns_show  custom-btn btn-primary cwhite"
                : "btns_hide custom-btn btn-primary cwhite"
            }
          >
            View Details
          </button>
          <button
            className={
              this.state.isOpen
                ? "btns_show custom-btn btn-primary cwhite ml-1"
                : "btns_hide custom-btn btn-primary cwhite ml-1"
            }
          >
            {" "}
            Send Delayed SMS
          </button>
        </div>
      </li>
    );
  }
}

export default JobsDueItem;
