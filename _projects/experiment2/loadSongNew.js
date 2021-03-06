var song;
let img;
let imgMask;
let flower1;
let img2;
let first;

let col =[];
function preload() {
    song = loadSound('aural30sec-018-FOU.wav');
    img = loadImage('mask.png');
    imgMask = loadImage('mask.png');
    flower1 = loadImage('flow_icon.png');
    img2 = loadImage('PinkFlower.jpeg');
}

let value = 400;
let radius = 200;
let dist;

let osc, playing, freq, amp;

let t1 = 0.01; // attack time in seconds
let l1 = 0.3; // attack level 0.0 to 1.0
let t2 = 0.2; // decay time in seconds
let l2 = 0.1; // decay level  0.0 to 1.0

let env;
let triOsc;

let xcenter, ycenter;

let myButton;
let colorA;

let myButtons = [];

let myButtonsLength = 21;

var buttonWidth = 40;
var spacing ;


// function setup() {
// createCanvas(710, 200);
// song.loop(); // song is ready to play during setup() because it was loaded during preload
// background(0,255,0);
// }

function setup() {
  canvas = createCanvas(400, 800);
    frameRate(30);
    // Set Frame Rate to 0.5  
//    frameRate(0.5);
    first = true;
  canvas.parent('simple-sketch-aural');
  //song.loop(); // song is ready to play during setup() because it was loaded during preload
//  background(255, 250, 243);
    background(250, 250, 255,5);
  img.mask(imgMask);
    img2.mask(imgMask);
    
flower1.mask(imgMask);
  imageMode(CENTER);
  xcenter = canvas.width/2;
  ycenter = canvas.height/4;
    
  env = new p5.Envelope(t1, l1, t2, l2);
  triOsc = new p5.Oscillator('sine');
    //PrintMe();
    spacing = (canvas.width - buttonWidth)/ 7;
    //colorA = map(mouseX, 0, width, 0, 255);
    //myButton = new KeyboardButton(100, 100);
    
//    myButtons.push(createImg('flow_icon.png'));
    
    colorMode(HSB, 7,100,3);
    
    for (var i = 0; i< myButtonsLength; i++){
        //myButtons.push(createButton(i.toString(), i.toString()));
        col.push(color(i%7, 100,3-i%3));
        
       myButtons.push(createImg('flow_icon.png', "flow"));
        
        //myButtons.push(createButton(i.toString(), i.toString()));
        myButtons[i].parent('simple-sketch-aural');
        myButtons[i].position(i%7*spacing, 600 + (i%3*40));
//        myButtons[i].style('background-color', col[i]);
        myButtons[i].style('position', 'absolute');
        myButtons[i].mousePressed(paintEllipse);
        myButtons[i].mouseReleased(stopOscillator);
    }
    
    colorMode(RGB);
    
//    myButtons.forEach(setButton);
   //myButton.display();



}

function paintEllipse(){
    //fill(0);
    //ellipse(100,100,100);
    //value = 50;
     updateValue();
   
    //if (first){
    //image(img, frameCount%100, (frameCount)%50*2, value, value);
     //tint(frameCount%360, 100, 3, 5);
//    osc1 = (PI/180)* (frameCount%360);
    
    // to do selection by button pressed
    // no plane rotation
    // o1 4 o2 3 // preset celtic
    // o1 2 o2 3 // preset nebula
    // o1 1 o2 3 // s
    // o1 3 o2 2 // nebula 90 rotate
    
    osc1 = (PI/180)* (frameCount*2%360);
    
//    osc2 = (PI/180)* (frameCount*2%360);
    
    osc2 = (PI/180)* (frameCount*5%360);
    
//    background(250, 250, 255,2);
    
     colorMode(RGB);
    
    tint(100+frameCount%120, 255, 100-frameCount%120, 50);
    
//    image(img, sin(osc1)*100, sin(osc2)*-100, 80, 80);
    
    
    colorMode(HSB, 120,100,10, 100);
    
    tint(frameCount%120, 50, 9, 50);
//    noStroke();
    strokeWeight(10);
    stroke(255,10);
    fill(frameCount%120, 50, 9, 30);
    
//    ellipse(sin(osc1)*100, sin(osc2)*-100, 80+sin(osc1)*20, 80+sin(osc2)*20);
    var size = 70;
    push();
    
    
    translate(sin(osc1)*size, sin(osc2)*-size);
//    ellipse(sin(osc1)*100, sin(osc2)*-100, 80+sin(osc1)*20, 80+sin(osc2)*20);
    ellipse(sin(osc1)*size, 0, 10,10);
//    ellipse(-sin(osc1)*size, 0, 20,20);
    ellipse(0, sin(osc2)*-size, 10,10);
//    ellipse(0, -sin(osc2)*-size, 20,20);
    ellipse(sin(osc1)*size, sin(osc2)*-size, 10,10);
//    line(0,0, sin(osc1)*size, sin(osc2)*-size);
//    
//    line(sin(osc1)*size,0, 0, sin(osc2)*-size);
    
    
//    ellipse(-sin(osc1)*size, -sin(osc2)*-size, 20,20);
   // ellipse(0, 0, 20,20);
   // ellipse(-sin(osc1)*80, sin(osc2)*80, 20,20);
//    ellipse(90, 0, 20,20);
//    ellipse(80, 0, 20,20);
//    ellipse(0, 100, 80,30);
//    ellipse(100, 1000, 40,40);
    // 15 for 16 beats;
    // 30 for 8 beats;
    // nodes 180, 90, 45;
    if (frameCount%5 == 0){
    image(img, sin(osc1)*size, 0, 30, 30);
        
         fill(50+sin(osc1)*5, 50+sin(osc2)*2, 9, 30);
        strokeWeight(1);
        stroke(50+sin(osc1)*10, 50+sin(osc2)*5, 8+sin(osc2)*2, 50)
        curve(-sin(osc1)*size/2, 0, sin(osc1)*size, 50, sin(osc1)*size, sin(osc1)*size*2, sin(osc1)*size*2, sin(osc2)*-size );
        
        curve(0,0, 0, -sin(osc1)*size/2, 0, sin(osc1)*size*2, 0, 0);
   

//    image(img, sin(osc1)*100, sin(osc2)*-100, 60, 60);
    }
     if (frameCount%10 == 0){
         
    image(img, sin(osc2)*-size, 0, 30, 30);
             line(sin(osc1)*size,0, 0, sin(osc2)*-size);
         curve(0, -sin(osc1)*size/2, sin(osc1)*size*2, 50, sin(osc1)*size*2, sin(osc1)*size/2, sin(osc1)*size*4, sin(osc2)*-size*2 );
        
     }
     if (frameCount%12 == 0){
          image(img, 0, sin(osc1)*size, 30, 30);
         
         line(0,0, sin(osc1)*size, sin(osc2)*-size);
            curve(0, sin(osc1)*size/2, 20+sin(osc1)*size/5, 50, sin(osc1)*size*2, sin(osc1)*size/2, sin(osc1)*size*4, sin(osc2)*-size*2 );
        
     }
    
    if (frameCount%30 == 0){
      image(img, 0, sin(osc2)*-size, 30, 30); 
        curve(-sin(osc1)*size/2, -sin(osc1)*size/2, sin(osc1)*size, -sin(osc1)*size/2, 0, sin(osc1)*size*2, sin(osc1)*size*2, 0);

    }
    
    if (frameCount%60 == 0){
    tint(frameCount%120, 50, 9, 255);
    image(img, 0, 0, 100, 100);
//    image(img, sin(osc1)*100, sin(osc2)*-100, 60, 60);
    }
     
    
    pop();
    
   colorMode(RGB);
    
    //}else{
        //image(img2, frameCount%300, frameCount%300, value, value);
   // }
    
    //playOscillator();
   
    
    //print("hey")
    
    

}

