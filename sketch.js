
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ball;
var groundobj,leftside;
var rock;
var wall;



function setup() {
	createCanvas(800, 700);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200,50,10,ball_options);
	World.add(world,ball);
    
	
	groundobj=new ground(width/2,670,width,20);
	leftside=new ground(1100,600,20,120);
	

	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundobj.display();
 
  drawSprites();
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
 
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}



