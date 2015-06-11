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
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/features/selfAssessment/self-assessments.html',
        controller: 'SelfAssessmentCtrl'
      })
      .when('/teams', {
        templateUrl: 'scripts/features/team/team.html',
        controller: 'SelfAssessmentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
