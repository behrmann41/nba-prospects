app.filter('playerstatsFilter', function () {
  return function(items) {
    var result = {};
    angular.forEach(items, function(value, key) {
      if (!key.includes('percentage') && !key.includes('inches') && key !== 'createdAt' && key !== 'updatedAt' && key !== 'name' && key !== 'id' && value != 0) {
        result[key] = value;
      }
    });
    return result;
  };
})
