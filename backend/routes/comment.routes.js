const express = require('express');
const { createComment } = require ('../controllers/commentController')

const authMiddleware = require('../middleware/authMiddleware')
router = express();

router.post('/', authMiddleware, createComment)


module.exports = router;