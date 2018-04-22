exports = module.exports = function(service) {
  var klamm = require('klamm');
  
  
  var api = {};
  
  api.request = function(options, cb) {
    // TODO: better gatewaying system.  this one is abstract
    var req = new klamm.Request(options, function() {
      var res = new klamm.Response();
      cb(res);
      
      // TODO: Out handler to fail the request with error.
      process.nextTick(function() {
        service(req, res);
      })
    });
    
    return req;
  }
  
  return api;
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/aaa';
exports['@singleton'] = true;
exports['@require'] = [
  './service'
];
