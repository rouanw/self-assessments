'use strict';

angular.module('coachingApp')
  .directive('showDetailOption', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/features/selfAssessment/show-detail.html'
    };
  });
