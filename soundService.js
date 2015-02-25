angular.module('sounder').factory('soundService', ['$http', 'secretService', function ($http, secretService) {

  var _getUser = function (username) {
    return $http.get('http://api.soundcloud.com/users/' + username + '/tracks.json?client_id=' + secretService.apiKey)
      .then(function (response) {
        return response.data;
      });
  };

  var _getUserDetails = function (userId) {
    return $http.get('http://api.soundcloud.com/users/' + userId + '.json?client_id=' + secretService.apiKey)
      .then(function (response) {
        return response.data;
      })
  };

  return {
    getUser: _getUser,
    getUserDetails: _getUserDetails
  }

}]);