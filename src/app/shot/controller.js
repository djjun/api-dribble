define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('ShotCtrl', ShotCtrl);

  //---

  ShotCtrl.$inject = ['shot'];

  function ShotCtrl(shot) {
    var vm = this;


    // TODO: review

    vm.shot = shot;

  }

});
