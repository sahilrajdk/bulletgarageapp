const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Account{
      _id:ID!
      firstName:String!
      lastName:String!
      phoneNum:String!
      email:String!
      prevServices:[JobCard!]
    }

    input AccountInput{
      firstName:String!
      lastName:String!
      phoneNum:String!
      email:String!
    }

    type Job{
      description: String!,
      repObserv: String!,
      customerReq: String!,
      typeOfService: String!,
      charges: String!,
      services: [String!]!
    }

    input JobInput{
      description: String!,
      repObserv: String!,
      customerReq: String!,
      typeOfService: String!,
      charges: String!,
      services: [String!]!
    }
  


    type JobCard {
      relatedAccount:Account!
      _id: ID!
      date:String!
      custFirstname:String!
      custLastName:String!
      custPhoneNum:String!
      custEmail:String!
      vehicleNum:String!
      vehicleModel:String!
      vehicleMake:String!
      defects_tank:String!
      defects_tankLogo:String!
      defects_lightglass:String!
      defects_seatcover:String!
      defects_crashgaurd:String!
      defects_mirrors:String!
      defects_indicators:String!
      electricals_headlight:String!
      electricals_tailLight:String!
      electricals_console:String!
      electricals_indicatorF:String!
      electricals_indicatorR:String!
      electricals_horn:String!
      petrolLevel:String!
      battery:String!
      jobs:[Job]!
      aproxPrice:String!
    }

    input JobCardInput{
      date:String!
      custFirstname:String!
      custLastName:String!
      custPhoneNum:String!
      custEmail:String!
      vehicleNum:String!
      vehicleModel:String!
      vehicleMake:String!
      defects_tank:String!
      defects_tankLogo:String!
      defects_lightglass:String!
      defects_seatcover:String!
      defects_crashgaurd:String!
      defects_mirrors:String!
      defects_indicators:String!
      electricals_headlight:String!
      electricals_tailLight:String!
      electricals_console:String!
      electricals_indicatorF:String!
      electricals_indicatorR:String!
      electricals_horn:String!
      petrolLevel:String!
      battery:String!
     jobs:[JobInput]!
     aproxPrice:String!
    }

    type RootQuery{
      jobCards:[JobCard!]!
      accounts:[Account!]!
      account(  phoneNum:String!  ):Account 
    } 
    
    type RootMutation{
      createJobCard(jobCardInput:JobCardInput):JobCard
      createAccount(accountInput:AccountInput):Account
    }

    schema{
      query:RootQuery
      mutation:RootMutation
    }

`);
