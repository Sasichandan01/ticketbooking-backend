const User = require("../model/ticket_model");

const updateMovie = async (req, res) => {
  try {
    const { movieId, Story,Direction,Music } = req.body;
    
    const updatedMovie = await User.findOneAndUpdate(
      { _id: movieId },
      {
        $set: {
          review:{
            Story:Story,
            Direction:Direction,
            Music:Music
          }
        },
      }
    );
    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    console.log(updateMovie);

    res.status(200).json(updatedMovie);
  } catch (error) {
    console.error("Error updating review:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = updateMovie;
