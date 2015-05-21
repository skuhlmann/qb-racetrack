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

var client = new Base({config: config});

function showRace(){
  var races = client.getRecordInfo("races", 1);
  $("#race-list").removeClass("hidden");
};