class Mango{
    constructor(x,y,diamtre){
    var options={
        isStatic:true,
        restitution:0.5,
        friction:1.0
    }
    this.body=Bodies.circle(x,y,radius,options);
    this.radius=this.radius
    this.image=loadImage("Plucking mangoes/mango.png")
    World.add(world,this.body);
    }

    display(){
       // var ang=this.body.angle
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        //rotate(ang);
        imageMode(CENTER);
        image(this.image,0,0,this.radius);
        pop();

    }
}