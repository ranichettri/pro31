class Plinko {
    constructor(x,y){
        var option = {
            isStatic:true,
            restitution:0.5
        }
        this.body = Bodies.circle(x,y,10,option);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
    display(){
        
        push();
        translate(this.x,this.y);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }
};