const debug = require('debug')('verifyToken');
const jwt = require('jsonwebtoken');
const { ApiError } = require('./errorHandler');

module.exports = {
  InReqAuthorisation(req, res, next) {
    debug('verifyToken:');
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
      jwt.verify(req.token, process.env.SECRETKEYJWT, (err, authData) => {
        if (err) {
          debug('token non valid');
          throw new ApiError('token not valid', { statusCode: 401 });
        } else {
          debug('token is valid');
          const decoded = jwt.decode(req.token, {
            complete: true,
          });
          res.tokenUserId = decoded.payload.user.id;
          res.tokenHomeId = decoded.payload.user.home_id;
          next();
        }
      });
    } else if (process.env.TOKEN_VERIFY_ACTIV === 'N') {
      debug('ATTENTION test token non actif');
      next();
    } else {
      debug('no token received in backend');
      throw new ApiError('no token received in backend', { statusCode: 401 });
    }
  },
};
