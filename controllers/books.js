const Book = require('../models/book');

module.exports = {
    index,
    new: newBook,
    create,
    update,
    delete: deleteBook
};

async function index(req,res) {
    const books = await Book.find({});
    res.render('books/index', { books });
}

function newBook(req,res) {
    res.render('books/new', { errorMsg: '' });
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
        }
    try {
        await Book.create(req.body);
        res.redirect('/books');
    } catch (err) {
        console.log(err);
        res.render('books/new', { errorMsg: err.message });
    }
}

async function update(req, res) {
    try {
      await Book.findByIdAndUpdate(req.params.id, req.body, {new:true})
      res.redirect(`/books/${req.params.id}`);
    }  catch (err) {
      res.render(`/books/${req.params.id}/edit`, { errorMsg: err.message });
    }
  }

  async function deleteBook(req, res) {
    try {
      await book.findByIdAndRemove(req.params.id);
      res.redirect('/books');
    }  catch (err) {
      res.render('/books', { errorMsg: err.message });
    }
  }
