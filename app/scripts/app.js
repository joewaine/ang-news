/* global app:true */
/* exported app */

'use strict';

/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
 .when('/', {
      templateUrl: 'views/posts.html',
      controller: 'PostsCtrl'
    })
   .when('/posts/:postId', {
    templateUrl: 'views/showpost.html',
    controller: 'PostViewCtrl'
  })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('angNewsApp').constant('FIREBASE_URL', 'https://sizzling-torch-563.firebaseio.com/');



