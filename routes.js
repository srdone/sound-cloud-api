var app = angular.module('sounder');

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/tracks', {
      templateUrl: 'tracks.view.html',
      controller: 'MainController'
    })
    .when('/users/:userId', {
      templateUrl: 'users.view.html',
      controller: 'UsersController',
      resolve: {
        userDetail: ['$routeParams', 'soundService', function ($routeParams, soundService) {
          return soundService.getUserDetails($routeParams.userId);
        }]
      }
    });

  $routeProvider.otherwise({
    redirectTo: '/tracks'
  });

}]);