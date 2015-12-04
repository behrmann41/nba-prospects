app.controller("HomeController", ["$scope", function($scope){
  $scope.test1 = "home";
}])

app.controller("PlayerController", ["$scope", function($scope){
  $scope.test3 = "Player Rater";
  $scope.test2 = "playerDB";
  $scope.test4 = "Player Compare";
}])
