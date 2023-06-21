const Book = require('../models/book');

module.exports = {
    index,
    show,
    new: newBook,
    create,
    edit,
    update,
    delete: deleteBook
};

async function index(req,res) {
  try {
    const books = await Book.find({});
    res.render('books/index', { books });
  } catch (err) {
    console.log(err);
    res.render('books/index', { errorMsg: err.message });
  }
}

async function show(req, res) {
  try {
   const book = await Book.findOne({ title: req.params.title });
   res.render('books/show', { book });
  } catch (err) {
    console.log(err);
    res.render('books/show', { errorMsg: err.message });
  }
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

 async function edit (req, res) {
    try {
      const book = await Book.findOne({ title: req.params.title });
      res.render('books/edit', { title: 'Edit To-Do', book });
    } catch (err) {
      console.log(err);
      res.render('books/edit', { errorMsg: err.message });
    }
  }

async function update(req, res) {
    try {
      await Book.findOneAndUpdate({title: req.params.title}, req.body);
      res.redirect('/books');
    } catch (err) {
      res.render(`/books/${req.params.title}/edit`, { errorMsg: err.message });
    }
  }

  async function deleteBook(req, res) {
    try {
      await Book.findOneAndRemove({ title: req.params.title });
      res.redirect('/books');
    }  catch (err) {
      res.render('/books', { errorMsg: err.message });
    }
  }
