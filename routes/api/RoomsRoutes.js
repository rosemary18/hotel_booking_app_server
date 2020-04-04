const express = require("express");
const router = express.Router();

// Models
const { Room, RoomType } = require("../../model");

// Routes

// @Get TEST
router.get("/fill", (req, res) => {
  const datafill = new Room({
    rm_type: "5e8725718c3819314cd62cd0",
    rm_available: true,
    rm_number: 103,
    rm_max_person: {
      adult: 2,
      children: 3
    },
    rm_price: 50,
    rm_inventory: ["WI-FI", "Hot Water"]
  });
  datafill.save().then(result => {
    res.send(result);
  });
});

router.get("/type", (req, res) => {
  RoomType.find().then(result => {
    res.send(result);
  });
});

router.get("/", (req, res) => {
  Room.find().then(result => {
    res.send(result);
  });
});

module.exports = router;
