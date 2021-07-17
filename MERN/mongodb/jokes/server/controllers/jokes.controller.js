const Joke = require("../models/jokes.model");

// BASIC CRUD COMMANDS

// CREATE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .then(console.log(req.body))
        .catch(err => res.json({message: "Something went wrong when creating a joke!!", error: err}))
}

// READ ONE
module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params._id})
        .then(singleJoke => res.json(singleJoke))
        .catch(err => res.json({message: "Something went wrong when finding one joke!!", error: err}))
}

// READ ALL
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJoke => res.json(allJoke))
        .catch(err => res.json({message: "Something went wrong when finding all the jokes!!", error: err}))
}

// UPDATE
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({message: "Something went wrong when updating the joke!!", error: err}))
}

// DELETE
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.json({message: "Something went wrong when deleting the joke!!", error: err}))
}