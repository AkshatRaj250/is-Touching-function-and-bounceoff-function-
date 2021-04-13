var movingRectangle;
var standStillRectangle;
var game1;
var game2;

function setup() {
  createCanvas(800,400);
 movingRectangle = createSprite(400, 200, 100, 50);
 movingRectangle.shapeColor = "blue";
 standStillRectangle = createSprite(600,200,100,50);
 standStillRectangle.shapeColor = "blue";
 standStillRectangle.velocityY = -7
 game1 = createSprite(400,350,100,50);
 game1.shapeColor = "red";
 game2 = createSprite(600,150,100,50);
 game2.shapeColor = "cyan";
 game2.velocityY = 7;

}

function draw() {
  background(255,255,255);
  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;
  console.log(movingRectangle.x - standStillRectangle.x) 
  console.log(movingRectangle.y - standStillRectangle.y)

 

 if (isTouching(movingRectangle,game1)){
  movingRectangle.shapeColor = "green";
  game1.shapeColor = "green";

  game1.velocityY = -5;
}
else{
  movingRectangle.shapeColor = "blue";
  game1.shapeColor = "red";
  game1.velocityY = 0;
}
  bounceOff(standStillRectangle,game2);
  drawSprites();
}

