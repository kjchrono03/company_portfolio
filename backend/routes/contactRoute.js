const express = require("express");
const Contact = require("../models/contact");

const router = express.Router();

// Handle form submissions
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
