const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const UserDto = require("../DTO/UserDTO.js");

exports.register = async (req, res) => {
  const { firstName, lastName, email, mobile, password, confirmPassword } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !mobile ||
    !password ||
    !confirmPassword
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }
  
  if (password !== confirmPassword) {
    return res.status(400).json({ msg: 'Passwords do not match' });
  }

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      firstName,
      lastName,
      email,
      mobile,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({  token, user: new UserDto(user) });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.fetchUser = async (req, res) => {
  const token = req.header('token');
  console.log("Received Token:", token);

  if (!token) {
      return res.status(401).json({
          success: false,
          error: 'Please authenticate using a valid token',
      });
  }

  try {
      console.log("JWT Secret Key:", process.env.JWT_SECRET);
      const data = jwt.verify(token, process.env.JWT_SECRET);

      console.log("Decoded Token Data:", data);
      const user = await User.findById(data.user.id);

      if (!user) {
          return res.status(404).json({
              success: false,
              error: 'User not found',
          });
      }

      return res.json({
          user: new UserDto(user),
      });
  } catch (error) {
      console.error("Token Verification Error:", error);
      return res.status(401).json({
          success: false,
          error: 'Please authenticate using a valid token',
      });
  }
};