const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground, tree, stone, boy, sling;
var engine, world;
var mango1, mango2, mango3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,650,800,20)
	stone = new Stone(50,500,50)
	tree = new Tree(650,368,300,600)
	boy = new Boy(120,600,200,200)
	sling = new Chain(stone.body, {x:60, y: 550})
	mango1 = new Mango(650,200, 50)
	mango2 = new Mango(600,200, 50)
	mango3 = new Mango(550,200, 50)
	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER)
  background('white');
  Engine.update(engine);
  //drawSprites();
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  ground.display();
  tree.display();
  stone.display();
  boy.display()
  mango1.display()
  mango2.display()
  mango3.display()
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(stone.body, {x:50, y:500})
        sling.attach(stone.body)
    }
}

function detectCollision(ThrowRock,mango){
    mangoBodyPosition=mango.body.position;
    stoneBodyPosition=ThrowRock.body.position;
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=mango.r+stone.r){
    Matter.Body.setStatic(mango.body,false);	

    }
}


