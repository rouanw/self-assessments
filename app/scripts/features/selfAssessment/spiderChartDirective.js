'use strict';

angular.module('coachingApp')
  .directive('spiderChart', function () {
    return {
      restrict: 'A',
      scope: {
        assessment: '=',
        latest: '='
      },
      link: function (scope, elem) {
        var previousRating = scope.assessment.ratings[scope.assessment.ratings.length - 2];
        previousRating.fillColor = 'rgba(220,220,220,0.2)';
        previousRating.strokeColor = 'rgba(220,220,220,1)';
        previousRating.pointColor = 'rgba(220,220,220,1)';
        previousRating.pointStrokeColor = '#fff';
        previousRating.pointHighlightFill = '#fff';
        previousRating.pointHighlightStroke = 'rgba(220,220,220,1)';

        var currentRating = scope.assessment.ratings[scope.assessment.ratings.length - 1];
        currentRating.fillColor = 'rgba(151,187,205,0.2)';
        currentRating.strokeColor = 'rgba(151,187,205,1)';
        currentRating.pointColor = 'rgba(151,187,205,1)';
        currentRating.pointHighlightStroke = 'rgba(151,187,205,1)';
        currentRating.pointStrokeColor = '#fff';
        currentRating.pointHighlightFill = '#fff';

        var ratings = [];
        if (previousRating) {
          ratings.push(previousRating);
        }
        if (currentRating) {
          ratings.push(currentRating);
        }

        var data = {
          labels: scope.assessment.labels,
          datasets: ratings
        };

        var ctx = elem[0].getContext('2d');
        new Chart(ctx).Radar(data, {
          scaleShowLabels: true
        });
      }
    };
  });
