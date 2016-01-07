app.factory('players', function players($http){
  var obj = {};
  obj.getYears = function () {
    return $http.get('http://localhost:4000/players/years' || 'https://basketballradar.herokuapp.com')
  }

  obj.getAllPlayers = function () {
    return $http.get('http://localhost:4000/players' || 'https://basketballradar.herokuapp.com')
  }

  obj.getColumns = function () {
    return $http.get('http://localhost:4000/players/columns' || 'https://basketballradar.herokuapp.com')
  }
  return obj
})

app.factory('compare', function compare($http) {
  var obj = {}
  obj.getOnePlayer = function (id) {
    return $http.get('http://localhost:4000/players/player/' + id ||'https://basketballradar.herokuapp.com/' + id)
  }
  return obj
})
