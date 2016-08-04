define(function(require) {
  'use strict';

  var angular = require('angular');

  require('uiRouter');
  require('angularResource');

  // angular module definition
  return angular.module(
    // module name
    'shot',

    // module dependencies
    [
      'ui.router',
      'ngResource'
    ]
  );

});
