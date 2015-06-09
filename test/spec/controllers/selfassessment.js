'use strict';

describe('Controller: SelfassessmentCtrl', function () {

  // load the controller's module
  beforeEach(module('coachingApp'));

  var SelfassessmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SelfassessmentCtrl = $controller('SelfassessmentCtrl', {
      $scope: scope
    });
  }));

});
