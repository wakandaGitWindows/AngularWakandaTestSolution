'use strict';

/**
 * @ngdoc overview
 * @name testAppApp
 * @description
 * # testAppApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
   
    'ngRoute',
    'wakanda'
  ])
  .config(function ($routeProvider) {
    var routeResolver = {
          app : ['$wakanda',function($wakanda){
                  return $wakanda.init();
              }]
          }
    $routeProvider
      .when('/', {
        templateUrl: 'views/mainMenu.html',
        controller: ''
      })
       
     
     	.when('/authentification', {
        templateUrl: 'views/authentification.html',
        controller: 'authentification',
        resolve : routeResolver
      })
     
     
     	.when('/test', {
        templateUrl: 'views/test.html',
        controller: 'test',
        resolve : routeResolver
      })
     
      .when('/dcMethods', {
        templateUrl: 'views/dcmethods.html',
        controller: 'DcmethodsCtrl',
        resolve : routeResolver
      })
      
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'test',
        resolve : routeResolver
      })
     
      .when('/ecmethods', {
        templateUrl: 'views/ecmethods.html',
        controller: 'ecmethods',
        resolve : routeResolver        
      })
      .when('/entityMethods', {
        templateUrl: 'views/entitymethods.html',
        controller: 'EntitymethodsCtrl',
        resolve : routeResolver
      })
     
      .otherwise({
        redirectTo: '/'
      });
      
  });
