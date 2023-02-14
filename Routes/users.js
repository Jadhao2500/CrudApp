const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.send("Eroor", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.send("Eroor", error);
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });
  try {
    const user1 = await user.save();
    res.json(user1);
  } catch (error) {
    res.send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.sub = req.body.sub;
    const u1 = await user.save();
    res.json(u1);
  } catch (error) {
    res.send("Eroor", error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const u1 = await user.remove();
    res.send("user Deleted");
  } catch (error) {
    res.send("Eroor", error);
  }
});

module.exports = router;
