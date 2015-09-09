'use strict';

angular.module('coachingApp')
  .factory('SelfAssessment', function ($http, $q, NotificationService) {
    return {
      getPeople: function (url) {
        var users;

        var retrieveUsers = $http({method: 'GET', url: url || 'users.json', data: {}}).then(function (result) {
          users = result.data.users;
          var userRequests = [];
          users.forEach(function (user) {
            var url = user.includes('/') ? user
                      : 'https://raw.githubusercontent.com/' + user + '/my-capability-radar/master/my-radar.json';
            userRequests.push($http({
              method: 'GET',
              url: url,
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
                ratings: [{}],
              };

              person.assessments.forEach(function (assessment) {
                var currentRating = assessment.ratings[assessment.ratings.length - 1];
                var values = [];
                for(var key in currentRating) {
                  values.push(currentRating[key]);
                }

                var sum = _.sum(values);
                var average = sum / Object.keys(currentRating).length;
                person.summary.ratings[0][assessment.category] = average;
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
      }
    };
  });
