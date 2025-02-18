const express = require("express");
const router = express.Router();
const Quote = require("../models/quote");

router.post("/", async (req, res) => {
    try {
        const { name, email, projects, time, instructions } = req.body;

        if (!name || !email || !projects || !time || !instructions) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const newQuote = new Quote({ name, email, projects, time, instructions });
        await newQuote.save();

        res.status(201).json({ message: "Quote request submitted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error, please try again later!" });
    }
});

module.exports = router;