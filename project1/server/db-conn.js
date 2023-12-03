const mongoose = require("mongoose");

const { Mongo_URI } = process.env;

mongoose
  .connect(Mongo_URI)
  .then(() => console.log("Succesfylly connected to the DB 😊👍..."))
  .catch(console.error);
