
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle = 0;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 1,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
ground = Bodies.rectangle(100, 200, 100, 30, ground_options);
//add to world
World.add(world, ground)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  fill("pink");
  Matter.Body.rotate(ground,angle);
  ellipse(ball.position.x,ball.position.y,20);
  push();
  fill("green");
  //write a rectangle function to display ground.
  rectMode(CENTER);
  translate(ground.position.x, ground.position.y)
  rotate(angle)
  rect(0, 0, 100, 30);
  pop();
  angle+=0.1;
}

