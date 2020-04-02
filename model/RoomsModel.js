const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
  rm_type: {
    type: String,
    default: ""
  },
  rm_available: {
    type: Boolean,
    default: false
  },
  rm_number: {
    type: Number,
    default: 0
  },
  rm_max_person: {
    adult: {
      type: Number,
      default: 0
    },
    children: {
      type: Number,
      default: 0
    }
  },
  rm_inventory: []
});

module.exports = mongoose.model("Rooms", schema);
