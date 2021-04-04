class Roof {
    constructor (x,y,w,h)
{
    var options = {
        isStatic:true
    }
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;

    this.body = Bodies.rectangle(x,y,w,h, options)
    World.add(world,this.body);
}
display()
{
    var groundPos = this.body.position;
    push()
    translate(paperPos.x, paperPos.y);
    rectMode(CENTER)
    fill(145,145,145)
    rect(0,0,this.w,ths.h);
	pop()
}
}