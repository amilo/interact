var song;
let img;
let imgMask;
let flower1;
let img2;
let first;
let brush;

let osc1;
let osc2;


let font,
  fontsize = 40;


let mousePressedOnce;

let n;

let col =[];
function preload() {
//    song = loadSound('aural30sec-018-FOU.wav');
    img = loadImage('mask.png');
    imgMask1 = loadImage('mask.png');
    flower1 = loadImage('Prim_Icon.png');
    
    brush = loadImage('mask.png')
    
//     flower1 = loadImage('flow_icon.png');
    
    
    //img2 = loadImage('PinkFlower.jpeg');

    
    img2 = loadImage('C_Red_Pink_Flower_Oil_smaller.png');
    imgMask2 = loadImage('C_Red_Pink_Flower_Oil_smaller.png');
    
    
        img3 = loadImage('D_OrangeFlower_Oil_smaller.png');
    imgMask3 = loadImage('D_OrangeFlower_Oil_smaller.png');
//    
//    
        img4 = loadImage('A_blue_flower_smaller.png');
    imgMask4 = loadImage('A_blue_flower_smaller.png');
    
        img5 = loadImage('E_Yellow_Green_Flower_blurred_smaller.png');
    imgMask5 = loadImage('E_Yellow_Green_Flower_blurred_smaller.png');
    
           img6 = loadImage('A_Leaves_Full_smaller.png');
    imgMask6 = loadImage('A_Leaves_Full_smaller.png');
    
    
           img7 = loadImage('B_Leaves_Full_Sat.png');
    imgMask7 = loadImage('B_Leaves_Full_Sat.png');
    
               img8 = loadImage('FindingTheEdgesOfPrimrose.png');
    imgMask8 = loadImage('FindingTheEdgesOfPrimrose.png');
    
    
               img9 = loadImage('FindingTheEdgesOfPrimrose.png');
    imgMask9 = loadImage('FindingTheEdgesOfPrimrose.png');
    
    
    //        img3 = loadImage('C_Red_Pink_Flower_Oil.png');
//    imgMask3 = loadImage('C_Red_Pink_Flower_Oil.png');
//    
}


let value = 400;
let radius = 200;
let dist;

let osc, playing, freq, amp;

let t1 = 0.005; // attack time in seconds
let l1 = 0.02; // attack level 0.0 to 1.0
let t2 = 0.4; // decay time in seconds
let l2 = 0.0; // decay level  0.0 to 1.0

let t3 = 0.3; // attack time in seconds
let l3 = 0.098; // attack level 0.0 to 1.0
let t4 = 0.7; // decay time in seconds
let l4 = 0.001; // decay level  0.0 to 1.0

let env;
let triOsc;

let env2;
let triOsc2;

let xcenter, ycenter;

let myButton;
let colorA;

let myButtons = [];

let myButtonsLength = 21;

var buttonWidth = 40;
var spacing ;

let nameArray = [];
// function setup() {
// createCanvas(710, 200);
// song.loop(); // song is ready to play during setup() because it was loaded during preload
// background(0,255,0);
// }

