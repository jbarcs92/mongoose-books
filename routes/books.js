var express = require('express');
var router = express.Router();

const booksCtrl = require('../controllers/books');

router.get('/', booksCtrl.index);
router.get('/new', booksCtrl.new);
router.get('/:title/edit', booksCtrl.edit);
router.get('/:title', booksCtrl.show);
router.post('/', booksCtrl.create);
router.put('/:title', booksCtrl.update);
router.delete('/:title', booksCtrl.delete);


module.exports = router;
