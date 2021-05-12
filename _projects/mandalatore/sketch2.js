/*
 * @name Weather
 * @frame 720,280
 * @description This example grabs JSON weather data from apixu.com.
 * You will need to include the 
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * for this example to work in your own project.
*/

// A wind direction vector
var wind;
// Circle position
var position;

function setup() {
  createCanvas(720, 200);
  // Request the data from apixu.com
 //  var url = 'http://m2.audiocommons.org/api/audioclips/search?pattern=dog';
 // loadJSON(url, hey, 'jsonp');
 call();
  // Circle starts in the middle
  position = createVector(width/2, height/2);
  // wind starts as (0,0)
  wind = createVector();

  // fetch('http://m2.audiocommons.org/api/audioclips/search?pattern=dog',{ mode: "cors"}) // no-cors, cors, *same-origin})
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJson) {
  //   console.log(JSON.stringify(myJson));
  // });
}

function call(){

// $.ajax({
// url: "http://m2.audiocommons.org/api/audioclips/search?pattern=dog",
// dataType: "jsonp",
// timeout: 5000,

// success: function (parsed_json) {
// console.log(parsed_json);
// },

// error: function (parsedjson, textStatus, errorThrown) {
// console.log("parsedJson: " + JSON.stringify(parsedjson));

// $('body').append(
//     "parsedJson status: " + parsedjson.status + '</br>' + 
//     "errorStatus: " + textStatus + '</br>' + 
//     "errorThrown: " + errorThrown);        

//  }
// });

}

function draw() {
  background(200);

  // This section draws an arrow pointing in the direction of wind
  push();
  translate(32, height - 32);
  // Rotate by the wind's angle
  rotate(wind.heading() + PI/2);
  noStroke();
  fill(255);
  ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();
  
  // Move in the wind's direction
  position.add(wind);
  
  stroke(0);
  fill(51);
  ellipse(position.x, position.y, 16, 16);

  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;


}

function hey(data){
  return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}



function gotWeather(weather) {
  
  console.log("hey");
  // // Get the angle (convert to radians)
  // var angle = radians(Number(weather.current.wind_degree));
  // // Get the wind speed
  // var windmag = Number(weather.current.wind_mph);
  
  // // Display as HTML elements
  // var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
  // var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");
  
  // // Make a vector
  // wind = p5.Vector.fromAngle(angle);
}
