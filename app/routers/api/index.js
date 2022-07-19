const express = require('express');
const debug = require('debug')('router index');
const verifyToken = require('../../helpers/verifyToken');

const userRouter = require('./user');
const signinRouter = require('./signin');

const { ApiError } = require('../../helpers/errorHandler');

const router = express.Router();

router.use((_, res, next) => {
  res.type('json');
  next();
});

// On préfixe les routers de l'API
router.use('/signin', signinRouter);
router.use('/users', userRouter);

router.use(() => {
  debug('route not found');
  throw new ApiError('API Route not found', { statusCode: 404 });
});

module.exports = router;
