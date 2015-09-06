'use strict';

/**
 * @ngdoc overview
 * @name googleMusicMakerApp
 * @description
 * # googleMusicMakerApp
 *
 * Main module of the application.
 */
angular

.module('googleMusicMakerApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',

  'uiGmapgoogle-maps'
])
.config(function ($routeProvider, uiGmapGoogleMapApiProvider, API_KEYS) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  uiGmapGoogleMapApiProvider.configure({
    key: API_KEYS.googleMaps,
    v: '3.20', //defaults to latest 3.X anyhow
    libraries: 'weather,geometry,visualization'
  });
});
