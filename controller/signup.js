const User = require("../model/user_model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwtUtils");
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email: email });
    const hashpassword = await bcrypt.hash(password, 10);

    if (existingUser) {
      const isPasswordValid = await bcrypt.compare(
        password,
        existingUser.password
      );
      
      if (isPasswordValid) {
        const token = generateToken({
          id: existingUser._id,
          email: existingUser.email,
        });
        return res.status(200).json({
          success: true,
          message: "Login successful",
          user: {
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            newuser: 1,
            token: token,
          },
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Error: Invalid credentials, User already exists",
        });
      }
    } else {
      const userCreated = await User.create({
        name: name,
        email: email,
        password: hashpassword,
      });
      const token = generateToken({
        id: userCreated._id,
        email: userCreated.email,
      });
      res.status(201).json({
        success: true,
        message: "User created successfully!",
        user: {
          id: userCreated._id,
          name: userCreated.name,
          email: userCreated.email,
          newuser: 0,
          token: token,
        },
      });
    }
  } catch (error) {
    console.error("Error : Signup/Login error:", error);
    res.status(500).json({
      success: false,
      message: "Error : An error occurred during signup/login",
      error: error.message,
    });
  }
};

module.exports = signup;
