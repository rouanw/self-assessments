'use strict';

angular.module('coachingApp')
  .directive('selfAssessment', function () {
    return {
      restrict: 'E',
      scope: {
        person: '=',
        showDetail: '='
      },
      templateUrl: 'scripts/features/selfAssessment/self-assessment.html'
    };
  });
