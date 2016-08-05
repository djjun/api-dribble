define(function(require) {
  'use strict';

  var angular = require('angular');

  return angular.module('component',

    [
      require('./shotCard/package').name
    ]
  );

});
