var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../carRacingStage2.5/images/track.jpg");
  car1_img = loadImage("../carRacingStage2.5/images/car1.png");
  car2_img = loadImage("../carRacingStage2.5/images/car2.png");
  car3_img = loadImage("../carRacingStage2.5/images/car3.png");
  car4_img = loadImage("../carRacingStage2.5/images/car4.png");
  ground = loadImage("../carRacingStage2.5/images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
