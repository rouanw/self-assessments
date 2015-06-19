'use strict';

angular.module('coachingApp')
  .controller('SelfAssessmentCtrl', function ($scope, SelfAssessment) {
    SelfAssessment.getPeopleFromGitHub().then(function (people) {
      $scope.people = people;
    });
    $scope.showDetail = true;
  });
