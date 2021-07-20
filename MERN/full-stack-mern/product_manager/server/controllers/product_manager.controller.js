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
        .catch(err => res.json('error creating a product!', err));
}

// Read all
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json('error finding all products!', err));
}
// Read One
module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json('error finding one product!', err));
}
// Update
module.exports.updateProduct = (req, res) => {
    Product.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json('error updating one product!', err));
}
// Delete
module.exports.deleteProduct = (req, res) => {
    Product.remove({_id: req.params._id})
        .then(res.json({message: 'Product was successfully removed!!'}))
        .catch(err => res.json('error deleting a product!', err));
}