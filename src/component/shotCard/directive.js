define(function(require) {

  'use strict';

  var module = require('./module');

  module.directive('shotCard', shotCard);

  shotCard.$inject = ['$state'];

  function shotCard( $state ){

    var scope = {
      data : '=',
      onClickItem : '&'

    };

    var directive = {
      restrict: 'E',
      scope: scope,
      link: linkFn,
      template: templateFn
    };

    return directive;

    function linkFn( scope, element, attrs, ctrl){

      scope.onClickItem = onClickItemFn;

      // Abre a pagina do shot
      function onClickItemFn(_id) {
        // Muda para a URL dos detalhes
        $state.go('shot', {id: _id});
      }

    }

    function templateFn() {
      return [
        '<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2" ng-repeat="item in data" >',
        ' <div class="row">',
        '   <md-card flex ng-click="onClickItem(item.id)" class="md-whiteframe-4dp">',
        '     <img ng-src="{{item.images.teaser}}" class="img-responsive md-card-image" alt="user avatar">',
        '     <md-card-content>',
        '       <p layout="row" layout-align="end center"><i class="material-icons" style="margin-right: 6px;">visibility</i>  {{item.likes_count}}</p>',
        '     </md-card-content>',
        '   </md-card>',
        ' </div>',
        '</div>'
      ].join(' ');
    }

  }

});
