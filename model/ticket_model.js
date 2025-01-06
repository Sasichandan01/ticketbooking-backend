const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  mail: {
    type: String,
   
  },
  photo: {
    type: String,
   
  },
  title: {
    type: String,
   
  },
  time: {
    type: String,
    
  },
  city: {
    type: String,
    
  },
  date: {
    type: Date,
    
  },
  count: {
    type: Number,
  
  },
  cost: {
    type: Number,
   
  },
  theater: {
    type: String,
  
  },
  review: {
    Story:{type:String},
    Direction:{type:String},
    Music:{type:String}
  }
});
const User = new mongoose.model("moviedetails", detailSchema);

module.exports = User;
