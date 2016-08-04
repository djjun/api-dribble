define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('DashboardCtrl', DashboardCtrl);

  //---

  DashboardCtrl.$inject = ['ShotResource'];

  function DashboardCtrl(ShotResource) {
    var vm = this;

    vm.data = [];

    vm.init = initFn;

    function initFn(){
      //Lista os dados do dashboard
      ShotResource.getShots( function(response){
        vm.data = response;
        console.log(response);
      });
    }



    // TODO: review

  }

});
