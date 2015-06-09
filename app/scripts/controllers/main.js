'use strict';

/**
 * @ngdoc function
 * @name coachingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coachingApp
 */
angular.module('coachingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
