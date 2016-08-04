define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(ConfigureStates);

  //---

  ConfigureStates.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ];

  function ConfigureStates($stateProvider) {

    $stateProvider
      .state('shot', {
        url: '/shot/:id',
        views: {
          'master': {
            templateUrl   : 'app/main/tpl/layout.html'
          },
          'content@shot': {
            templateUrl   : 'app/shot/tpl.html',
            controller    : 'ShotCtrl',
            controllerAs  : 'vm'
          }
        },
        resolve: {
          shot: ['ShotResource','$stateParams', function(ShotResource, $stateParams) {
            return ShotResource.getSingleShot({id: $stateParams.id}, function (response) {
              console.log('single', response);
              return response;
            });
          }]
        }
      });

  }

});
