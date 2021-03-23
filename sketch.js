
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	

dustbin1 = new Dustbin(600, 600, 200,20)
crumpledball = new CrumpledBall(200,400, 20, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800,20)
  dustbin1.display();
  crumpledball.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(crumpledball.body, crumpledball.body.position,{
			x: 500,
			y:100 });
	}
}


