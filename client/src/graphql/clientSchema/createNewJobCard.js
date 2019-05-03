import gql from "graphql-tag";

export default gql`
  mutation CreateNewJobCard(
    $serviceDueDate: String!
    $custFirstname: String!
    $custLastName: String!
    $custPhoneNum: String!
    $custEmail: String!
    $vehicleNum: String!
    $vehicleModel: String!
    $vehicleMake: String!
    $defects_tank: String!
    $defects_tankLogo: String!
    $defects_lightglass: String!
    $defects_seatcover: String!
    $defects_crashgaurd: String!
    $defects_mirrors: String!
    $defects_indicators: String!
    $electricals_headlight: String!
    $electricals_tailLight: String!
    $electricals_console: String!
    $electricals_indicatorF: String!
    $electricals_indicatorR: String!
    $electricals_horn: String!
    $petrolLevel: String!
    $battery: String!
    $jobs: [JobInput]!
    $aproxPrice: String!
    $relatedAccount: ID!
  ) {
    createJobCard(
      jobCardInput: {
        serviceDueDate: $serviceDueDate
        custFirstname: $custFirstname
        custLastName: $custLastName
        custPhoneNum: $custPhoneNum
        custEmail: $custEmail
        vehicleNum: $vehicleNum
        vehicleModel: $vehicleModel
        vehicleMake: $vehicleMake
        defects_tank: $defects_tank
        defects_tankLogo: $defects_tankLogo
        defects_lightglass: $defects_lightglass
        defects_seatcover: $defects_seatcover
        defects_crashgaurd: $defects_crashgaurd
        defects_mirrors: $defects_mirrors
        defects_indicators: $defects_indicators
        electricals_headlight: $electricals_headlight
        electricals_tailLight: $electricals_tailLight
        electricals_console: $electricals_console
        electricals_indicatorF: $electricals_indicatorF
        electricals_indicatorR: $electricals_indicatorR
        electricals_horn: $electricals_horn
        petrolLevel: $petrolLevel
        battery: $battery
        jobs: $jobs
        aproxPrice: $aproxPrice
        relatedAccount: $relatedAccount
      }
    ) {
      _id
      custEmail
      custPhoneNum
    }
  }
`;
