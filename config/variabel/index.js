if (process.env.NODE_ENV === "production") {
  module.exports = require("./variabel-prod");
} else {
  module.exports = require("./variabel-dev");
}
