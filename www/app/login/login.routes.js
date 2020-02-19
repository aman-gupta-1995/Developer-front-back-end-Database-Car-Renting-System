(function() {
  'use strict';

  angular
    .module('app.login')
    .config(config);

  /* @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm',
        cache: false
      });
  }
})();
