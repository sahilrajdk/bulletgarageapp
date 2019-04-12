const express = require("express");
const router = express.Router();

const JobCard = require("../../models/JobCard");

router.get("/", (req, res) => {
  JobCard.find()
    .then(jobcards => {
      res.json(jobcards);
    })
    .catch(err => {
      res.status(404).json({ msg: "error" });
    });
});

router.post("/", (req, res) => {
  const jobCardDetials = {};
  if (req.body.custFirstname)
    jobCardDetials.custFirstname = req.body.custFirstname;
  if (req.body.custLastName)
    jobCardDetials.custLastName = req.body.custLastName;
  if (req.body.custPhoneNum)
    jobCardDetials.custPhoneNum = req.body.custPhoneNum;
  if (req.body.custEmail) jobCardDetials.custEmail = req.body.custEmail;
  if (req.body.vehicleNum) jobCardDetials.vehicleNum = req.body.vehicleNum;
  if (req.body.vehicleMake) jobCardDetials.vehicleMake = req.body.vehicleMake;
  if (req.body.vehicleModel)
    jobCardDetials.vehicleModel = req.body.vehicleModel;
  if (req.body.islightsCheckOk)
    jobCardDetials.islightsCheckOk = req.body.islightsCheckOk;
  if (req.body.lightsComments)
    jobCardDetials.lightsComments = req.body.lightsComments;
  if (req.body.isNoiseCheckOk)
    jobCardDetials.isNoiseCheckOk = req.body.isNoiseCheckOk;
  if (req.body.noiseComments)
    jobCardDetials.noiseComments = req.body.noiseComments;
  if (req.body.isTyresOk) jobCardDetials.isTyresOk = req.body.isTyresOk;
  if (req.body.tyreComments)
    jobCardDetials.tyreComments = req.body.tyreComments;

  new JobCard(jobCardDetials).save().then(jobcard => res.json(jobcard));
});

module.exports = router;