//function setButton(item){
//    item.position(200,220);
//    item.mousePressed(playInDraw);
//}

class KeyboardButton {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.color = color(100,200,100);
    }
    
    update(){
        this.x = mouseX;
        this.y = mouseY;
        
    }
    
    display(){
        fill(0);
        rect(this.x, this.y, 20, 20);
    }
}

function draw(){
    
    //drawButtons();
//    myButton.update();
//    myButton.display();
    
  translate(canvas.width/2, canvas.height/4 );
  rotate(PI / 180 * frameCount*12%360);
  //dist= sqrt(pow((mouseX - xcenter),2) + pow((mouseY - ycenter),2));
      //if (mouseIsPressed && dist<radius) {
          
    if (mouseIsPressed) {
      stroke(255);
        paintEllipse();
        
          //image(img, canvas.width/2 +value, canvas.height/2 -value, value, value);
         // updateValue();
    } else {
        //value = 10;
      stroke(237, 34, 93);
    }
    playInDraw();
    
//    paintEllipse();
   // dist= sqrt(pow((mouseX - xcenter),2) + pow((mouseY - ycenter),2));
}


// function playSound() {
//   // starting the oscillator ensures that audio is enabled.
//   triOsc.start();
//   //env.play(triOsc);
// }

function drawButtons(){
//    var buttonWidth = 40;
//    var spacing = (canvas.width - buttonWidth)/ 7;
    rectMode(CENTER);
    for (var i=buttonWidth; i<(canvas.width-buttonWidth); i=i+spacing){
        drawButton(i,400,buttonWidth,40);
        drawButton(i,450,buttonWidth,40);
        drawButton(i,500,buttonWidth,40);
    } 
}

function drawButton(posX,posY,sizeX,sizeY){
    stroke(0);
    rectMode(CENTER);
    fill(200,200,200,50);
    rect(posX, posY, sizeX, sizeY);
    
}





function playInDraw(){

  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 0.4);

//   text('tap to play', 20, 20);
//   text('freq: ' + freq, 20, 40);
//   text('amp: ' + amp, 20, 60);
//
  if (playing) {
    // smooth the transitions by 0.1 seconds
    triOsc.freq(freq, 0.1);
    //triOsc.amp(amp, 1);
  }
}

function updateValue() {

    value = value + 20;

    if (value > 300) {
        value = 20;
        first = !first;
    }
}

function playOscillator() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  triOsc.start();
    env.play(triOsc);
  playing = true;
}

function stopOscillator() {
  // ramp amplitude to 0 over 0.5 seconds
  triOsc.amp(0, 0.2);
  playing = false;
}

//function mouseReleased() {
//  // ramp amplitude to 0 over 0.5 seconds
//  triOsc.amp(0, 0.2);
//  playing = false;
//}
function mousePressed(){
    background(250, 250, 255,5);
}
//function mousePressed() {
// if ( song.isPlaying() ) { // .isPlaying() returns a boolean
//   song.pause(); // .play() will resume from .pause() position
//   //background(255,0,0);
// } else {
//   song.play();
//   //background(0,255,0);
// }
//playSound();
//playOscillator();
//value = 10;

//}
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
