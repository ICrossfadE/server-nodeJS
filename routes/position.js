const express = require('express');
const controller = require('../controllers/position')
const router = express.Router();

router.get('/:categoryId', controller.getById)
router.get('/', controller.create)
router.delete('/:id', controller.remove)
router.patch('/:id', controller.update)

module.exports = router;