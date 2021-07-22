const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [true, 'First Name is required!'],
        minlength: [3, "First Name must be at least 3 characters!"]
    },
    lastName: { 
        type: String,
        required: [true, 'Last Name is required!'],
        minlength: [3, "Last Name must be at least 3 characters!"]
    },

}, { timestamps: true });

const Authors = mongoose.model("Product", AuthorsSchema)
module.exports = Authors;
