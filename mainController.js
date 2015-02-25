angular.module('sounder').controller('MainController', ['$scope', 'soundService', function ($scope, soundService) {

  $scope.getUser = function () {
    soundService.getUser($scope.searchText).then(function (data) {
      console.log(data);
    });
  };

}]);