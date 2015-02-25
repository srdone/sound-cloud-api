angular.module('sounder').controller('MainController', ['$scope', '$sce', 'soundService', function ($scope, $sce, soundService) {

  $scope.getUser = function () {
    soundService.getUser($scope.searchText).then(function (data) {
      console.log(data);
      $scope.userData = data;
    });
  };

  $scope.play = function (track_url) {
    SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
    });
  }

}]);