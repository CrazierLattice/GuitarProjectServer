const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  ID: String,
  password: String,
  city: String,
  street: String,
  role: { type: String, default: "user" },
});
const userModel = model("user", userSchema);

const insertAdmin = async () => {
  const admin = new userModel({
    first_name: "Michael",
    last_name: "Koinov",
    email: "crazierlattice@gmail.com",
    ID: "206645269",
    password: "$2y$10$2P.pVDOiczhnI/iYCMh/ke1gIahEeA7s4jYgBJakd6i8mpQdR8GmW",
    city: "Bat-Yam",
    street: "Hertzel",
    role: "admin",
  });
  await admin.save();
};

module.exports = { userModel, insertAdmin };
