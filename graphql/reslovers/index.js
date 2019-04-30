const JobCard = require("../../models/JobCard");
const Account = require("../../models/account");

const getjobcards = async jobcardIds => {
  try {
    const jobcards = await JobCard.find({ _id: { $in: jobcardIds } });
    return jobcards.map(jobcard => {
      return {
        ...jobcard._doc,
        relatedAccount: getAccount.bind(this, jobcard._doc.relatedAccount)
      };
    });
  } catch (err) {
    throw err;
  }
};

const getAccount = async acountId => {
  try {
    const account = await Account.findById(acountId);
    return {
      ...account._doc,
      prevServices: getjobcards.bind(this, account._doc.prevServices)
    };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  account: async args => {
    try {
      const account = await Account.findOne({
        phoneNum: args.phoneNum
      });
      if (account) {
        return account;
      } else {
        throw new Error("Phone Number does not match any Account");
      }
    } catch (err) {
      throw err;
    }
  },

  accounts: async args => {
    console.log(args);
    const accounts = await Account.find()
      .skip(args.offset)
      .limit(args.limit);

    try {
      return accounts.map(account => {
        return {
          ...account._doc,
          prevServices: getjobcards.bind(this, account._doc.prevServices)
        };
      });
    } catch (err) {
      throw err;
    }
  },

  createAccount: async args => {
    try {
      const account = await Account.findOne({ email: args.email });
      if (account) {
        throw new Error("Email already exists");
      } else {
        console.log("reun");
        const account = new Account({
          firstName: args.firstName,
          lastName: args.lastName,
          phoneNum: args.phoneNum,
          email: args.email
        });

        const result = await account.save();
        console.log(result);
        return { ...result._doc };
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  jobCards: async () => {
    try {
      const jobcards = await JobCard.find();

      return jobcards.map(jobcard => {
        return {
          ...jobcard._doc,
          date: new Date(jobcard._doc.date).toISOString(),
          relatedAccount: getAccount.bind(this, jobcard._doc.relatedAccount)
        };
      });
    } catch (err) {
      throw err;
    }
  },
  createJobCard: async args => {
    try {
      const jobCard = new JobCard({
        date: new Date(args.jobCardInput.date),
        custFirstname: args.jobCardInput.custFirstname,
        custLastName: args.jobCardInput.custLastName,
        custPhoneNum: args.jobCardInput.custPhoneNum,
        custEmail: args.jobCardInput.custEmail,
        vehicleNum: args.jobCardInput.vehicleNum,
        vehicleMake: args.jobCardInput.vehicleMake,
        vehicleModel: args.jobCardInput.vehicleModel,
        defects_tank: args.jobCardInput.defects_tank,
        defects_tankLogo: args.jobCardInput.defects_tankLogo,
        defects_lightglass: args.jobCardInput.defects_lightglass,
        defects_seatcover: args.jobCardInput.defects_seatcover,
        defects_crashgaurd: args.jobCardInput.defects_crashgaurd,
        defects_mirrors: args.jobCardInput.defects_mirrors,
        defects_indicators: args.jobCardInput.defects_indicators,
        electricals_headlight: args.jobCardInput.electricals_headlight,
        electricals_tailLight: args.jobCardInput.electricals_tailLight,
        electricals_console: args.jobCardInput.electricals_console,
        electricals_indicatorF: args.jobCardInput.electricals_indicatorF,
        electricals_indicatorR: args.jobCardInput.electricals_indicatorR,
        electricals_horn: args.jobCardInput.electricals_horn,
        petrolLevel: args.jobCardInput.petrolLevel,
        battery: args.jobCardInput.battery,
        aproxPrice: args.jobCardInput.aproxPrice,
        jobs: args.jobCardInput.jobs,
        relatedAccount: args.jobCardInput.relatedAccount
      });
      let createdJobcard;
      const result = await jobCard.save();

      createdJobcard = {
        ...result._doc,
        date: new Date(result._doc.date).toISOString(),
        relatedAccount: getAccount.bind(this, result._doc.relatedAccount)
      };

      const account = await Account.findById(args.jobCardInput.relatedAccount);

      if (!account) {
        throw new Error("Account does not exist");
      }
      account.prevServices.push(jobCard);
      const accountresult = await account.save();

      console.log(createdJobcard);
      return createdJobcard;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
