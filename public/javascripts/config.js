app.config(function($locationProvider, $routeProvider){
  $locationProvider.html5Mode(true)
  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeController'
    })
    .when('/players', {
      templateUrl: '/partials/playerdb.html',
      controller: "HomeController"
    })
    .when('/compare-players', {
      templateUrl: '/partials/playerCompare.html',
      controller: "HomeController"
    })
    .when('/player-ratings', {
      templateUrl: '/partials/playerCompare.html',
      controller: "HomeController"
    })
})
