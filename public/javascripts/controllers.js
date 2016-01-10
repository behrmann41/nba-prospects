app.controller("HomeController", ["$scope", function($scope){

  $scope.dataDetails = true;
  $scope.ratingDetails = false;
  $scope.compareDetails = false;
  $scope.dbDetails = function (){
    $scope.compareDetails = false;
    $scope.ratingDetails = false;
    $scope.dataDetails = true;
  }
  $scope.prDetails = function (){
    $scope.dataDetails = false;
    $scope.compareDetails = false;
    $scope.ratingDetails = true;
  }
  $scope.pcDetails = function (){
    $scope.dataDetails = false;
    $scope.ratingDetails = false;
    $scope.compareDetails = true;
  }
  $scope.header = true;
  $scope.clearHeader = function (){
    $scope.header = false;
  }
  $scope.addHeader = function (){
    $scope.header = true;
  }
}])

app.controller("ComparisonController", ["$scope", "compare", "$routeParams", "$rootScope", "$http", "players", function ($scope, compare, $routeParams, $rootScope, $http, players) {

  var attributes = {
    heightwoshoesinchespercentage: 'Height Without Shoes',
    heightinchespercentage: 'Height',
    weightpercentage: 'Weight',
    wingspaninchespercentage: 'Wingspan',
    reachinchespercentage: 'Reach',
    bodyFatpercentage: 'Body Fat',
    handLengthpercentage: 'Hand Length',
    handWidthpercentage: 'Hand Width',
    noStepVertpercentage: 'No Step Vertical',
    nostepvertreachinchespercentage: 'No Step Vertical Reach',
    maxVertpercentage: 'Max Vertical',
    maxvertreachinchespercentage: 'Max Vertical Reach',
    benchpercentage: 'Benchpress',
    agilitypercentage: 'Agility',
    sprintpercentage: 'Sprint',
    rankpercentage: 'Rank'
  }

  $scope.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'myPopoverTemplate.html',
    title: 'Title'
  };

  $scope.secondPicture = false;
  compare.getOnePlayer($routeParams.id).then(function (player) {
    return player
  }).then(function (player) {
    //d3 functionality
    var w = 500,
	    h = 500;

    var colorscale = d3.scale.category10();

    //Legend titles
    $scope.player1 = player.data;

    var LegendOptions = [player.data.name];

    compare.getPhoto(player.data.name).then(function(photos){
      if(photos.data.images[0]){
        $scope.imageSearch1 = photos.data.images[0].imageurl;
      }
    })

    var stats = [];
    for (attr in player.data){
      // player.data[attr] !== 0 && player.data[attr] !== '0' && attr !== 'id' && attr !== 'name' && attr !== 'updatedAt' && attr !== 'createdAt' && attr !== 'draftPos' && attr !== 'draftYear'
      if (attr.includes('percentage') && player.data[attr] != 0){
        for (var name in attributes) {
          if (attr === name) {
            stats.push({axis: attributes[name], value: player.data[attr]})
          }
        }
      }
    }
    //Data
    var d = [stats]

    //Options for the Radar chart, other than default
    var mycfg = {
      w: w,
      h: h,
      maxValue: 1.0,
      levels: 5,
      ExtraWidthX: 300
    }

    //Call function to draw the Radar chart
    //Will expect that data is in %'s
    RadarChart.draw("#chart", d, mycfg);

    ////////////////////////////////////////////
    /////////// Initiate legend ////////////////
    ////////////////////////////////////////////

    var svg = d3.select('#body')
	    .selectAll('svg')
      .append('svg')
      .attr("width", w+300)
      .attr("height", h)

    //Create the title for the legend
    var text = svg.append("text")
      .attr("class", "title")
      .attr('transform', 'translate(90,0)')
      .attr("x", w - 70)
      .attr("y", 10)
      .attr("font-size", "12px")
      .attr("fill", "#404040")
      .text("Players");

    //Initiate Legend
    var legend = svg.append("g")
      .attr("class", "legend")
      .attr("height", 100)
      .attr("width", 200)
      .attr('transform', 'translate(90,20)')
      ;
      //Create colour squares
      legend.selectAll('rect')
        .data(LegendOptions)
        .enter()
        .append("rect")
        .attr("x", w - 65)
        .attr("y", function(d, i){ return i * 20;})
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", function(d, i){ return colorscale(i);})
        ;
      //Create text next to squares
      legend.selectAll('text')
        .data(LegendOptions)
        .enter()
        .append("text")
        .attr("x", w - 52)
        .attr("y", function(d, i){ return i * 20 + 9;})
        .attr("font-size", "11px")
        .attr("fill", "#737373")
        .text(function(d) { return d; })
        ;
  })

  $scope.modalGlobalSearch = function () {
    var term = $scope.globalSearchTerm
    players.getAllPlayers().then(function (players) {
      return players.data.data.filter(function (player) {
        return player.name.toLowerCase().includes(term.toLowerCase());
      })
    }).then(function (players) {

      $scope.modalPlayers = players;
    })
  }

  $scope.addToGraph = function (newPlayer) {
    compare.getOnePlayer($routeParams.id).then(function (player) {
      return player
    }).then(function (player) {
      var players = [player]
      compare.getOnePlayer(newPlayer.id).then(function (secondPlayer) {
        players.push(secondPlayer)
      }).then(function () {
        //d3 functionality
        var w = 500,
    	    h = 500;

        var colorscale = d3.scale.category10();

        $scope.player1 = players[0].data;
        $scope.player2 = players[1].data;
        //Legend titles

        var LegendOptions = [$scope.player1.name, $scope.player2.name];

        compare.getPhoto(players[0].data.name).then(function(photos){
          if(photos.data.images[0]){
            $scope.imageSearch1 = photos.data.images[0].imageurl;
          }
        }).then(function () {
          compare.getPhoto(players[1].data.name).then(function (photos) {
            $scope.imageSearch2 = photos.data.images[0].imageurl;
            $scope.secondPicture = true;
          })
        })

        var stats1 = [];
        for (attr in players[0].data){
          // player.data[attr] !== 0 && player.data[attr] !== '0' && attr !== 'id' && attr !== 'name' && attr !== 'updatedAt' && attr !== 'createdAt' && attr !== 'draftPos' && attr !== 'draftYear'
          if (attr.includes('percentage') && players[0].data[attr] != 0){
            for (var name in attributes) {
              if (attr === name) {
                stats1.push({axis: attributes[name], value: players[0].data[attr]})
              }
            }
          }
        }

        var stats2 = [];
        for (attr in players[1].data){
          // player.data[attr] !== 0 && player.data[attr] !== '0' && attr !== 'id' && attr !== 'name' && attr !== 'updatedAt' && attr !== 'createdAt' && attr !== 'draftPos' && attr !== 'draftYear'
          if (attr.includes('percentage') && players[1].data[attr] != 0){
            for (var name in attributes) {
              if (attr === name) {
                stats2.push({axis: attributes[name], value: players[1].data[attr]})
              }
            }
          }
        }
        //Data
        var d = [stats1, stats2]

        //Options for the Radar chart, other than default
        var mycfg = {
          w: w,
          h: h,
          maxValue: 1.0,
          levels: 5,
          ExtraWidthX: 300
        }

        //Call function to draw the Radar chart
        //Will expect that data is in %'s
        RadarChart.draw("#chart", d, mycfg);

        ////////////////////////////////////////////
        /////////// Initiate legend ////////////////
        ////////////////////////////////////////////

        var svg = d3.select('#body')
    	    .selectAll('svg')
          .append('svg')
          .attr("width", w+300)
          .attr("height", h)

        //Create the title for the legend
        var text = svg.append("text")
          .attr("class", "title")
          .attr('transform', 'translate(90,0)')
          .attr("x", w - 70)
          .attr("y", 10)
          .attr("font-size", "12px")
          .attr("fill", "#404040")
          .text("Players");

        //Initiate Legend
        var legend = svg.append("g")
          .attr("class", "legend")
          .attr("height", 100)
          .attr("width", 200)
          .attr('transform', 'translate(90,20)')
          ;
          //Create colour squares
          legend.selectAll('rect')
            .data(LegendOptions)
            .enter()
            .append("rect")
            .attr("x", w - 65)
            .attr("y", function(d, i){ return i * 20;})
            .attr("width", 10)
            .attr("height", 10)
            .style("fill", function(d, i){ return colorscale(i);})
            ;
          //Create text next to squares
          legend.selectAll('text')
            .data(LegendOptions)
            .enter()
            .append("text")
            .attr("x", w - 52)
            .attr("y", function(d, i){ return i * 20 + 9;})
            .attr("font-size", "11px")
            .attr("fill", "#737373")
            .text(function(d) { return d; })
            ;
        })
    })
  }


  // $scope.players = [{name: 'player'}];
  // $scope.addPlayer = function (){
  //   var newItemNo = $scope.players.length+1;
  //   $scope.players.push({name: "player" + newItemNo});
  // }
  // $scope.removePlayer = function (){
  //   var lastItem = $scope.players.length-1;
  //   if (!$scope.players[lastItem-1]) return;
  //   else $scope.players.splice(lastItem);
  // }

}])

