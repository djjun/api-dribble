define(function(require) {
  'use strict';

  var angular = require('angular');

  require('uiRouter');
  require('uiBootstrap');
  require('ngMaterial');

  // angular module definition
  return angular.module(
    // module name
    'main',

    // module dependencies
    [
      'ui.router',
      'ui.bootstrap',
      'ngMaterial',

      require('./tpl/cache').name,

      require('app/dashboard/package').name,
      require('app/shot/package').name

    ]
  );

});
