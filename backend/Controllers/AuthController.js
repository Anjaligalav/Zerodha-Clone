const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    
    const { email, password, username, createdAt } = req.body;
  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ email, password, username, createdAt });

    // 3. Token Generate & Cookie Set (Ek hi line me)
    // Hum 'res' pass kar rahe hain taaki utility function khud cookie set kar de
    const token = createSecretToken(res, user._id);

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: 'All fields are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email' }); 
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' }); 
    }

  
    const token = createSecretToken(res, user._id);

    // 5. Success Response
    res.status(200).json({ message: "User logged in successfully", success: true });

  } catch (error) {
    console.error(error);
    // FIX: Error response added
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};