define(function(require) {
  'use strict';

  var angular = require('angular');

  require('uiRouter');
  require('angularResource');

  // angular module definition
  return angular.module(
    // module name
    'dashboard',

    // module dependencies
    [
      'ui.router',
      'ngResource'
    ]
  );

});
