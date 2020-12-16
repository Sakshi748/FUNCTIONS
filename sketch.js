var fixedRect, movingRect;
var Rect1,Rect2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(600,300,70,40);
Rect1=createSprite(200,200,60,60);
Rect2=createSprite(400,300,30,30);
Rect1.velocityX = 5;
Rect1.velocityY = 3;
Rect2.velocityX =-3 ;
Rect2.velocityY =-3; 
}

function draw() {
  movingRect.x = mouseX;
  movingRect.y=mouseY;
  
  background("skyblue");  
 if( isTouching(Rect1,Rect2)){
  fixedRect.shapeColor="red";
  movingRect.shapeColor="blue";
 } else
 {
  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="purple";
 }

 Bounce(Rect1,Rect2);
  drawSprites();
}

