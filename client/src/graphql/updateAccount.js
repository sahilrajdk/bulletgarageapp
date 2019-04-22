import gql from "graphql-tag";

export default gql`
  mutation updateAccount(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNum: String!
    $__typename: String!
  ) {
    updateAccount(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNum: $phoneNum
      __typename: $__typename
    ) @client {
      firstName
      lastName
      email
      phoneNum
    }
  }
`;
