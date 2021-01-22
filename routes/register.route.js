const router = require("express").Router();
const { userModel } = require("../models/user.model");
const bcrypt = require("bcryptjs");
//Register route

router.post("/", async (req, res) => {
  try {
    const {
      ID,
      email,
      password,
      city,
      street,
      first_name,
      last_name,
    } = req.body;
    const existingUser = await userModel.find({ email });
    if (existingUser.length)
      return res
        .status(406)
        .json({ error: true, message: "User already exists." });
    const hashedPassword = bcrypt.hashSync(password, 10);
    let registeredUser = new userModel({
      first_name,
      last_name,
      ID,
      city,
      street,
      email,
      password: hashedPassword,
    });
    registeredUser = await registeredUser.save();
    return res.status(201).json({ error: false, registeredUser });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