function setup() {
  canvas = createCanvas(400, 800);
//    frameRate(30);
    // Set Frame Rate to 0.5  
//    frameRate(0.5);
    first = true;
    mousePressedOnce = false;
    n = 0;
  canvas.parent('simple-sketch-aural');
  //song.loop(); // song is ready to play during setup() because it was loaded during preload
//  background(255, 250, 243);
    background(250, 250, 255,5);
  img.mask(imgMask1);
    img2.mask(imgMask2);
    img3.mask(imgMask3);
    img4.mask(imgMask4);
     img5.mask(imgMask5);
    img6.mask(imgMask6);
    img7.mask(imgMask7);
     img8.mask(imgMask8);
    img9.mask(imgMask9);
    
flower1.mask(imgMask);
  imageMode(CENTER);
  xcenter = canvas.width/2;
  ycenter = canvas.height/4;
    
  env = new p5.Envelope(t1, l1, t2, l2);
  triOsc = new p5.Oscillator('sine');
    
      env2 = new p5.Envelope(t3, l3, t4, l4);
  triOsc2 = new p5.Oscillator('sine');
    //PrintMe();
    spacing = (canvas.width - buttonWidth)/ 6;
    //colorA = map(mouseX, 0, width, 0, 255);
    myButton = new KeyboardButton(spacing, height-height/4-spacing);
//    myButton.mouseInside(clearCanvas);
//    myButton.style('background-color', 'white');
    
//    myButtons.push(createImg('flow_icon.png'));
    
    colorMode(HSB, 7,100,24);
    
    myButtons.push(createImg('A_blue_flower_Icon.png', "flow"));
    myButtons.push(createImg('A_Leaves_Icon.png', "flow"));
    myButtons.push(createImg('B_Leaves_Full_Sat_Icon.png', "flow"));
    myButtons.push(createImg('C_Red_Pink_Flower_Oil_Icon.png', "flow"));
    myButtons.push(createImg('D_OrangeFlower_Oil_Icon.png', "flow"));
    myButtons.push(createImg('E_Yellow_Green_Flower_Icon.png', "flow"));
    myButtons.push(createImg('B_Leaves_Icon.png', "flow"));
    
    myButtons.push(createImg('A_Leaves_Edge_Icon.png', "flow"));
    myButtons.push(createImg('A_Leaves_Icon.png', "flow"));
    myButtons.push(createImg('B_Leaves_Full_Sat_Icon.png', "flow"));
    
    for (var i = 0; i< myButtonsLength; i++){
        //myButtons.push(createButton(i.toString(), i.toString()));
        col.push(color((i%7+3)%7, 25+(i%3)*20 , 24-((i%3)*4)));
        
        if (i>=10){
        
       myButtons.push(createImg('Prim_Icon.png', "flow"));
        }
        //myButtons.push(createButton(i.toString(), i.toString()));
        myButtons[i].parent('simple-sketch-aural');
        myButtons[i].position(i%7*spacing, 600 + (i%3*60));
        myButtons[i].size(60,60);
        myButtons[i].style('background-color', col[i]);
        myButtons[i].style('position', 'absolute');
//        myButtons[i].mousePressed(action);
//        var num = 3;
//        myButtons[i].addEventListener('click', (event) => ((arg) => {
//  console.log(event, arg);
//})('An argument'));
//                myButtons[i].addEventListener('click', function(e) {
////  a(e, 4);
//                    console.log("here");
//});
        nameArray[i] = i;
        myButtons[i].mousePressed(action);
        myButtons[i].mouseReleased(stopOscillator);
    }
    
    colorMode(RGB);
    
//    myButtons.forEach(setButton);
   //myButton.display();



}

function clearCanvas(){
    background(250, 250, 255,50);
}
//function checkout(e) {
//   e.preventDefault();
////    var id = number; 
////   console.log('someone clicked me');
//    console.log(e.path[0]);
////    console.log(this);
////    console.log(num);
//}
function action(){
    
    playOscillator();
    paintEllipse(freq);
    playInDraw();
}

function action2(){
//    console.log(this.element);
    playOscillator2();
    paintEllipse(freq);
    playInDraw();
}

//function paintFlower(Object){
//    console.log(Object);
//    image(img3, 0, mouseY, 50, 50);
//}

