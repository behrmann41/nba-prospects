app.filter('playerstatsFilter', function () {
  return function(items) {

    var attributes = {
      draftYear: 'Draft Year',
      heightWithOutShoes: 'Height Without Shoes',
      heightWithShoes: 'Height',
      weight: 'Weight',
      wingspan: 'Wingspan',
      reach: 'Reach',
      bodyFat: 'Body Fat',
      handLength: 'Hand Length',
      handWidth: 'Hand Width',
      noStepVert: 'No Step Vertical',
      noStepVertReach: 'No Step Vertical Reach',
      maxVert: 'Max Vertical',
      maxVertReach: 'Max Vertical Reach',
      bench: 'Benchpress',
      agility: 'Agility',
      sprint: 'Sprint',
      rank: 'Rank'
    }

    var result = {};
    angular.forEach(items, function(value, key) {
      if (!key.includes('percentage') && !key.includes('inches') && key !== 'createdAt' && key !== 'updatedAt' && key !== 'name' && key !== 'id' && value != 0) {
        for (var name in attributes){
          if (name === key){
            result[attributes[name]] = value;
          }
        }
      }
    });
    return result;
  };
})
