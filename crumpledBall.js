class CrumpledBall {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.5
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
    ellipseMode(RADIUS)
    fill("white");
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
}