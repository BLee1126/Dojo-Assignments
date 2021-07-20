// Bring in the controls from the controller
const ProductController = require('../controllers/product_manager.controller');

module.exports = app =>{

    //homepage
    app.get('/api', ProductController.index);
    //create
    app.post('/api/products/create', ProductController.createProduct);
    // read all
    app.get('/api/products', ProductController.findAllProducts);
    // read one
    app.get('/api/products/:_id', ProductController.findOneProduct);
    // update
    app.put('/api/products/update/:_id', ProductController.updateProduct);
    // delete
    app.delete('/api/products/delete', ProductController.deleteProduct);
}

