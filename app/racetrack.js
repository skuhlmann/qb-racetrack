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
    console.log(races);
    //$("#race-list").removeClass("hidden");
  }
};

//Document ready

$(document).ready(function(){
  $('#show-races').click(function(){
    Race.getAll();
  });
});