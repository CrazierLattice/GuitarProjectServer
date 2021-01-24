const router = require("express").Router();
require("dotenv").config();
const { userModel } = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//Login route
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(405)
        .json({ error: true, message: "Please fill all the required fields." });
    let user = await userModel.find({ email: username });
    if (!user.length)
      return res
        .status(404)
        .json({ error: true, message: "Wrong username or password" });
    const verifiedPassword = await bcrypt.compare(password, user[0].password);
    if (!verifiedPassword)
      return res
        .status(404)
        .json({ error: true, message: "Wrong username or password" });
    //If verifeiedPassword - generate an access token and returns it to the client with the user data
    console.log(req.body);
    const token = jwt.sign({ user }, process.env.SECRET_CODE, {
      expiresIn: "7d",
    });
    res.json({ error: false, user, token });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
