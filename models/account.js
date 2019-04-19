const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNum: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  prevServices: [{ type: Schema.Types.ObjectId, ref: "JobCard" }]
});

module.exports = mongoose.model("Account", accountSchema);
