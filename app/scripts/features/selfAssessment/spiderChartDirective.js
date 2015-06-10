'use strict';

angular.module('coachingApp')
  .directive('spiderChart', function () {
    return {
      restrict: 'A',
      scope: {
        assessment: '=',
        labels: '='
      },
      link: function (scope, elem) {
        var data = {
          labels: scope.labels,
          datasets: scope.assessment
        };

        var ctx = elem[0].getContext('2d');
        new Chart(ctx).Radar(data, {
          scaleShowLabels: true
        });
      }
    };
  });
