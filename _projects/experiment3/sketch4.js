let img;
let imgMask;


function preload() {
  img = loadImage('mask.png');
  imgMask = loadImage('mask.png');
}

let value = 400;

function setup() {
  createCanvas(400, 800);
  canvas.parent('simple-sketch-aural');
  background(0,225);

  img.mask(imgMask);
  imageMode(CENTER);

}

function draw() {
   //background(255,5);
   translate(mouseX, mouseY);
   rotate(PI / 180 * frameCount%360);
    if (mouseIsPressed) {
    stroke(255);
        image(img, 0, 0, value, value);
        updateValue();
  } else {
    stroke(237, 34, 93);
  }
   //imageMode(CENTER);
   //image(img, 0, 0, value, value);
}

function updateValue() {

    value = value + 5;

//    if (value > 500) {
//        value = 0;
//    }
}
function mousePressed() {
    value = 10;
}
