const express = require('express');

const apiRouter = require('./api');

const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

// On préfixe les routers
router.use('/api/v1', apiRouter);

// all error will be catched here
router.use((err, _, response, next) => {
  errorHandler(err, response, next);
});

module.exports = router;
