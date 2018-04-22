exports = module.exports = function(IoC, login, logger) {
  var klamm = require('klamm');
  
  
  var service = klamm();
  service.use(login());
  
  service.use(function(req, txn, err) {
    console.log('???');
    return txn.allow();
  });
  
  
  // TODO: Introspect the container and load up proper authorization models.
  //       For example, token-based models, etc.   This should actually go into
  //       bixby-security.  Authnomicon is for the authorization server (aka PDP)
  
  return Promise.resolve(service)
    .then(function(service) {
      return service;
    });
};

exports['@require'] = [
  '!container',
  'http://schemas.authnomicon.org/js/aaa/middleware/login',
  'http://i.bixbyjs.org/Logger'
];
