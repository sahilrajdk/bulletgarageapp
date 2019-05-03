const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobCardSchema = new Schema({
  custFirstname: {
    type: String,
    required: true
  },
  custLastName: {
    type: String,
    required: true
  },
  custPhoneNum: {
    type: String,
    required: true
  },
  custEmail: {
    type: String,
    required: true
  },
  serviceDueDate: {
    type: String,
    required: true
  },

  vehicleNum: {
    type: String,
    required: true
  },
  vehicleMake: {
    type: String,
    required: true
  },
  vehicleModel: {
    type: String,
    required: true
  },
  defects_tank: {
    type: String,
    required: true
  },
  defects_tankLogo: {
    type: String,
    required: true
  },
  defects_lightglass: {
    type: String,
    required: true
  },
  defects_seatcover: {
    type: String,
    required: true
  },
  defects_crashgaurd: {
    type: String,
    required: true
  },
  defects_mirrors: {
    type: String,
    required: true
  },
  defects_indicators: {
    type: String,
    required: true
  },
  electricals_headlight: {
    type: String,
    required: true
  },
  electricals_tailLight: {
    type: String,
    required: true
  },
  electricals_console: {
    type: String,
    required: true
  },
  electricals_indicatorF: {
    type: String,
    required: true
  },
  electricals_indicatorR: {
    type: String,
    required: true
  },
  electricals_horn: {
    type: String,
    required: true
  },
  petrolLevel: {
    type: String,
    required: true
  },
  battery: {
    type: String,
    required: true
  },
  jobs: {
    type: Array,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  aproxPrice: {
    type: String,
    required: true
  },
  relatedAccount: {
    type: Schema.Types.ObjectId,
    ref: "Account"
  }
});

module.exports = mongoose.model("JobCard", jobCardSchema);
