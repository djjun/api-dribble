define(function(require) {
  'use strict';

  var module = require('./module');
  require('./apiRoot');
  require('./interceptor');
  require('./config');
  require('./controller');
  require('./states');

  return module;

});
