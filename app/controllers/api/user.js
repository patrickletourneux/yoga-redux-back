const bcrypt = require('bcrypt');
const debug = require('debug')('user controller');
const jwt = require('jsonwebtoken');
// const userDataMapper = require('../../datamappers/user');
const { ApiError } = require('../../helpers/errorHandler');

module.exports = {

  /**
     * user controller to post a new user.
     * ExpressMiddleware signature
     * @param {object} req Express request object (not used)
     * @param {object} res Express response object
     * @returns {User} Route API JSON response
     */
  async createOne(req, res) {
    debug('dans createOne');
    return res.status(200).json({
        user: {
          id: 'information in req.body',
          email: req.body.email,
          pseudonym: req.body.pseudonym,
        },
      });

    // debug('req.body.email ', req.body.email);
    // // look if a user already exits with this email
    // const user = await userDataMapper.findOneByEmail(req.body.email);
    // if (user) {
    //   debug('user deja existant avec cet email pas possible de cree');
    //   throw new ApiError('Un compte est déjà associé à cette adresse mail', { statusCode: 409 });
    // }
    // debug('pas de user trouvé, user à creer dans bdd');
    // // encrypt password with bcrypt
    // req.body.password = await bcrypt.hash(req.body.password, 10);
    // const newUser = await userDataMapper.insert(req.body);
    // return res.status(200).json({
    //   user: {
    //     id: newUser.id,
    //     email: newUser.email,
    //     pseudonym: newUser.pseudonym,
    //   },
    // });
  },

};
