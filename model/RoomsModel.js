const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
  rm_type: {
    type: Schema.Types.ObjectId,
    ref: "RoomsType",
  },
  rm_number: {
    type: Number,
    default: 0,
  },
  rm_max_person: {
    adult: {
      type: Number,
      default: 0,
    },
    children: {
      type: Number,
      default: 0,
    },
  },
  rm_price: {
    type: Number,
    default: 0,
  },
  rm_inventory: [],
  rm_booked_date: [],
});

module.exports = mongoose.model("Rooms", schema);
