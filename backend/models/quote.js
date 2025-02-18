const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    projects: { type: String, required: true },
    time: { type: String, required: true },
    instructions: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Quote", QuoteSchema);
