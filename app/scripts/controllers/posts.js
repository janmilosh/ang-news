'use strict';

app.controller('PostsController', function($scope, $location, Post) {

  if ($location.path() === '/') {
    $scope.posts = Post.all;
  }
  
  $scope.deletePost = function(postId) {
    Post.delete(postId);
  };

});