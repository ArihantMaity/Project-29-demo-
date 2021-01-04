class Stone{
    constructor(x,y,diamtre){
     
        var options ={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,diamtre,options);
        this.diamtre=diamtre
        this.image=loadImage("Plucking mangoes/stone.png")
        World.add(world,this.body);
    }

    display(){
  // var ang=this.body.angle
   var pos=this.body.position
   push()
   translate(pos.x,pos.y);
   //rotate(ang);
   imageMode(CENTER);
   image(this.image,0,0,this.diamtre);
   pop();
        
    }
}