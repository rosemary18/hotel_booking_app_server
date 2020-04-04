const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
  type_name: String,
  default: ""
});

module.exports = mongoose.model("RoomsType", schema);
