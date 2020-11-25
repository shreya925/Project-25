
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100, 100, 30);

	dustbin1 = new Dustbin(890, 785, 200, 10);
	//dustbin2 = new Dustbin(990, 740, 10, 100);
	//dustbin3 = new Dustbin(1190, 740, 10, 100);


	ground = new Ground(700, 800, 1500, 20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  paper1.display();
  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  
  ground.display();
  drawSprites();
 
  

}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:205, y:-225});
}
}