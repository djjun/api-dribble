define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('DashboardCtrl', DashboardCtrl);

  //---

  DashboardCtrl.$inject = ['ShotResource'];

  function DashboardCtrl(ShotResource) {
    var vm = this,
        currentPage = 1;

    vm.data = [];
    vm.load = true;

    vm.init = initFn;
    vm.loadMoreShots = loadMoreShotsFn;

    function initFn(){
      // Lista os dados do dashboard começando da pagina 1
      getShotsFn(1);
    }

    // Buscas os shots conforme a pagina
    function getShotsFn(_page){
      ShotResource.getShots({page: _page}, function(response){
        // Concatena os dados vindos da API
        vm.data = vm.data.concat(response);
        vm.load = false;
      });
    }

    // Atribui mais shots ao DATA
    function loadMoreShotsFn() {
      vm.load = true;
      currentPage = currentPage + 1;
      getShotsFn(currentPage);
    }

  }

});
