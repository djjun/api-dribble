define(function(require) {
  'use strict';

  var module = require('./module');

  module.factory( 'ShotResource', ShotResource );

  ShotResource.$inject = [ '$resource', 'BACKEND_API_URL_ROOT' ];

  function ShotResource( $resource, apiRoot ) {

    //VERSÃO DA API
    var restPath = apiRoot + '/v1';

    var rest = $resource(restPath, {}, {
      getShots: { method: 'GET', url: restPath + '/shots', isArray: true},
      getSingleShot: { method: 'GET', url: restPath + '/shots/:id'}
      // insert: { method: 'POST', url: restPath + '/:idGrupo/tipo/:tipo', isArray : true },
      //
      // getPermissao: { method: 'GET', url: restPath + '/:idGrupo' },
      // postPermissao: { method: 'POST', url: restPath + '/:idGrupo'}


    });

    return rest;
  }
});
