const User = require("../model/user_model");

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { review } = req.body;
    console.log(review);
   
    if (!review) {
      return res.status(400).json({ message: "Review is required" });
    }
      if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ message: "Invalid movie ID" });
      }
    const updatedMovie = await User.collection.updateOne(
      { "_id":id },
      {
        $set: {
          "review": review,
        },
      },
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
