const debug = require('debug')('service sanitize');
const DOMPurify = require('isomorphic-dompurify');

const sanitizeRequest = (prop, request) => {
  if (Object.keys(request).length > 0 ) {
    Object.keys(request[prop]).forEach((item) => {
      request[prop][item] = DOMPurify.sanitize(request[prop][item]);
    });
    return request;
  } else {
    return 'empty boby';
  }
};



const sanitizeReqDomPurify = (prop) => async (request, _, next) => {
  debug('dans sanitize request');
  if (prop ==='body'){
    request = sanitizeRequest(prop, request);
  }
  next();
};

module.exports = {
  sanitizeReqDomPurify,
  sanitizeRequest
};