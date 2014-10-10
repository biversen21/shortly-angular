angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function($location){
    console.log('adding link:', $location);
    Links.addLink({url: $location});
  }
});
