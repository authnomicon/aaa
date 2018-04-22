exports = module.exports = function() {
  var klamm = require('klamm');
  
  
  return function() {
    return klamm.login();
  };
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/aaa/middleware/login';
