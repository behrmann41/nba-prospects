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
      controller: "CompareController"
    })
    .when('/about', {
      templateUrl: '/partials/about.html',
      controller: "HomeController"
    })
    .when('/players/:id', {
      templateUrl: '/partials/player.html',
      controller: 'ShowController'
    })
})
