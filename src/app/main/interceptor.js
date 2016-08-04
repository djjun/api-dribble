define(function(require) {
  'use strict';

  var module = require('./module');

  module.factory('Interceptor', Interceptor);

  Interceptor.$inject = [];

  function Interceptor(){

    var auth = {
      request: requestFn
    };

    return auth;

    function requestFn(config){
      //seta os headers

      config.headers.Authorization = 'Bearer e0cffaf8c22616e3a834451baa5854371327f4a49b9673454c9a3b9b854df64c';

      return config;
    }

  }
});
