const User = require("../model/user_model");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ success: false, message: "No user found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to process login request" });
  }
};

module.exports = login;
