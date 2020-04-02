const express = require("express");
const router = express.Router();

// Models
const Users = require("../../model/UserModel");

// Routes

// @Get All User Data
router.get("/test", (req, res) => {
  Users.find().then(result => {
    res.send(result);
  });
  /* const dataFill = new Users({
    usr_username: "admin",
    usr_email: "",
    usr_userType: "admin",
    usr_fullname: "Administrator",
    usr_avatar: ""
  });
  dataFill.usr_password = dataFill.generateHash("admin");
  dataFill.save().then(result => {
    res.send(result);
  }); */
});

module.exports = router;
