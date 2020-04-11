const express = require("express");
const router = express.Router();
const passport = require("passport");
// Models
const { Room, RoomType } = require("../../model");
const middleware = passport.authenticate("jwt", { session: false });

// Routes

// @Get TEST
router.get("/fill", (req, res) => {
  const datafillStandart = new Room({
    rm_type: "5e8725718c3819314cd62cd0",
    rm_number: 401,
    rm_max_person: {
      adult: 2,
      children: 3,
    },
    rm_price: 50,
    rm_inventory: ["WI-FI", "Hot Water", "BreakFast"],
    rm_booked_date: [],
  });
  const datafillDeluxe = new Room({
    rm_type: "5e87258a67a0e123582278be",
    rm_number: 403,
    rm_max_person: {
      adult: 2,
      children: 3,
    },
    rm_price: 188,
    rm_inventory: [
      "WI-FI",
      "Hot Water",
      "BreakFast",
      "Free Message",
      "Free Dinner",
    ],
    rm_booked_date: [],
  });
  const datafillSuit = new Room({
    rm_type: "5e8725e648bb8d371cfc721a",
    rm_number: 404,
    rm_max_person: {
      adult: 2,
      children: 3,
    },
    rm_price: 188,
    rm_inventory: [
      "WI-FI",
      "Hot Water",
      "WI-FI",
      "Hot Water",
      "BreakFast",
      "Free Message",
      "Free Dinner",
    ],
    rm_booked_date: [],
  });
  datafillSuit.save().then((result) => {
    res.send(result);
  });
});

router.get("/type", (req, res) => {
  RoomType.find().then((result) => {
    res.send(result);
  });
});

router.get("/", middleware, async (req, res) => {
  const dataRoom = await Room.find()
    .populate({
      path: "rm_type",
      model: "RoomsType",
    })
    .select();
  res.status(200).json(dataRoom);
});

module.exports = router;
