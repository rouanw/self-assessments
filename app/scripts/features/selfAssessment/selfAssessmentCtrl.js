'use strict';

angular.module('coachingApp')
  .controller('SelfAssessmentCtrl', function ($scope, SelfAssessment) {
    SelfAssessment.getTeam().then(function (team) {
      $scope.team = team;
    });
  });
