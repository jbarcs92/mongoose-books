var express = require('express');
var router = express.Router();

const booksCtrl = require('../controllers/books');

router.get('/', booksCtrl.index);
router.get('/new', booksCtrl.new);
router.post('/', booksCtrl.create);
router.get('/:title', booksCtrl.show);
//add routers for edit, update, and delete

module.exports = router;
