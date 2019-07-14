const mongoose = require('mongoose');
const connection = require('./config.json');
const Author = require('./models/Author');
const Book = require('./models/Book');

mongoose.connect(process.env.Mongo_DB || connection.connectionString, {useNewUrlParser: true}).then(
    ()=>{
        console.log('Connected!');
    },
    (err)=>{
        console.log(err, 'error in connection');
    }
);

module.exports = {
    Author,
    Book
}