define(function(require) {
  'use strict';

  var module = require('./module');
  require('./apiRoot');
  require('./controller');
  require('./states');

  return module;

});
