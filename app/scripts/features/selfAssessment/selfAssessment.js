'use strict';

angular.module('coachingApp')
  .factory('SelfAssessment', function ($http, $q) {
    return {
      getTeam: function () {
        var request = {method: 'GET', url: 'data.json', data: {}};
        return $http(request).then(function(result) {
          var team = result.data.team;
          team.forEach(function (person) {
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
          return team;
        });
      }
    };
  });
