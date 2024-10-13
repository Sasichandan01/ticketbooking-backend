const User = require("../model/ticket_model");

const home = async (req, res) => {
  try {
    res.status(200).send("home page");
  } catch (error) {
    console.log(error);
  }
};
const contact = async (req, res) => {
  try {
    const {
      name,
      mail,
      photo,
      title,
      time,
      city,
      date,
      count,
      cost,
      theater,
      review,
    } = req.body;
    const ticketCreated = await User.create({
      name,
      mail,
      photo,
      title,
      time,
      city,
      date,
      count,
      cost,
      theater,
      review,
    });
    res.status(200).json({ message: req.body });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
module.exports = { home, contact };
