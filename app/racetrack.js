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
    var section = [];

    for (var i in races) {
      var race = races[i];
      var $listTemplate = app.$raceList.clone(true).show();

      $listTemplate.find('.raceName').text(race.name);
      $listTemplate.find('.racePurse').text("Purse: $ " + race.purse);
      $listTemplate.find('.raceDistance').text("Distance: " + race.distance);

      section.push($listTemplate)
    }

    app.$raceList.html(section).show();



    // races.forEach(function(race) {
    //   var $listTemplate = app.$raceList.clone(true);

    //   $listTemplate.find('.raceName').text(race.name);
    //   $listTemplate.find('.racePurse').append("Purse: $ " + race.purse);
    //   $listTemplate.find('.raceDistance').append("Distance: " + race.distance);


    // });

    // app.$raceList.append($listTemplate).show();

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
