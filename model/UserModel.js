const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const { Schema } = mongoose;

const schema = new Schema({
  usr_username: {
    type: String,
    default: ""
  },
  usr_email: {
    type: String,
    default: ""
  },
  usr_password: {
    type: String,
    default: ""
  },
  usr_userType: {
    type: String,
    default: "USER"
  },
  usr_fullname: {
    type: String,
    default: ""
  },
  usr_avatar: {
    type: String,
    default: ""
  }
});
// generating a hash
schema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
schema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("Users", schema);
