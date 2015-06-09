'use strict';

/**
 * @ngdoc function
 * @name coachingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the coachingApp
 */
angular.module('coachingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
