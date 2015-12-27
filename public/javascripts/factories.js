app.factory('playerYears', function playerYears($http){
  var obj = {};
  obj.getYears = function () {
    return $http.get('http://localhost:4000/players/years').then(function (data) {
      return data
    })
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
