class Paper{
    constructor(x, y) {
        var options = {
            isStatic:false,
            'friction':0.5,
            'density':1.2,
            restitution:0.3,

        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20
        World.add(world, this.body);
      }
      display(){
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
      }
}