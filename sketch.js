const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground, tree, treeImg, boy, boyImg, stone, launcher;
var mango1, mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10, mango11;

function preload(){
	treeImg = loadImage('Images/tree.png');
	boyImg = loadImage('Images/boy.png');
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	stone = new Stone(100,460,50);
	mango1 = new Mango(600,290);
	mango2 = new Mango(855,325);
	mango3 = new Mango(670,200);
	mango4 = new Mango(700,330);
	mango5 = new Mango(750,200);
	mango6 = new Mango(780,250);
	mango7 = new Mango(850,250);
	mango8 = new Mango(670,260);
	mango9 = new Mango(940,220);
	mango10 = new Mango(980,325);
	mango11 = new Mango(850,160);
	launcher = new Launcher(stone.body,{x:100,y:465});

	tree = createSprite(775,368);
	tree.addImage(treeImg);
	tree.scale = 0.42;

	boy = createSprite(160,550);
	boy.addImage(boyImg);
	boy.scale = 0.125;
	var render = Render.create
	({ element: document.body,
		engine: engine,
		options:{
			width: 1300,
			height: 800,
			wireframes: false
		}
	});
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  
  ground.display();
  drawSprites();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:100,y:460});
		launcher.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
	}




