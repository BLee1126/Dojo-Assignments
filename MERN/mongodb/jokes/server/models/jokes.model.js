// bring in mongoose
const mongoose = require("mongoose");

// This is where we make our model
const JokesSchema = new mongoose.Schema({
    joke: String,
    punch_line: String
});
// Finalize setting up my model
const Joke = mongoose.model("Joke", JokesSchema);
// We need to export this to other areas of my project

module.exports = Joke;
