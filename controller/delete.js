const User = require("../model/user_model");

const deletemovie = async (req, res) => {
  try {
    const { id } = req.params; 
    await User.findOneAndDelete({ _id: id }); 
    console.log(true);
    
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
module.exports=deletemovie;
