define(function(require) {
  'use strict';

  var module = require('./module');
  require('./controller');
  require('./states');

  require('../dashboard/rest');

  return module;

});
