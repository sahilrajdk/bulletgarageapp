import React, { Component } from "react";
import CustomInput from "./CustomInput";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { Mutation } from "react-apollo";

const CREATE_ACCOUNT_QUERY = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNum: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNum: $phoneNum
    ) {
      firstName
      lastName
      email
      phoneNum
      __typename
      _id
    }
  }
`;

const TEST = gql`
  query {
    currentAccount @client {
      firstName
      lastName
      email
      phoneNum
      __typename
      _id
    }
  }
`;

class NewAccount extends Component {
  state = {
    custFirstname: "",
    custLastName: "",
    custPhoneNum: "",
    custEmail: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { custFirstname, custLastName, custPhoneNum, custEmail } = this.state;
    return (
      <Mutation
        mutation={CREATE_ACCOUNT_QUERY}
        update={(cache, { data: { createAccount } }) => {
          //let accountincache = cache.readQuery({ query: TEST });

          console.log(createAccount);
          cache.writeQuery({
            query: TEST,

            data: {
              currentAccount: createAccount
            }
          });
          let cacheafterwrite = cache.readQuery({ query: TEST });
          console.log(cacheafterwrite);
        }}
      >
        {(createAccount, { data, loading }) => (
          <div className="newaccount">
            <form
              onSubmit={e => {
                e.preventDefault();
                createAccount({
                  variables: {
                    firstName: custFirstname,
                    lastName: custLastName,
                    phoneNum: custPhoneNum,
                    email: custEmail
                  }
                });
              }}
            >
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

              <button className="custom-btn btn-secondary" type="submit">
                Submit
              </button>
              <div>
                {" "}
                <Link className="custom-btn btn-red custom-link" to="/newJob">
                  New Job -->
                </Link>
              </div>
            </form>
            <h1>{loading}</h1>
          </div>
        )}
      </Mutation>
    );
  }
}

export default NewAccount;
