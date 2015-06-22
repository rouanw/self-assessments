'use strict';

angular.module('coachingApp')
  .factory('NotificationService', function () {
    var _notification;
    return {
      notification: _notification
    }
  })
  .directive('notification', function (NotificationService) {
    return {
      restrict: 'E',
      template: '<div ng-show="notificationSvc.notification" class="alert alert-{{notificationSvc.notification.type}}" role="alert">{{notificationSvc.notification.message}}</div>',
      controller: function ($scope) {
        $scope.notificationSvc = NotificationService;
      }
    };
  });
