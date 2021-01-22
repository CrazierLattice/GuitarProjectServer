//Imports
require("dotenv").config();
const { ConnectToDb } = require("./dbconfig");
const express = require("express");
const cors = require("cors");

//Setup and middlewares
ConnectToDb();
const app = express();
// insertAdmin();
app.use(express.json());
app.use(cors());
app.use("/login", require("./routes/login.route"));
app.use("/register", require("./routes/register.route"));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Running on port ${PORT} `));