function paintEllipse(freq){
    //fill(0);
    //ellipse(100,100,100);
    //value = 50;
//    text(int(freq), map(freq,55,1100, 0, width), height/2-height/4);
    
    
    
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
    
//    tint(100+frameCount%120, 255, 100-frameCount%120, 50);
    
//    noTint();
    
//    image(img4, sin(osc1)*100, sin(osc2)*-100, 160, 160);
    
    
    colorMode(HSB, 120,100,10, 100);
//     tint(map(freq, 220, 440, 1, 120));
    
    tint(map(freq, 220, 440, 1, 120), 10, 9, 40);
//    tint(frequency%120, 50, 9, 70);
//    noStroke();
    strokeWeight(10);
    stroke(255,10);
    fill(frameCount%120, 50, 9, 30);
    
//    ellipse(sin(osc1)*100, sin(osc2)*-100, 80+sin(osc1)*20, 80+sin(osc2)*20);
    var size = 70;
    push();
    
    
    translate(sin(osc1)*size, sin(osc2)*-size);
    
//    ellipse(sin(osc1)*100, sin(osc2)*-100, 80+sin(osc1)*20, 80+sin(osc2)*20);
    //ellipse(sin(osc1)*size, 0, 10,10);
//    ellipse(-sin(osc1)*size, 0, 20,20);
   // ellipse(0, sin(osc2)*-size, 10,10);
//    ellipse(0, -sin(osc2)*-size, 20,20);
    //ellipse(sin(osc1)*size, sin(osc2)*-size, 10,10);
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
    
    if (freq > 100 && freq < 150 ){
            brush = img;
    }else if(freq > 150 && freq < 200 ){
            brush = img2;
    }else if(freq > 200 && freq < 220 ){
            brush = img3;
    }else if(freq > 220 && freq < 250 ){
            brush = img4;
        
    }else if(freq > 250 && freq < 300 ){
            brush = img9;
    }else if(freq > 300 && freq < 420 ){
            brush = img6;
    }else if(freq > 420 && freq < 450 ){
            brush = img9;
        
        
    }else if(freq > 450 && freq < 500 ){
            brush = img6;
    }else if(freq > 500 && freq < 580 ){
            brush = img7;
    }else if(freq > 580 && freq < 630 ){
            brush = img9;
    }else if(freq > 630 && freq < 700 ){
            brush = img9;
    }else if(freq > 700 && freq < 770 ){
            brush = img5;     
    }else if(freq > 770 && freq < 800 ){
            brush = img9;
        
    }else if(freq > 800 && freq < 900 ){
            brush = img6;
    }else if(freq > 900 && freq < 1000 ){
            brush = img6;
    }else if(freq > 1000 && freq < 1200 ){
            brush = img9;
    }else if(freq > 1200 && freq < 1300 ){
            brush = img3;
    }else if(freq > 1300 && freq < 1400 ){
            brush = img3;
    }else if(freq > 1400 && freq < 1600 ){
            brush = img9;
        
    }else if(freq > 1600 && freq < 1800 ){
            brush = img4;
    }else if(freq > 1800 && freq < 2000 ){
            brush = img9;
    }else if(freq > 2000 && freq < 2250 ){
            brush = img7;
    }else if(freq > 2250 && freq < 2500 ){
            brush = img2;
    }else if(freq > 2500 && freq < 3000 ){
            brush = img9;
    }else if(freq > 3000 && freq < 3500 ){
            brush = img7;
    }else if(freq > 3500 && freq < 4000 ){
            brush = img7;
        
    }else if(freq > 4000 && freq < 5000 ){
            brush = img4;
    }else if(freq > 5000 && freq < 6000 ){
            brush = img2;
    }else if(freq > 6000 && freq < 7000 ){
            brush = img2;
    }else if(freq > 7000 && freq < 8000 ){
            brush = img3;
    }else if(freq > 8000 && freq < 9000 ){
            brush = img3;
    }else if(freq > 9000 && freq < 10000 ){
            brush = img8;
    }else if(freq > 10000 && freq < 11000 ){
            brush = img7;
    }else if(freq > 11000 && freq < 12000 ){
            brush = img6;
    }else if(freq > 12000 && freq < 13000 ){
            brush = img4;
    }else if(freq > 14000 && freq < 15000 ){
            brush = img2;
    }else if(freq > 15000 ){
            brush = img3;
    }
    
    
    

    
    if (frameCount%5 == 0){
        
//        noTint();
        
        
//        image(brush, sin(osc1)*size, 0, 180, 180);
        
        
    image(brush, sin(osc1)*size, 0, 80, 80);
        
         fill(50+sin(osc1)*5, 50+sin(osc2)*2, 9, 30);
        strokeWeight(1);
        stroke(50+sin(osc1)*10, 50+sin(osc2)*5, 8+sin(osc2)*2, 50)
//        curve(-sin(osc1)*size/2, 0, sin(osc1)*size, 50, sin(osc1)*size, sin(osc1)*size*2, sin(osc1)*size*2, sin(osc2)*-size );
        
//        curve(0,0, 0, -sin(osc1)*size/2, 0, sin(osc1)*size*2, 0, 0);
   

//    image(img, sin(osc1)*100, sin(osc2)*-100, 60, 60);
    }
     if (frameCount%10 == 0){
         
    image(brush, sin(osc2)*-size, 0, 50, 50);
//         noTint();
         image(brush, width/2-width/4, sin(osc2)*-size, 120, 120); 
//             line(sin(osc1)*size,0, 0, sin(osc2)*-size);
//         curve(0, -sin(osc1)*size/2, sin(osc1)*size*2, 50, sin(osc1)*size*2, sin(osc1)*size/2, sin(osc1)*size*4, sin(osc2)*-size*2 );
        
     }
     if (frameCount%12 == 0){
         
//          noTint();
          image(brush, 0, sin(osc1)*size, 90, 90);
         
         image(brush, width/4-width/2, sin(osc1)*size, 90, 90);
         
//         line(0,0, sin(osc1)*size, sin(osc2)*-size);
//            curve(0, sin(osc1)*size/2, 20+sin(osc1)*size/5, 50, sin(osc1)*size*2, sin(osc1)*size/2, sin(osc1)*size*4, sin(osc2)*-size*2 );
        
     }
    
    if (frameCount%30 == 0){
      image(brush, 0, sin(osc2)*-size, 30, 30); 
        
        
//        curve(-sin(osc1)*size/2, -sin(osc1)*size/2, sin(osc1)*size, -sin(osc1)*size/2, 0, sin(osc1)*size*2, sin(osc1)*size*2, 0);

    }
    
    if (frameCount%60 == 0){
        
        tint(map(freq, 220, 440, 1, 120)%120, 50, 9, 70);
//    tint(frameCount%120, 50, 9, 80);
//        noTint();
    image(brush, 0, 0, 100, 100);
//    image(img, sin(osc1)*100, sin(osc2)*-100, 60, 60);
    }
     
    
    pop();
    
   colorMode(RGB);
    
    //}else{
        //image(img2, frameCount%300, frameCount%300, value, value);
   // }
    
//    playOscillator();
   
    
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
        this.size = spacing/2;
        this.color = color(255);
    }
    
    update(){
        this.x = mouseX;
        this.y = mouseY;
        
    }
    
    display(){
        fill(this.color);
        rectMode(CENTER);
        strokeWeight(0.5);
        ellipse(this.x, this.y, this.size, this.size);
    }
    
    mouseInside(){
        if ((mouseX< (this.x + this.size/2)) && (mouseX > (this.x -this.size/2))){
            
            if (mouseY > this.y -this.size/2 && mouseY< this.y + this.size/2 ){
                
                if (mouseIsPressed){
                
                    clearCanvas();
                    this.color = color(230,50);
                }
                else{ this.color = color(255);
                    }
            }
        }
        
    }
}

