'use strict';
/*global moment:true */
/**
 * @ngdoc function
 * @name coachingApp.controller:SelfassessmentCtrl
 * @description
 * # SelfassessmentCtrl
 * Controller of the coachingApp
 */
angular.module('coachingApp')
  .controller('SelfAssessmentCtrl', function ($scope, $http) {
    var request = {method: 'GET', url: 'data.json', data: {}};
    $http(request).then(function(result) {
      $scope.team = result.data.team;
    });
  })
  .filter('durationInMonths', function() {
    return function (fromDate) {
      return moment().diff(moment(fromDate), 'months');
    };
  });
