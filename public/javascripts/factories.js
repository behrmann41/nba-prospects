app.factory('players', function players($http){
  var obj = {};
  obj.getYears = function () {
    return $http.get('https://basketballradarapi.herokuapp.com/players/years' || 'http://localhost:4000/players/years')
  }

  obj.getAllPlayers = function () {
    return $http.get('https://basketballradarapi.herokuapp.com/players' || 'http://localhost:4000/players')
  }

  obj.getColumns = function () {
    return $http.get('https://basketballradarapi.herokuapp.com/players/columns' || 'http://localhost:4000/players/columns' )
  }
  return obj
})

app.factory('compare', function compare($http) {
  var obj = {}
  obj.getOnePlayer = function (id) {
    return $http.get('https://basketballradarapi.herokuapp.com/players/player/' + id || 'http://localhost:4000/players/player/' + id )
  }

  obj.getGetty = function (player) {
    return $http.get('/gettyimage?playername=' + player)
  }

  obj.getPhoto = function (player) {
    return $http.get('//api.pixplorer.co.uk/image?word=' + player + "&size=m")
  }
  return obj
})
