'use strict';

angular.module('coachingApp')
  .controller('SelfAssessmentCtrl', function ($scope, $http) {
    var request = {method: 'GET', url: 'data.json', data: {}};
    $http(request).then(function(result) {
      $scope.team = result.data.team;
    });
  });
