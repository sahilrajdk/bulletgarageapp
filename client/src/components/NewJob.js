import React, { Component } from "react";
import CustomInput from "./CustomInput";
import DefectRadioGroup from "./DefectRadioGroup";
import ElectricalRadioGroup from "./ElectricalRadioGroup";
import currentAccount from "../graphql/clientSchema/currentAccount";
import { graphql, compose } from "react-apollo";
import createNewJobCard from "../graphql/clientSchema/createNewJobCard";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import GET_ACCOUNTS_QUERY from "./../graphql/clientSchema/getAllAccounts";
import GET_JOBS_QUERY from "../graphql/clientSchema/getAllJobsDue";
import NewJobForm from "./NewJobForm";
import Spinner from "./utils/Spinner";

const GET_ACCOUNT = gql`
  query Account($phoneNum: String!) {
    account(phoneNum: $phoneNum) {
      _id
      firstName
      lastName
      phoneNum
      email
    }
  }
`;

class NewJob extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Query
        query={GET_ACCOUNT}
        variables={{ phoneNum: this.props.match.params.phoneNum }}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div className="newJobPage">
                <Spinner />
              </div>
            );
          if (error) return <h2>{error}</h2>;
          if (data) {
            return <NewJobForm accountData={data.account} />;
          }
        }}
      </Query>
    );
  }
}

export default graphql(GET_ACCOUNT, {
  options: props => ({
    variables: {
      phoneNum: props.match.params.phoneNum
    }
  })
})(NewJob);
