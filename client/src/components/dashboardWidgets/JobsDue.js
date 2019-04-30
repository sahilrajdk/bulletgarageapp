import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_JOBS_QUERY = gql`
  query jobCards {
    jobCards {
      vehicleNum
      custPhoneNum
      __typename
      custEmail
      _id
    }
  }
`;

const JobsDue = () => (
  <Query query={GET_JOBS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      if (data) {
        return (
          <div className="dashboard__accounts-widget">
            <h3>JOBS DUE</h3>
            <ul className="accounts__List">
              {data.jobCards.map(jobCard => {
                return (
                  <li key={jobCard._id}>
                    {jobCard.vehicleNum},{jobCard.custPhoneNum},
                    {jobCard.custEmail}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    }}
  </Query>
);

export default JobsDue;
