app.factory('players', function players($http){
  var obj = {};
  obj.getYears = function () {
    return $http.get('http://localhost:4000/players/years')
  }

  obj.getAllPlayers = function () {
    return $http.get('http://localhost:4000/players')
  }
  return obj
    //once data being loaded
    // {
    //   getD: getD,
    //   setD: setD
    // }
    //
    // function getD() {
    //   return d;
    // }
    // function setD(data) {
    //   d.push() http.post().then(d.push(response))
    // }
})
