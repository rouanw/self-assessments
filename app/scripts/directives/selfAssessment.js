'use strict';
/*global Chart:true */

angular.module('coachingApp')
  .directive('spiderChart', function () {
    return {
      restrict: 'A',
      link: function (scope) {

        scope.data = {
          labels: ['Testing', 'Architecture', 'Build & Deploy', 'Process & Culture'],
          datasets: [
                {
                  label: 'Last month',
                  fillColor: 'rgba(220,220,220,0.2)',
                  strokeColor: 'rgba(220,220,220,1)',
                  pointColor: 'rgba(220,220,220,1)',
                  pointStrokeColor: '#fff',
                  pointHighlightFill: '#fff',
                  pointHighlightStroke: 'rgba(220,220,220,1)',
                  data: [1, 1, 4, 2]
              },
              {
                  label: 'Current',
                  fillColor: 'rgba(151,187,205,0.2)',
                  strokeColor: 'rgba(151,187,205,1)',
                  pointColor: 'rgba(151,187,205,1)',
                  pointStrokeColor: '#fff',
                  pointHighlightFill: '#fff',
                  pointHighlightStroke: 'rgba(151,187,205,1)',
                  data: [2, 2, 4, 3]
              }
          ]
        };

        var ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx).Radar(scope.data, {
          scaleShowLabels: true
        });
      }
    };
  });
