//Get db
const db = require('./db');
//End

//Get Author from db
const Author = db.Author;
//End

//Get Book from db
const Book = db.Book;
//End

//Initialize express
var express = require('express');
var app = express();
//End

//Initialize port
const port = 3001;
//End

//Middleware for parse req.body into JSON in express server
app.use(express.json());
//End

//Enable Cors//
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//End

//Make REST Api for Author

//Get
app.get('/authors', async (req, res) => {
    try {
        const authors = await Author.find();
        res.send(authors);
    }
    catch (err) {
        res.send(err);
    }

});
//End

//GetById
app.get('/author/:id', async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        res.send(author);
    }
    catch (err) {
        res.send(err.message);
    }

});
//End

//Create
app.post('/author', async (req, res) => {
    try {
        const AddAuthor = await Author.create(req.body);
        res.send(AddAuthor);
    }
    catch (err) {
        res.send(err.message);
    }

});
//End

//Update
app.put('/author/:id', async (req, res) => {
    try {
        const UpdateAuthor = await Author.findByIdAndUpdate(req.params.id, req.body);
        res.send(UpdateAuthor);
    }
    catch (err) {
        res.send(err.message);
    }

})
//End

//Delete
app.delete('/author/:id', async (req, res) => {
    try {
        const DeleteAuthor = await Author.deleteOne({ _id: req.params.id });
        res.send(DeleteAuthor);
    }
    catch (err) {
        res.send(err.message);
    }

});
//End

//End

//------------------------------------------------------------------------------------------------//

//Make REST Api for Book

//Get
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find().populate('Author');
        res.send(books);
    }
    catch (err) {
        res.send(err);
    }

});
//End

//GetById
app.get('/book/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('Author');
        res.send(book);
    }
    catch (err) {
        res.send(err.message);
    }

});
//End

//Create
app.post('/book', async (req, res) => {
    try {
        req.body.CreatedAt = new Date();
        const AddBook = await Book.create(req.body);
        res.send(AddBook);
    }
    catch (err) {
        res.send(err.message);
    }

});
//End

//Update
app.put('/book/:id', async (req, res) => {
    try {
        const UpdateBook = await Book.findByIdAndUpdate(req.params.id, req.body);
        res.send(UpdateBook);
    }
    catch (err) {
        res.send(err.message);
    }

})
//End

//Delete
app.delete('/book/:id', async (req, res) => {
    try {
        const DeleteBook = await Book.deleteOne({ _id: req.params.id });
        res.send(DeleteBook);
    }
    catch (err) {
        res.send(err.message);
    }

});
//End

//End

//-----------------------------------------------------------------------------------------------//

//Listen port start node server
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
//End

