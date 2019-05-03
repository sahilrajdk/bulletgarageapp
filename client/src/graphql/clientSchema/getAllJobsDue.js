import gql from "graphql-tag";

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

export default GET_JOBS_QUERY;
