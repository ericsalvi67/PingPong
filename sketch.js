// Ball setings
let xball = 450;
let yball = 300;
let diameter = 20;
let bradius = diameter / 2;

// Ball speed
let speedxball = 7;
let speedyball = 7;

// racket settings
let xrect = 10;
let yrect = 250;
let wrect = 10;
let hrect = 100;
let rradius = 25;

let collide = false;
  
let speedyracket = 7;

//racket settings opponent
let xrect2 = 880;
let yrect2 = 250;

let speedyracketop;

// SET THE DIFFICULTY -------------
let difficulty = 99;
//---------------------------------

//Score
let points = 0;
let points2 = 0;

//Sound
let ponto;
let raquetada;
let trilha;

function setup() {
  createCanvas(900, 600);
  hearts.loop();
 
  
}

function draw() {
  background(0);
  showball();
  speedball();
  ballverify(xball, yball);
  showracket(xrect, yrect);
  speedracket();
  colliderect(xrect, yrect);
  showracket(xrect2, yrect2);
  speedracketop();
  colliderect(xrect2, yrect2);
  scoreboard();
  scorepoints();
}

// Ball codes
function showball(){
  circle(xball, yball, diameter);
}

function speedball(){
  xball += speedxball;
  yball += speedyball;
}

function ballverify(){
    if (xball + bradius > width ||
     xball - bradius < 0){
    speedxball *= -1;  
  }
  if (yball + bradius > height ||
     yball - bradius < 0){
    speedyball *= -1;
  }
}


// Racket codes
function showracket(x, y){
  fill(255, 204, 0);
  rect(x, y, wrect, hrect, rradius);
 
}

function speedracket(){
  if (keyIsDown(UP_ARROW)){
       yrect -= speedyracket;
  }
  if (keyIsDown(DOWN_ARROW)){
    yrect += speedyracket;
  }
}

// Colide function
function colliderect(x, y) {
    collide = 
      collideRectCircle(x, y, wrect, hrect, xball, yball, bradius);
  if (collide){
    speedxball *= -1;
    raquetada.play();
  }
}

// Opponent code
function speedracketop(){
  speedyracketop = yball - yrect2 - wrect/2 - 30;
  yrect2 += speedyracketop + difficulty
  chancecalculator()
}

function chancecalculator(){
  if (points2 >= points) {
    difficulty += 1;
    if (difficulty >= 39) {
      difficulty = 40
    }
  } else {
    difficulty -= 1
    if (difficulty <= 35 ) {
      difficulty = 35
    }
  }
}


// Score
function scoreboard(){
  textAlign(CENTER);
  textSize(26);
  fill(color(0, 255, 150))
  rect(385, 8, 30 ,25)
  fill(255);
  text(points, 400, 30);
  fill(color(0, 255, 150))
  rect(485, 8, 30, 25)
  fill(255);
  text(points2, 500, 30);
}

function scorepoints(){
  if(xball > 885){
    points += 1;
    ponto.play()
  }
    if(xball < 10){
    points2 += 1;
    ponto.play()
  }
}

//Sound
 function preload(){
   ponto = loadSound("ponto.mp3");
   raquetada = loadSound("raquetada.mp3");
   hearts = loadSound("8bit- hearts.mp3");
 }





