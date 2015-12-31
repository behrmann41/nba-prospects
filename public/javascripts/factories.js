app.factory('players', function players($http){
  var obj = {};
  obj.getYears = function () {
    return $http.get('http://localhost:4000/players/years')
  }

  obj.getAllPlayers = function () {
    return $http.get('http://localhost:4000/players')
  }

  obj.getColumns = function () {
    return $http.get('http://localhost:4000/players/columns')
  }
  return obj
})

app.factory('compare', function compare($http) {
  var obj = {}
  return obj
})
