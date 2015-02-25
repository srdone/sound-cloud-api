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
        userDetail: ['$route', 'soundService', function ($route, soundService) {
          return soundService.getUserDetails($route.current.params.userId);
        }]
      }
    });

  $routeProvider.otherwise({
    redirectTo: '/tracks'
  });

}]);