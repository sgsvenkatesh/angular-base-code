
'use strict';

angular.module('wmApp', [
    'ui.router'
]);

angular.module('wmApp')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': {
                    templateUrl : './app/views/header.html'
                },
                'content':{
                    templateUrl : './app/views/home.html'
                }
            }
        });

    $urlRouterProvider.otherwise('/');
}]);
