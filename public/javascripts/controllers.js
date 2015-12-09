app.controller("HomeController", ["$scope", function($scope){
  $scope.test1 = "home";
  $scope.dataDetails = true;
  $scope.ratingDetails = false;
  $scope.compareDetails = false;
  $scope.dbDetails = function (){
    $scope.compareDetails = false;
    $scope.ratingDetails = false;
    $scope.dataDetails = true;
  }
  $scope.prDetails = function (){
    $scope.dataDetails = false;
    $scope.compareDetails = false;
    $scope.ratingDetails = true;
  }
  $scope.pcDetails = function (){
    $scope.dataDetails = false;
    $scope.ratingDetails = false;
    $scope.compareDetails = true;
  }
}])

app.controller("PlayerController", ["$scope", function($scope){
  $scope.test3 = "Player Rater";
  $scope.test2 = "playerDB";
  $scope.test4 = "Player Compare";
  $scope.addplayer = function (){
    // query db for player
  }
}])
