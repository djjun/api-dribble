define(function(require) {
  'use strict';

  var module = require('./module');

  module.config( Config );

  Config.$inject = ['$httpProvider'];

  function Config( httpProvider ){
    httpProvider.interceptors.push('Interceptor');
  }
});
