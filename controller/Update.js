const User = require("../model/user_model");

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { review } = req.body;
    const updatedMovie = await User.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          review: review,
        },
      }
    );
    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(updatedMovie);
  } catch (error) {
    console.error("Error updating review:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = updateMovie;
