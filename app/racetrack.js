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
    var races = client.all("races");
  },

  getOne: function(id){
    var race = client.find("races", id);
    Race.buildRaceElement(race);
  },

  buildRaceElement: function(race){
    $('#race .name').text(race.name);
    $('#race .purse').text("$" + race.purse);
  }
};

//App object

var app = {
  init: function() {
    this.loadRaces();
  },

  loadRaces: function() {
    var races = Race.getAll();
    app.buildRaceList(races);
  },

  buildRaceList: function(races) {
    $("#raceList").text(races);
  }
};
