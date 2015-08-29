'use strict';

angular.module('coachingApp')
  .controller('SelfAssessmentCtrl', function ($scope, SelfAssessment) {
    $scope.teamUrl = 'http://raw.githubusercontent.com/rouanw/self-assessments/master/app/users.json';
    $scope.getPeople = function(url) {
      SelfAssessment.getPeople(url).then(function (people) {
        $scope.people = people;
      });
    };
    $scope.showDetail = true;
  });
