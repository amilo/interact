
var song;

function preload() {
song = loadSound('aural30sec-018-FOU.wav');
}

// function setup() {
// createCanvas(710, 200);
// song.loop(); // song is ready to play during setup() because it was loaded during preload
// background(0,255,0);
// }

function setup() {
  canvas = createCanvas(710, 400);
  canvas.parent('simple-sketch-aural');
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(0,255,0);
}

function mousePressed() {
if ( song.isPlaying() ) { // .isPlaying() returns a boolean
  song.pause(); // .play() will resume from .pause() position
  background(255,0,0);
} else {
  song.play();
  background(0,255,0);
}
}
