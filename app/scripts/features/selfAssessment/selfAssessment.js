'use strict';

angular.module('coachingApp')
  .factory('SelfAssessment', function ($http, $q, NotificationService) {
    return {
      getPeople: function () {
        var users;

        var retrieveUsers = $http({method: 'GET', url: 'users.json', data: {}}).then(function (result) {
          users = result.data.users;
          var userRequests = [];
          users.forEach(function (user) {
            userRequests.push($http({
              method: 'GET',
              url: 'https://raw.githubusercontent.com/' + user + '/my-capability-radar/master/my-radar.json',
              data: {}
            }));
          });
          return userRequests;
        });

        return retrieveUsers.then(function (userRequests) {
          return $q.all(userRequests).then(function (results) {
            var people = [];

            results.forEach(function (result) {
              var person = result.data;
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
              people.push(person);
            });

            return people;
          }).catch (function (error) {
            NotificationService.notification = {
              message: 'Could not load one or more users specified in users.json',
              type: 'danger'
            }
          });
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
