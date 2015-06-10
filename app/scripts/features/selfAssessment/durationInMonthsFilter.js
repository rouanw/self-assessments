'use strict';

angular.module('coachingApp')
  .filter('durationInMonths', function() {
    return function (fromDate) {
      return moment().diff(moment(fromDate), 'months');
    };
  });
