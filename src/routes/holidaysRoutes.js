'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../app/controllers/holidaysController');
const authMiddleware = require('../app/middlewares/auth');

router.use(authMiddleware);
router.post('/', controller.holidays);

module.exports = router;
