define(function(require) {
  'use strict';

  var module = require('./module');
  require('./controller');
  require('./rest');
  require('./states');

  return module;

});
