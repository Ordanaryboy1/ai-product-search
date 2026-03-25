require("dotenv").config();

const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");
const searchRoutes = require("./routes/searchRoutes");

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/search", searchRoutes);


app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});