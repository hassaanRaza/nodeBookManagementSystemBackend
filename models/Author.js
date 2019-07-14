const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    AuthorName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Author', AuthorSchema);