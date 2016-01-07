app.factory('players', function players($http){
  var obj = {};
  obj.getYears = function () {
    return $http.get( process.env.APP_URL + 'players/years')
  }

  obj.getAllPlayers = function () {
    return $http.get( process.env.APP_URL + 'players')
  }

  obj.getColumns = function () {
    return $http.get( process.env.APP_URL + 'players/columns')
  }
  return obj
})

app.factory('compare', function compare($http) {
  var obj = {}
  obj.getOnePlayer = function (id) {
    return $http.get(process.env.APP_URL + 'players/player/' + id)
  }
  return obj
})
