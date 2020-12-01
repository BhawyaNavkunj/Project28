class Mango{
    constructor(x,y){
        var options={
            'isStatic':true,
            'restitution':0.5,
            'friction':1.0,
        }
        this.body = Bodies.circle(x,y,60,options);
        this.image = loadImage('Images/mango.png');
        World.add(world,this.body)
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,60,60);
        pop();
    }
}