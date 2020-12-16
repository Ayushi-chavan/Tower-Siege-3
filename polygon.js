class Polygon {

	constructor(x,y,r){
	
	 var options = {
   
	 isStatic:false,
	 restitution:0,
	 friction:1,
	 density:0.5
	 }
	this.image=loadImage("polygon.png");
	this.body=Bodies.circle(x,y,r,options)
	this.r = r;
	World.add(world,this.body)
	}
   
	display(){
	
	var pos=this.body.position;
	push()
	translate(pos.x,pos.y)
	rotate(this.body.angle)
	fill(255,0,255)
	imageMode(CENTER);
	ellipseMode(CENTER);
	image(this.image,0,0,this.r*2,this.r*2)
	pop()
   
   
	}
	}