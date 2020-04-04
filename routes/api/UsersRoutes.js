const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt-nodejs");
const Validator = require("validator");

const isEmpty = require("../../validation/is-empty");

// Models
const { User } = require("../../model");

const key = require("../../config/variabel");

// Require jsonwebtoken to make token for session
const jwt = require("jsonwebtoken");

// MIddleware
const middleware = passport.authenticate("jwt", { session: false });

// Routes

// @Get All User Data
router.get("/", middleware, (req, res) => {
  User.find().then(result => {
    res.send(result);
  });
  /* const dataFill = new User({
    usr_username: "Seninselasa18",
    usr_email: "zulkarnain.ahmad18",
    usr_fullname: "Zulkarnain",
    usr_avatar: ""
  });
  dataFill.usr_password = dataFill.generateHash("Katasandi18");
  dataFill.save().then(result => {
    res.send(result);
  }); */
});

// @POST /api/user/login
// @Detail LOgin routes
// @Private False
router.post("/login", (req, res) => {
  const { email, password, userType } = req.body;
  let errors = {};

  if (Validator.isEmpty(email)) {
    errors.email = "Email required.";
  }

  if (Validator.isEmpty(password)) {
    errors.password = "Password required";
  }

  if (!isEmpty(errors)) {
    return res.send(errors);
  }

  User.findOne({ usr_email: email })
    .then(result => {
      if (result) {
        if (bcrypt.compareSync(password, result.usr_password)) {
          if (result.usr_userType === userType) {
            const payload = {
              id: result._id,
              username: result.usr_username,
              email: result.usr_email,
              fullname: result.usr_fullname,
              avatar: result.usr_avatar
            };

            jwt.sign(
              payload,
              key.SECRET_OR_KEY,
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token,
                  user: payload
                });
              }
            );
          } else {
            errors.email = `You are not an ${userType}."`;
            return res.status(404).json(errors);
          }
        } else {
          errors.password = "Password incorrect!";
          return res.status(404).json(errors);
        }
      } else {
        User.findOne({ usr_username: email })
          .then(resUser => {
            if (resUser) {
              if (bcrypt.compareSync(password, resUser.usr_password)) {
                if (resUser.usr_userType === userType) {
                  const payload = {
                    id: resUser._id,
                    username: resUser.usr_username,
                    email: resUser.usr_email,
                    fullname: resUser.usr_fullname,
                    avatar: resUser.usr_avatar
                  };

                  jwt.sign(
                    payload,
                    key.SECRET_OR_KEY,
                    { expiresIn: 3600 },
                    (err, token) => {
                      res.json({
                        success: true,
                        token: "Bearer " + token,
                        user: payload
                      });
                    }
                  );
                } else {
                  errors.email = `You are not an ${userType}."`;
                  return res.status(404).json(errors);
                }
              } else {
                errors.password = "Password incorrect!";
                return res.status(404).json(errors);
              }
            } else {
              errors.email = "User not found!";
              return res.status(404).json(errors);
            }
          })
          .catch(err => res.json(err));
      }
    })
    .catch(err => res.json(err));
});

module.exports = router;
