
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var img,boy;
var img2,tree;
var mangobody,stonebody

function preload()
{
  img=loadImage("Plucking mangoes/boy.png");
  img2=loadImage("Plucking mangoes/tree.png");
  
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

  /*var boyoptions ={
    isStatic:true
  }

   boy=Bodies.rectangle(160,550,20,20,boyoptions);
   World.add(world,boy);*/

  //Create the Bodies Here.
  tree1= new Tree(600,450,300,500);
    ground1 = new Ground(500,height,1000,20);
    
    stone1= new Stone(100,460,23);

    attach=new Throw(stone1.body,{x:100,y:460});

    mango1=new Mango(600,300,30);
    mango2=new Mango(855,500,35);
    mango3=new Mango(670,260,35);
    mango4=new Mango(730,20,35);
    mango5=new Mango(710,320,36);
    mango6=new Mango(780,250,35);



    /*boy=createSprite(160,550);
    boy.addImage(img);
    boy.scale=0.125*/

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
 // tree1.display();
 tree1.display();
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

 imageMode(CENTER);
 image(img,160,550,150,380)

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);

  
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  attach.fly();
}

function detectCollision(lstone,lmango){
  mangobody=lmango.body.position
  stonebody=lstone.body.position
  var distance = dist(stonebody.x,stonebody.y,mangobody.x,mangobody.y)
  if(distance<=lmango.r+lstone.r)
     {
Matter.Body.setStatic(lmango.body,false);
    }
    else{
Matter.Body.setStatic(lmango.body,true);
    }
  }

  /*function keyPressed(){
    if(keyCode===32){
      Matter.body.setPosition(stone1.body,{x:100,y:550});
      attach.launch(boy.body);
    }
    
  }*/