angular.module('sounder').controller('UsersController', ['$scope', 'userDetail', function ($scope, userDetail) {

  $scope.userDetail = userDetail;

}]);