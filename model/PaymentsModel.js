const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
  pymt_booked: {
    type: Schema.Types.ObjectId,
    ref: "Books"
  },
  pymt_status: {
    type: String,
    default: "Not Yet Paid Off"
  }
});
