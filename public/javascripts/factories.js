app.factory('players', function players($http){
  var obj = {};
  obj.getYears = function () {
    return $http.get('http://localhost:4000/players/years' || 'https://basketballradarapi.herokuapp.com/players/years')
  }

  obj.getAllPlayers = function () {
    return $http.get('http://localhost:4000/players' || 'https://basketballradarapi.herokuapp.com/players')
  }

  obj.getColumns = function () {
    return $http.get('http://localhost:4000/players/columns' || 'https://basketballradarapi.herokuapp.com/players/columns')
  }
  return obj
})

app.factory('compare', function compare($http) {
  var obj = {}
  obj.getOnePlayer = function (id) {
    return $http.get('http://localhost:4000/players/player/' + id ||'https://basketballradarapi.herokuapp.com/players/player/' + id)
  }
  return obj
})
