const Author  = require('../models/authors.model');

// Create
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .then(console.log(res))
        .catch(err => res.json({message: 'error creating an Author!', err: err}));
}


// Read all
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({message: 'error finding all authors!', err: err}));
}
// Read One
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params._id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json({message: 'error finding one Author!', err: err}));
}
// Update
module.exports.updateAuthor = (req, res) => {
    Author.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(updateAuthor => res.json(updateAuthor))
        .catch(err => res.json({message: 'error updating one Author!', err: err}));
}
// Delete
module.exports.deleteOneAuthor = (req, res) => {
    Author.deleteOne({_id: req.params._id})
        .then(res.json({message: 'Author was successfully removed!!'}))
        .catch(err => res.json({message: 'error deleting an Author!', err: err}));
}