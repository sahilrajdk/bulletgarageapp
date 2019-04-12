const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobCardSchema = new Schema({
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
  islightsCheckOk: {
    type: String,
    required: true
  },
  lightsComments: {
    type: String,
    required: true
  },
  isNoiseCheckOk: {
    type: String,
    required: true
  },
  noiseComments: {
    type: String,
    required: true
  },
  isTyresOk: {
    type: String,
    required: true
  },
  tyreComments: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = JobCard = mongoose.model("jobcards", JobCardSchema);
