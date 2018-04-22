exports = module.exports = function(service) {
  var api = service;
  
  return api;
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/aaa';
exports['@singleton'] = true;
exports['@require'] = [
  './service'
];
