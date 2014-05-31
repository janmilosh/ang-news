'use strict';

app.controller('PostViewController', function($scope, $routeParams, Post) {
  $scope.post = Post.find($routeParams.postId);
});