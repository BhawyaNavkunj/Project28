class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.004,
            length:5,
        }
        this.body = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.body);
    }

    fly(){
        this.body.bodyA = null;
    }

    attach(body){
        this.body.bodyA = body;
    }

    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3);
        stroke(0,0,0);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}