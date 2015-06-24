'use strict';

angular.module('coachingApp')
  .directive('spiderChart', function () {
    return {
      restrict: 'A',
      scope: {
        assessment: '='
      },
      link: function (scope, elem) {
        var ratings = [];

        var previousRating = scope.assessment.ratings[scope.assessment.ratings.length - 2];
        if (previousRating) {
          var data = []
          for(var key in previousRating) {
            data.push(previousRating[key]);
          }
          var formattedPreviousRating = {
            data: data,
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)'
          }
          ratings.push(formattedPreviousRating);
        }

        var currentRating = scope.assessment.ratings[scope.assessment.ratings.length - 1];
        if (currentRating) {
          var data = []
          for(var key in currentRating) {
            data.push(currentRating[key]);
          }
          var formattedCurrentRating = {
            data: data,
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)'
          }
          ratings.push(formattedCurrentRating);
        }

        var data = {
          labels: Object.keys(currentRating),
          datasets: ratings
        };

        var ctx = elem[0].getContext('2d');
        new Chart(ctx).Radar(data, {
          scaleShowLabels: true
        });
      }
    };
  });
