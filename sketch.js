
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var img,boy;
var img2,tree;

function preload()
{
  img=loadImage("Plucking mangoes/boy.png");
  img2=loadImage("Plucking mangoes/tree.png");
  
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(500,height,1000,20);
    stone1= new Stone(100,460,23);

    attach=new Throw(stone1.body,{x:100,y:460});

    mango1=new Mango(600,290,34);
    mango2=new Mango(855,325,35);
    mango3=new Mango(670,260,35);
    mango4=new Mango(730,20,35);
    mango5=new Mango(710,320,36);
    mango6=new Mango(780,250,35);

   // tree1= new Tree(600,450,300,500);

    tree=createSprite(775,368);
    tree.addImage(img2);
    tree.scale=0.42

    boy=createSprite(160,550);
    boy.addImage(img);
    boy.scale=0.125

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
 // tree1.display();

  ground1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  attach.display();

fill("black");
textSize(18);

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  attach.fly();
}

function detectCollision(lstone,lmango){
  if(lstone.body.position.x-lmango.body.position.x<lmango.diamtre+lstone.diamtre
    &&lmango.body.position.x-lstone.body.position.x<lmango.diametre+lstone.diamtre
    &&lstone.body.position.y-lmango.body.position.y<lmango.diamtre+lstone.diamtre
    &&lmango.body.poaition.y-lstone.body.position.y<lmango.diamtre+lstone.diamtre
    )
    {
Matter.body.setStatic(lmango.body,false);
    }
  }

  function keyPressed(){
    if(keyCode===32){
      Matter.body.setPosition(stone1.body,{x:100,y:550});
      attach.launch(boy.body);
    }
    
  }