
// var audiocommons;
function preload() {
  // Get the most recent earthquake in the database
  var url =
   'http://m2.audiocommons.org/api/audioclips/search?pattern=' +
    'dog';
  audiocommons = loadJSON(url);
}

function setup() {
  // noLoop();

    console.log("hey");
  ellipse(width / 2, height / 2, 2 * 10, 3 * 10);
// var url =
//    'http://m2.audiocommons.org/api/audioclips/search?pattern=dog' +
//     'dog';

  // loadJSON(url, showResults);

   
  // audiocommons = loadJSON(url);
}

function draw() {
  background(200);
  console.log(audiocommons);
  ellipse(width / 2, height / 2, 2 * 10, 3 * 10);
  // Get the magnitude and name of the earthquake out of the loaded JSON
  // console.log(audiocommons);
  // var earthquakeMag = earthquakes.features[0].properties.mag;
  // var earthquakeName = earthquakes.features[0].properties.place;
  // ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  // textAlign(CENTER);
  // text(earthquakeName, 0, height - 30, width, 30);
}

function showResults(audiocommonsResponse) {
console.log("hey");
 ellipse(width / 2, height / 2, 2 * 10, 3 * 10);

  var idEntry = audiocommonsResponse.result.members[0].content['@id'];
  var titleEntry = audiocommonsResponse.result.members[0].content['dc:title'];
  
  textAlign(CENTER);
  text(idEntry + "=id; " + titleEntry + "=title;", 0, height - 30, width, 30);
}
