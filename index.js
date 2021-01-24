//Imports
require("dotenv").config();
const { categoryModel } = require('./models/category.model')
const { ConnectToDb } = require("./dbsetup/dbconfig");
const express = require("express");
const cors = require("cors");
const { insertAdmin } = require('./models/user.model')
const { insert_categories_toDB } = require('./dbsetup/categories_insert')
//Setup and middlewares
ConnectToDb();
const app = express();
// insertAdmin()
// insert_categories_toDB()
app.use(express.json());
app.use(cors());
app.use("/login", require("./routes/login.route"));
app.use("/register", require("./routes/register.route"));
app.get('/', async (req, res) => res.json(await categoryModel.find({ name: 'Electric Guitars' })))
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Running on port ${PORT} `));
