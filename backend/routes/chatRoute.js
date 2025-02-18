
const express = require("express");
const Chat = require("../models/chat");

const router = express.Router();


router.post("/submit-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const newChat = new Chat({ email });
    await newChat.save();
    res.status(201).json({ message: "Email saved successfully", email });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving email" });
  }
});

module.exports = router;
