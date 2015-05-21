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
    $('#race .date').text(race.date);
  }
};

//Document ready

$(document).ready(function(){
  $('#race-1').click(function(){
    $("#race").removeClass("hidden");
    Race.getOne(1);
  });

  $('#race-2').click(function(){
    $("#race").removeClass("hidden");
    Race.getOne(2);
  });

  $('#race-3').click(function(){
    $("#race").removeClass("hidden");
    Race.getOne(3);
  });
});