const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Account{
      _id:ID!
      firstName:String!
      lastName:String!
      phoneNum:String!
      offset: Int!
       limit: Int!
       sort:String!
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
      createdAt:String!
      custFirstname:String!
      custLastName:String!
      custPhoneNum:String!
      custEmail:String!
      serviceDueDate:String!
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
       custFirstname:String!
      custLastName:String!
      custPhoneNum:String!
      custEmail:String!
      serviceDueDate:String!
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
     relatedAccount:ID!
    }

    type RootQuery{
      jobCards:[JobCard!]!
      accounts(offset: Int!, limit: Int!, sort:String!):[Account!]!
      account(  phoneNum:String , _id:ID  ):Account 
    } 
    
    type RootMutation{
      createJobCard(jobCardInput:JobCardInput):JobCard
      createAccount( firstName:String!
        lastName:String!
        phoneNum:String!
        email:String!):Account
    }

    schema{
      query:RootQuery
      mutation:RootMutation
    }

`);
