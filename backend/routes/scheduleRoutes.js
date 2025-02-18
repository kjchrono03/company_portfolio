const express = require("express");
const Schedule = require("../models/schedule");
const moment = require("moment-timezone");

const router = express.Router();

// Windows to IANA Timezone Mapping
const windowsToIANA = {
  "Eastern Standard Time": "America/New_York",
  "Central Standard Time": "America/Chicago",
  "Pacific Standard Time": "America/Los_Angeles",
  "West Africa Standard Time": "Africa/Lagos",
  "India Standard Time": "Asia/Kolkata",
};

// Email Validation Function
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// GET: Test Route
router.get("/", (req, res) => {
  res.json({ message: "Schedule API is working!" });
});

// POST: Schedule a Meeting
router.post("/", async (req, res) => {
  try {
    let { name, email, appointmentDateTime, timeZone, message } = req.body;

    if (!name || !email || !appointmentDateTime || !timeZone) {
      return res.status(400).json({ error: "Name, Email, Date/Time, and TimeZone are required!" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email format!" });
    }

    // Convert Windows Timezone to IANA
    if (windowsToIANA[timeZone]) {
      timeZone = windowsToIANA[timeZone];
    }

    if (!moment.tz.zone(timeZone)) {
      return res.status(400).json({ error: "Invalid TimeZone! Use an IANA timezone like 'America/New_York'." });
    }

    // Ens
    const currentTime = moment().tz(timeZone);
    const appointmentTime = moment.tz(appointmentDateTime, timeZone);
    if (appointmentTime.isBefore(currentTime)) {
      return res.status(400).json({ error: "Appointment date/time must be in the future!" });
    }

    const convertedDateTime = appointmentTime.toDate();

    const newSchedule = new Schedule({
      name,
      email,
      appointmentDateTime: convertedDateTime,
      timeZone,
      message,
    });

    await newSchedule.save();
    res.status(201).json({ message: "Meeting Scheduled Successfully!" });
  } catch (error) {
    console.error("Error Scheduling Meeting:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
});

module.exports = router;
