class Bob {
    constructor (x,y,r)
{
    var options = {
        isStatic:false,
        restitution:1,
        density:0.8
    }
    this.x= x;
    this.y= y;
    this.r= r;

    this.body = Bodies.circle(this.x, (this.y)/2, options)
    World.add(world,this.body);
}
display()
{
    var paperPos = this.body.position;
    push()
    translate(paperPos.x, paperPos.y);
    rectMode(CENTER)
    fill(250,0,250)
	ellipse(0,0,this.r, this.r);
	pop()
}
}