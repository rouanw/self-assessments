'use strict';

/**
 * @ngdoc overview
 * @name coachingApp
 * @description
 * # coachingApp
 *
 * Main module of the application.
 */
angular
  .module('coachingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/features/selfAssessment/self-assessment.html',
        controller: 'SelfAssessmentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
