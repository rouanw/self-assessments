'use strict';

angular.module('coachingApp')
  .controller('SelfAssessmentCtrl', function ($scope, SelfAssessment) {
    SelfAssessment.getPeople().then(function (people) {
      $scope.people = people;
      $scope.teamNames = _.uniq(_.map($scope.people, function (person) {
        return person.currentTeam;
      }));
      $scope.updateTeam = function(teamName) {
        $scope.selectedTeam = _.filter($scope.people, function (person){
          return person.currentTeam === teamName;
        })
      };
    });
  });
