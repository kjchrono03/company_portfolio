const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  appointmentDateTime: { type: Date, required: true },
  timeZone: { type: String, required: true },
  message: { type: String },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
