const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BookSchema = new schema({
    BookName: {
        type: String,
        required: true
    },
    BookDescription: String,
    CreatedAt: Date,
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
});

module.exports = mongoose.model('Book', BookSchema);