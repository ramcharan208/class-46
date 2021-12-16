var backgroundImg,bg;

var enemyImg,enemy;

var sship,ship;

var explosionSound,bulletSound;

function preload(){

    backgroundImg= loadImage("background.png") ;

    sship= loadImage("shship.png");

    enemyImg= loadImage("enemyship.png");

    explosionSound= loadSound("explosion.wav")

    bulletSound= loadSound("bullet.wav")
}


function setup(){

    createCanvas(600,500);

    bg=createSprite(200,250,800,500);
    bg.addImage(backgroundImg);
    bg.scale=2.6;
    bg.velocityY=8;

    ship=createSprite(300,400,20,20);
    ship.addImage(sship);
    ship.scale=0.5;

 

}


function draw(){
    background("black");

    ship.x

    drawSprites()
}