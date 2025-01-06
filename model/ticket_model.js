const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  theater: {
    type: String,
    required: true,
  },
  review: {
    Story:{type:String},
    Direction:{type:String},
    Music:{type:String}
  }
});
const User = new mongoose.model("movieuserdetails", detailSchema);

module.exports = User;
