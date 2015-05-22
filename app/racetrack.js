//config
var config = {
  races: {
    dbid: "bjxj6mk28",
    rid: 3,
    name: 6,
    purse: 7,
    distance: 9,
    date: 15
  }
};

var client = new Base({token: "29dcu6benpy5pdr7xditbfajeue", config: config});

//Race object

var Race = {
  getAll: function(){
    return client.all("races");
  },

  buildRaceList: function(races) {
    races.forEach(function(race) {
      app.$raceList.append(function() {
        app.$raceList.find('.raceName').text(race.name);
        app.$raceList.find('.racePurse').text("Purse: $ " + race.purse);
        app.$raceList.find('.raceDistance').text("Distance: " + race.distance);
      });

      // $("#raceList").append(function(){
      //   $("#raceList .name").text(race.name);
      //   $("#raceList .purse").text("$ " + race.purse);
      // });
    });
  }

};

//App object

var app = {
  init: function() {
    this.cacheElements();
    this.loadRaces();
  },

  cacheElements: function() {
    this.$raceList = $("#raceList");
  },

  loadRaces: function() {
    var races = Race.getAll();
    Race.buildRaceList(races);
  }
};
