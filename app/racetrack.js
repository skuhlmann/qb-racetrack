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
    return client.all("races", {"clist": ["3", "6", "7", "9", "15"], "slist": "3"});
  },

  buildRaceList: function(races) {
    var section = [];

    for (var i in races) {
      var race = races[i];
      var $listTemplate = app.$raceList.clone(true).show();

      $listTemplate.find('.raceName').text(race.name);
      $listTemplate.find('.raceDate').text("Date: " + BaseHelpers.dateToString(race.date));
      $listTemplate.find('.raceBtn').text(race.name + " details")
                                    .attr("id", "race" + race.rid);


      // $listTemplate.find('.racePurse').text("Purse: $ " + race.purse);
      // $listTemplate.find('.raceDistance').text("Distance: " + race.distance + " furlongs");

      section.push($listTemplate)
    }
    app.$raceList.html(section).show();
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
