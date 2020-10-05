var ball, ground,bin1,bin2,bin3;


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

	var options1 = {
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2,
		}

		var options2 = {
			isStatic: true,
			}

			


	//Create the Bodies Here.
	ground = Bodies.rectangle(400,671,801,20, options2);

	fill(203,223,234);
	ball = Bodies.circle(100, 200, 20, options1);

	bin1 = Bodies.rectangle(600,591,20,100,options2);
	bin2 = Bodies.rectangle(700,591,20,100,options2);
	bin3 = Bodies.rectangle(650,630,128,20,options2);

	
	   World.add(world, ground);
		World.add(world, ball);
		World.add(world, bin1);
		World.add(world, bin2);
		World.add(world, bin3);

	Engine.run(engine);
  

	
	

}


function draw() {
  rectMode(CENTER);
  background(0);

  
  

	ellipse(ball.position.x,ball.position.y, 30, 30);
	rect(ground.position.x,ground.position.y,801, 60);
	rect(bin1.position.x, bin1.position.y,20, 100);
	rect(bin2.position.x, bin2.position.y,20, 100);
	rect(bin3.position.x, bin3.position.y,128, 20);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85}); 
	
}
 }

