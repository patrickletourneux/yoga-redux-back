const debug = require('debug')('service sanitize');
const DOMPurify = require('isomorphic-dompurify');

module.exports = (prop) => async (request, _, next) => {
  Object.keys(request[prop]).forEach((item) => {
    request[prop][item] = DOMPurify.sanitize(request[prop][item]);
  });
  debug(request[prop]);

  next();
};
