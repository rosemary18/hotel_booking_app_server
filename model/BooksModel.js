const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
  book_user: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  book_check_in: {
    type: Date,
    default: ""
  },
  book_check_out: {
    type: Date,
    default: ""
  },
  book_room: {
    type: Schema.Types.ObjectId,
    ref: "Rooms"
  },
  book_number_of_room: {
    type: Number,
    default: 0
  },
  book_price: {
    type: Number,
    default: 0
  },
  book_status: {
    type: String,
    default: "Booked"
  }
});

module.exports = mongoose.model("Books", schema);
