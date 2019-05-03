import gql from "graphql-tag";

const GET_ACCOUNTS_QUERY = gql`
  query accounts($offset: Int!, $limit: Int!, $sort: String!) {
    accounts(offset: $offset, limit: $limit, sort: $sort) {
      firstName
      lastName
      email
      __typename
      phoneNum
      _id
    }
  }
`;

export default GET_ACCOUNTS_QUERY;