app.controller("PlayerController", ["$scope", "players", "ngTableParams","$resource", "$filter", function($scope, players, ngTableParams, $resource, $filter){

  players.getAllPlayers().then(function (players) {
    return players
  }).then(function (players) {
    $scope.tableParams = new ngTableParams({page: 1, count: 10}, {
      total: 0,
      counts: [10,25,50,100,500, players.data.data.length],
      getData: function($defer, params) {
        params.total(players.data.data.length)
        $defer.resolve($filter('orderBy')(players.data.data.slice((params.page() - 1) * params.count(), params.page() * params.count()), params.orderBy()));
      }
    });
  })

  $scope.applyGlobalSearch = function () {
    var term = $scope.globalSearchTerm
    players.getAllPlayers().then(function (players) {
      return players.data.data.filter(function (player) {
        return player.name.toLowerCase().includes(term.toLowerCase());
      })
    }).then(function (players) {
      console.log(players);
      $scope.tableParams = new ngTableParams({page: 1, count: 10}, {
        total: 0,
        counts: [10, 25, players.length],
        getData: function($defer, params) {
          params.total(players.length)
          $defer.resolve($filter('orderBy')(players.slice((params.page() - 1) * params.count(), params.page() * params.count()), params.orderBy()));
        }
      });
    })
  }
}])
