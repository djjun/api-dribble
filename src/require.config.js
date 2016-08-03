require({

  // libraries dependencies (fallback support)
  paths: {

    'jquery': [
      'vendor/jquery/2.1.4/jquery.min'
    ],

    'angular': [
      'vendor/angular.js/1.5.7/angular.min'
    ],

    'angularResource': [
      'vendor/angular.js/1.5.7/angular-resource.min'
    ],

    'angularAnimate': [
      'vendor/angular.js/1.5.7/angular-animate.min'
    ],

    'angularAria': [
      'vendor/angular.js/1.5.7/angular-aria.min'
    ],

    'ngMaterial': [
      'vendor/angular-material/1.1.0/angular-material.min'
    ],

    'bootstrap': [
      'vendor/bootstrap/3.3.5/bootstrap.min'
    ],

    'uiBootstrap': [
      'vendor/angular-ui/bootstrap/0.13.3/ui-bootstrap-tpls.min'
    ],

    'uiRouter': [
      'vendor/angular-ui/ui-router/0.2.15/angular-ui-router.min'
    ]

  },

  // define js scripts dependencies
  shim: {

    'bootstrap': {
      deps: ['jquery']
    },

    'angular': {
      deps: ['bootstrap'],
      exports: 'angular'
    },

    'angularResource': {
      deps: ['angular']
    },

    'angularAnimate': {
      deps: ['angular']
    },

    'angularAria': {
      deps: ['angular']
    },

    'ngMaterial': {
      deps: ['angular', 'angularAria', 'angularAnimate']
    },

    'uiBootstrap': {
      deps: ['bootstrap', 'angular']
    },

    'uiRouter': {
      deps: ['angular']
    }

  },

  priority: [
    'angular'
  ],

  deps: ['./app']

});
