const config = require("../config/variabel");
const mongoose = require("mongoose");

// Connecting Database
module.exports = function() {
  mongoose
    .connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Database MongoDB Cloud Active !"))
    .catch(err =>
      console.log({ msgErr: "Database Failed to Connect !", error: err })
    );
};

module.exports.mongoose = mongoose;
