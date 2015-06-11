'use strict';

angular.module('coachingApp')
  .controller('SelfAssessmentCtrl', function ($scope, $http) {
    var request = {method: 'GET', url: 'data.json', data: {}};
    $http(request).then(function(result) {
      $scope.team = result.data.team;

      $scope.team.forEach(function (person) {
        person.summary = {
          category: 'Summary',
          ratings: [
            {
              data: []
            }
          ],
          labels: []
        };
        person.assessments.forEach(function (assessment) {
          var currentRating = assessment.ratings[assessment.ratings.length - 1];
          var average = _.sum(currentRating.data) / currentRating.data.length;
          person.summary.ratings[0].data.push(average);
          person.summary.labels.push(assessment.category);
        });
      });
    });
  });
