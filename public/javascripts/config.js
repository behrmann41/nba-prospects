app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true)
  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeController'
    })
    .when('/players', {
      templateUrl: '/partials/playerdb.html',
      controller: "PlayerController"
    })
    .when('/compare-players', {
      templateUrl: '/partials/playerCompare.html',
      controller: "ComparisonController"
    })
    .when('/player-ratings', {
      templateUrl: '/partials/playerRankings.html',
      controller: "PlayerController"
    })
    .when('/players/:id', {
      templateUrl: '/partials/player.html',
      controller: 'ComparisonController'
    })
})
