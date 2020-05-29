const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var movingRect;
var ball;
function setup() 
{
  createCanvas(1200,800);
 
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ball =  createSprite(400, 100,20,20);
  ball.shapeColor = "green";
  ball.debug = true;
   
  movingRect.velocityY = -5;
  ball.velocityY = 5;

 
}
function draw() 
{
    background(0,0,0);  

    bounceoff(movingRect,ball);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

  
    movingRect.display(); 

 
  drawSprites();
}






