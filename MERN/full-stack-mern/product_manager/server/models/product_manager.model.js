const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, 'Title is required!']
    },
    price: { 
        type: Number,
        required: [true, 'Price is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minlength: [5, "Description must be at least 5 characters!"],
        maxlength: [1000, 'Description must be less than 1000 characters!']
    }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product;



