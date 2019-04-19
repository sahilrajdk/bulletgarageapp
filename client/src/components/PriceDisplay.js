import React, { Component } from "react";

import PropTypes from "prop-types";
const PRICE_LIST = [
  { type: "PAID_SERV", price: 500 },
  { type: "FREE_SERV", price: 200 },
  { type: "OIL_CHANGE", price: 700 },
  { type: "CHAIN_SERV", price: 150 },
  { type: "LAB_1", price: 80 }
];

const testdata = [
  {
    name: "Sam",
    email: "somewhere@gmail.com"
  },
  {
    name: "Ash",
    email: "something@gmail.com"
  }
];

class PriceDisplay extends Component {
  render() {
    const { reqServices } = this.props;
    let prices = [];

    prices.push(
      reqServices.map(reqService => {
        return PRICE_LIST.filter(obj => {
          return obj.type === reqService;
        });
      })
    );

    console.log(reqServices);
    console.log(testdata);
    console.log(prices);
    const testmap = testdata.map(testd => {
      return (
        <li>
          {testd.name}
          {testd.email}
        </li>
      );
    });

    const rendercontent = prices.map(price => {
      return (
        <li>
          {price[0].type}
          {price[0].price}
        </li>
      );
    });

    return (
      <div>
        <ul className="priceul">{rendercontent}</ul>
        <ul>{testmap}</ul>
      </div>
    );
  }
}

PriceDisplay.propTypes = {
  reqServices: PropTypes.array.isRequired
};
export default PriceDisplay;
