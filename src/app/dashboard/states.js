define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(ConfigureStates);

  //---

  ConfigureStates.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ];

  function ConfigureStates($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        views: {
          'master': {
            templateUrl   : 'app/main/tpl/layout.html'
          },
          'content@dashboard': {
            templateUrl   : 'app/dashboard/tpl.html',
            controller    : 'DashboardCtrl',
            controllerAs  : 'vm'
          }
        }
      });

  }

});
