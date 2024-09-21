const User = require("../model/user_model");

const getAllMovies = async (req, res) => {
  const { name, mail } = req.query;

  try {
    const response = await User.find({ name: name, mail: mail });

    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = getAllMovies;
