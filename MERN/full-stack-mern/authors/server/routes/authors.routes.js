const AuthorController = require('../controllers/authors.controller');

module.exports = app =>{

    //create
    app.post('/api/authors/create', AuthorController.createAuthor);
    // read all
    app.get('/api/authors', AuthorController.findAllAuthors);
    // read one
    app.get('/api/authors/:_id', AuthorController.findOneAuthor);
    // update
    app.put('/api/authors/update/:_id', AuthorController.updateAuthor);
    // delete
    app.delete('/api/authors/delete/:_id', AuthorController.deleteOneAuthor);
}