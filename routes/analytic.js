const express = require('express');
const controller = require('../controllers/analytic')
const router = express.Router();

router.get('/analytic', controller.analytic)
router.get('/overviev', controller.overviev)

module.exports = router;