
var song;
let img;
let imgMask;


function preload() {
song = loadSound('aural30sec-018-FOU.wav');
  img = loadImage('mask.png');
  imgMask = loadImage('mask.png');
}

let value = 400;

let osc, playing, freq, amp;

let t1 = 0.02; // attack time in seconds
let l1 = 0.7; // attack level 0.0 to 1.0
let t2 = 0.3; // decay time in seconds
let l2 = 0.1; // decay level  0.0 to 1.0

let env;
let triOsc;

// function setup() {
// createCanvas(710, 200);
// song.loop(); // song is ready to play during setup() because it was loaded during preload
// background(0,255,0);
// }

function setup() {
  canvas = createCanvas(400, 800);
  canvas.parent('simple-sketch-aural');
  //song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(255, 250, 243);
  img.mask(imgMask);
  imageMode(CENTER);

  //env = new p5.Envelope(t1, l1, t2, l2);
  triOsc = new p5.Oscillator('sine');


}

function draw(){
  translate(mouseX, mouseY);
  rotate(PI / 180 * frameCount%360);
      if (mouseIsPressed) {
      stroke(255);
          image(img, 0, 0, value, value);
          updateValue();
    } else {
      stroke(237, 34, 93);
    }
    playInDraw();
}

// function playSound() {
//   // starting the oscillator ensures that audio is enabled.
//   triOsc.start();
//   //env.play(triOsc);
// }

function playInDraw(){

  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  // text('tap to play', 20, 20);
  // text('freq: ' + freq, 20, 40);
  // text('amp: ' + amp, 20, 60);

  if (playing) {
    // smooth the transitions by 0.1 seconds
    triOsc.freq(freq, 0.1);
    triOsc.amp(amp, 0.1);
  }
}

function updateValue() {

    value = value + 5;

//    if (value > 500) {
//        value = 0;
//    }
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  triOsc.start();
  playing = true;
}

function mouseReleased() {
  // ramp amplitude to 0 over 0.5 seconds
  triOsc.amp(0, 0.5);
  playing = false;
}

function mousePressed() {
// if ( song.isPlaying() ) { // .isPlaying() returns a boolean
//   song.pause(); // .play() will resume from .pause() position
//   //background(255,0,0);
// } else {
//   song.play();
//   //background(0,255,0);
// }
//playSound();
playOscillator();
value = 10;

}
// let img;
// let imgMask;
//
//
// function preload() {
//   img = loadImage('mask.png');
//   imgMask = loadImage('mask.png');
// }
//
// let value = 400;
//
// function setup() {
//   createCanvas(400, 800);
//   canvas.parent('simple-sketch-aural');
//   background(0,225);
//
//   img.mask(imgMask);
//   imageMode(CENTER);
//
// }
//
// function draw() {
//    //background(255,5);
//    translate(mouseX, mouseY);
//    rotate(PI / 180 * frameCount%360);
//     if (mouseIsPressed) {
//     stroke(255);
//         image(img, 0, 0, value, value);
//         updateValue();
//   } else {
//     stroke(237, 34, 93);
//   }
//    //imageMode(CENTER);
//    //image(img, 0, 0, value, value);
// }
//
// function updateValue() {
//
//     value = value + 5;
//
// //    if (value > 500) {
// //        value = 0;
// //    }
// }
// function mousePressed() {
//     value = 10;
// }
