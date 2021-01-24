const { connect } = require("mongoose");

const ConnectToDb = async () => {
  try {
    connect("mongodb://localhost/GuitarShop", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connected to mongo.");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { ConnectToDb };
