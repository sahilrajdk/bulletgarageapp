import gql from "graphql-tag";

export default gql`
  query {
    currentAccount @client {
      _id
      firstName
      lastName
      email
      phoneNum
      __typename
    }
  }
`;
