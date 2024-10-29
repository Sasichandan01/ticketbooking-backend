const User = require("../model/user_model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwtUtils");
const forgotpassword = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Error: No user found" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const updatepass = await User.findOneAndUpdate(
      { email: email },
      {
        $set: {
          password: hashpassword,
        },
      }
    );
    const token = generateToken({
      id: updatepass._id,
      email: updatepass.email,
    });
    res.status(201).json({
      success: true,
      message: "Passowrd Updated Successfully",
      user: {
        id: updatepass._id,
        name: updatepass.name,
        email: updatepass.email,
        newuser: -1,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error : Updating Password error:",
      error: error.message,
    });
  }
};

module.exports = forgotpassword;
