const express = require('express');
const router = express.Router();
const { getMovies, createMovie, updateMovie, deleteMovie, getMovie } = require('../controllers/movieController');
const { getComments } = require ('../controllers/commentController')
const authMiddleware = require('../middleware/authMiddleware')


router.get('/', getMovies);
router.get('/:id', getMovie);
router.get('/:id/comments', getComments);



router.post('/',authMiddleware, createMovie);
router.put('/:id',authMiddleware, updateMovie);

router.delete('/:id',authMiddleware, deleteMovie);

module.exports = router;
