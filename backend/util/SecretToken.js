require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (res, id) => {
  // 1. Token Banao
  const token = jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60, // 3 Days (in seconds)
  });

  // 2. Cookie Set Karo
  // Ye line browser ko order deti hai ki cookie save kar lo
  res.cookie("token", token, {
    withCredentials: true,  // Frontend-Backend communication ke liye zaroori
    httpOnly: false,        // Abhi false rakha hai taaki JS access kar sake (Production me true kar dena)
    maxAge: 3 * 24 * 60 * 60 * 1000, // 3 Days (in milliseconds)
  });

  return token;
};