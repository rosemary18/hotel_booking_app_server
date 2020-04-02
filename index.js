const express = require("express");
const app = express();

// Require listener func with giving app func
require("./startup/listener")(app);

// Require Body Parser func with giving app func
require("./startup/body-parser")(app);

// Require grouped db func with giving blank func
require("./startup/db")(app);

// Reuire grouped routes file with giving app func
require("./startup/routes")(app);
