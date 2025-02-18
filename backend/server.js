
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const scheduleRoutes = require("./routes/scheduleRoutes");
const contactRoutes = require("./routes/contactRoute");
const quoteRoutes = require("./routes/quoteRoute");
const chatRoutes = require("./routes/chatRoute"); 

app.use("/api/schedule", scheduleRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/quote", quoteRoutes);
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
