const mongoose = require("mongoose");

const URL = process.env.SERVER_LINK;

const ConnectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Disconnected");
    process.exit(1);
  }
};

module.exports = ConnectDB;
