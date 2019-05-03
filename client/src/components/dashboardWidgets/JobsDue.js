import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import JobsDueItem from "./JobsDueItem";
const GET_JOBS_QUERY = gql`
  query jobCards {
    jobCards {
      vehicleNum
      custPhoneNum
      __typename
      custEmail
      _id
      serviceDueDate
    }
  }
`;

class JobsDue extends Component {
  render() {
    return (
      <Query query={GET_JOBS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          if (data) {
            let newjobcards;
            newjobcards = data.jobCards.sort(function(a, b) {
              return new Date(a.serviceDueDate) - new Date(b.serviceDueDate);
            });

            return (
              <div className="dashboard__jobs-widget">
                <h3>
                  JOBS DUE{" "}
                  <span className="count-span">{data.jobCards.length}</span>
                </h3>
                <ul className="jobsdue__List">
                  {newjobcards.map(jobCard => {
                    let dueDate;
                    dueDate = new Date(jobCard.serviceDueDate).toLocaleString();
                    return (
                      <JobsDueItem
                        key={jobCard._id}
                        jobCard={jobCard}
                        convDate={dueDate}
                      />
                    );
                  })}
                </ul>
              </div>
            );
          }
        }}
      </Query>
    );
  }
}

export default JobsDue;
