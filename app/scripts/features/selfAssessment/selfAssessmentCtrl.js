'use strict';

angular.module('coachingApp')
  .controller('SelfAssessmentCtrl', function ($scope, SelfAssessment) {
    SelfAssessment.getPeople().then(function (people) {
      $scope.people = people;
    });
    SelfAssessment.getTeams().then(function (teams) {
      $scope.teams = teams;
    });
  });
