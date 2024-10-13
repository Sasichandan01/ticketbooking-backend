const User = require("../model/ticket_model");

const deletemovie = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await User.findOneAndDelete({ _id: id });
    if (!response) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
module.exports = deletemovie;
