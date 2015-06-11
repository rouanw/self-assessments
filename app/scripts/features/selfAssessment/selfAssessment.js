'use strict';

angular.module('coachingApp')
  .factory('SelfAssessment', function ($http, $q) {
    return {
      getPeople: function () {
        var request = {method: 'GET', url: 'data.json', data: {}};
        return $http(request).then(function(result) {
          var people = result.data.people;
          people.forEach(function (person) {
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
          return people;
        });
      },
      getTeams: function () {
        return this.getPeople().then(function (people) {
          var teamNames = _.uniq(_.map(people, function (person) {
            return person.currentTeam;
          }));

          var teams = _.map(teamNames, function (teamName) {
            return {
              name: teamName,
              members: _.filter(people, function (person) {
                return person.currentTeam === teamName;
              })
            }
          });
          return teams;
        });
      }
    };
  });
