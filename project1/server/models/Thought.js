const mongoose = require("mongoose");

//model
const ThoughtSchema = mongoose.Schema({
  thought: String,
  dateCreated: Date,
});

// modeling the model itself

const Thought = mongoose.model("Thought", ThoughtSchema);

module.exports = Thought;
