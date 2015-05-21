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
    //$("#race-list").removeClass("hidden");
  },

  getOne: function(id){
    var race = client.find("races", id);
    Race.buildRaceElement(race);
  },

  buildRaceElement: function(race){
    $('#race .name').append(race.name);
    $('#race .date').append(race.date);
    $('#race .distance').append(race.distance);
    $('#race .purse').append(race.purse);
  }
};

//Document ready

$(document).ready(function(){
  $('#race-detail').click(function(){
    $("#race").removeClass("hidden");
    Race.getOne(1);
  });
});