function draw(){
    
    
    //drawButtons();
//    myButton.update();
    myButton.mouseInside();
    myButton.display();
//    line (map(freq,330,900,0,width), 300, map(freq,330,900,canvas.position.x,canvas.width), height);
   
//    line (freq/3-width/2,height/2+height/8, freq/3-width/2,height/2+height/4);
    
  translate(canvas.width/2, canvas.height/4 );
    
//  rotate(PI / 180 * frameCount*12%360);
  //dist= sqrt(pow((mouseX - xcenter),2) + pow((mouseY - ycenter),2));
      //if (mouseIsPressed && dist<radius) {
          
    if (mouseIsPressed) {
//      stroke(0);
        strokeWeight(1);
         stroke(0);
//        line (freq/5-width,height/2-height/32, freq/5-width,height-height/2);
        
        
          rotate(PI / 180 * frameCount*n%360);
//        playOscillatorLong();
//        playOscillator();
        
        
        paintEllipse(freq);
           
        
//        playInDraw();
        
        n++;
        
          //image(img, canvas.width/2 +value, canvas.height/2 -value, value, value);
         // updateValue();
    } else {
        //value = 10;
      stroke(237, 34, 93);
    }
    
    if (mouseReleased){
        mousePressedOnce = false;
//        stopOscillator();
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

//  freq = constrain(map(mouseX, 0, width, 330, 660), 330, 660);
    // start from G
    freq = constrain(map(mouseX, spacing/4, width , 391.995, 783),391.995,783);
    
    octave = int(map( mouseY-height/4 -10, height/2+spacing/2, height-height/4 -50, 4, 1));
    if (octave != 0){
        freq = freq * octave;
    }else {freq = freq/2};
  
    
    
    
    if (frameCount% 60 == 0){
    //console.log(mouseY-400);
//    console.log(freq);
    }
//    strokeWeight(2);
//    line (0-canvas.width/2, height/2, canvas.width-canvas.width/2, height/2);
//    
//     line (0-canvas.width/2, height-height/4 -20, canvas.width-canvas.width/2, height-height/4-20);
    
//    freq = freq * map(mouseY, height-300, height, 1, 3);
//    line (map (freq, 330, 990, 0, width), 400, map(freq, 330, 990, 0, width), height);
    
//  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 0.1);
    
//    amp = constrain (map(sin(osc1*100), -1, 1, 0, 0.1), 0, 0.1);

//   text('tap to play', 20, 20);
//   text('freq: ' + freq, 20, 40);
//   text('amp: ' + amp, 20, 60);
//
  if (playing) {
    // smooth the transitions by 0.1 seconds
    triOsc.freq(freq, 0.001);
      
    triOsc.amp(amp, 0.001);
      
         triOsc2.freq(constrain(map(freq, 440, 40000, 165, 5000),165,5000), 0.9);
      
    triOsc2.amp(amp, 0.005);
      
    
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

function playOscillator2() {
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  triOsc2.start();
    env2.play(triOsc2);
  playing = true;
}

//
//function playOscillatorLong() {
//  // starting an oscillator on a user gesture will enable audio
//  // in browsers that have a strict autoplay policy.
//  // See also: userStartAudio();
//    if (!mousePressedOnce) {
////  triOsc.start();
////    env.play(triOsc);
//  playing = true;
//    mousePressedOnce = true;
//        stopOscillator();
//    }
//}

function stopOscillator() {
  // ramp amplitude to 0 over 0.5 seconds
  triOsc.amp(0, 0.2);
  playing = false;
    
      triOsc2.amp(0, 0.01);
  playing = false;
}

//function mouseReleased() {
//  // ramp amplitude to 0 over 0.5 seconds
//  triOsc.amp(0, 0.2);
//  playing = false;
//}
function mousePressed(){
    background(250, 250, 255,5);
    
    if (mouseY-height/4<height/2){
        
        action2();
    }
//    action2();
    
    
//    rotate(PI / 180 * frameCount%360);
}

function mouseReleased(){
    stopOscillator();
//    rotate(PI / 180 * frameCount*12%360);
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
