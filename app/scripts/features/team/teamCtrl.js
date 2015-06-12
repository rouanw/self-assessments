'use strict';

angular.module('coachingApp')
  .controller('TeamCtrl', function ($scope, SelfAssessment) {
    SelfAssessment.getTeams().then(function (teams) {
      $scope.teams = teams;
      $scope.selectedTeam = teams[0];
    });
  });
