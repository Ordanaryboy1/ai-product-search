const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../models/userModel");

// REGISTER
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    createUser(name, email, hashedPassword, (err) => {
      if (err) {
        return res.status(500).json({  success: true, message: "User already exists or DB error" });
      }

      res.status(201).json({ message: "User registered successfully" });
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN
const login = (req, res) => {
  try {
    const { email, password } = req.body;

    findUserByEmail(email, async (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Database error" });
      }

      if (results.length === 0) {
        return res.status(400).json({success: true,message: "User not found" });
      }

      const user = results[0];

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({
        success: true,
        message: "Login successful",
        token
      });
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { register, login };