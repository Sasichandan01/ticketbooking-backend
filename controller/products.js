const User= require("../model/user_model")

// const name=contact.name;
// const mail=contact.mail;
const getAllProducts = async (req, res) => {
  try {
    const data = await User.find(); // Fetch data from database
    res.status(200).json({ data }); // Send data as JSON response
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" }); // Error handling
  }
};

module.exports=getAllProducts