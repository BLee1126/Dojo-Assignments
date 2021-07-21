const Product  = require('../models/product_manager.model');
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}


// Create
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .then(console.log(res))
        .catch(err => res.json({message: 'error creating a product!', err: err}));
}

// Read all
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: 'error finding all products!', err: err}));
}
// Read One
module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json({message: 'error finding one product!', err: err}));
}
// Update
module.exports.updateProduct = (req, res) => {
    Product.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(updateProduct => res.json(updateProduct))
        .catch(err => res.json({message: 'error updating one product!', err: err}));
}
// Delete
module.exports.deleteOneProduct = (req, res) => {
    Product.deleteOne({_id: req.params._id})
        .then(res.json({message: 'Product was successfully removed!!'}))
        .catch(err => res.json({message: 'error deleting a product!', err: err}));
}