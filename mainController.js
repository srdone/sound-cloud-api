angular.module('sounder').controller('MainController', ['$scope', 'soundService', function ($scope, soundService) {

  $scope.test = soundService.test;

}]);