const User = require("../model/ticket_model");

const getAllMovies = async (req, res) => {
  const { name, mail } = req.query;

  try {
    const response = await User.find({ name: name, mail: mail });
    if(!response){
      res.status.json({message:"No previous Bookings"});
    }
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

module.exports = getAllMovies;
