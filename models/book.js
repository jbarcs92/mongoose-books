const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    category: {
        type: String,
        enum: ['Horror', 'Romance', 'Science Fiction', 'Non-Fiction', 'Children']
    },
    price: {
        type: Number,
        min: 10,
        max: 50
    }
    //add buttons for update and delete
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);


