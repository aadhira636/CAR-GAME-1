var database,ballposition,position;
var form;
var player;
var game;
var gameState = 0;
var playerCount = 0;
var allplayers;
var car1,car2,car3,car4;
var cars;
var car1Img,car2Img,car3Img,car4Img,groundImg,track1Img,track2Img;


function preload()
{
    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    groundImg = loadImage("images/ground.png");
    track1Img = loadImage("images/track.png");
    track2Img = loadImage("images/track.jpg");

}


function setup(){
    database = firebase.database();
    createCanvas(displayWidth/2-20,displayHeight/2-30);
    game = new Game();
    game.getState();
    game.start();


}

function draw(){
    background("white");
    drawSprites();

    if(playerCount===4)
    {
        game.update(1)
    }

  //  game.getState();
    console.log(gameState);
    if(gameState===1)
    {
        clear();
        game.play();
    }

}