'use strict';
/*global Chart:true */

angular.module('coachingApp')
  .directive('spiderChart', function () {
    return {
      restrict: 'A',
      scope: {
        person: '='
      },
      link: function (scope, elem) {
        var data = {
          labels: ['Testing', 'Architecture', 'Build & Deploy', 'Process & Culture'],
          datasets: scope.person.selfAssessment
        };

        var ctx = elem[0].getContext('2d');
        new Chart(ctx).Radar(data, {
          scaleShowLabels: true
        });
      }
    };
  });
