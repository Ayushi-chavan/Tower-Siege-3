
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var dustbin1,groundObject;
var world;
var sling;
var score = 0
var backgroundImg

function preload()
{
  getDateTime()
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
  polygon1=new Polygon (200,25,25);
  groundObject=new Ground(width/2,620,width,20);
  groundObject2 = new Ground(585,400,270,15);
  groundObject3 = new Ground(1000,300,330,15); 
    

    box1 = new Box(480,390,50,50);
    box2 = new Box(530,390,50,50);
    box3 = new Box(580,390,50,50);
    box4 = new Box(635,390,50,50);
    box5 = new Box(680,390,50,50);
    box6 = new Box(505,315,50,50);
    box7 = new Box(550,315,50,50);
    box8 = new Box(595,315,50,50);
    box9 = new Box(640,315,50,50);
    box10 = new Box(520,265,50,50);
    box11 = new Box(560,265,50,50);
    box12 = new Box(600,265,50,50);
    box13 = new Box(535,215,50,50);
    box14 = new Box(580,215,50,50);
    box15 = new Box(555,150,50,50);

    box111 = new Box(960,260,50,50);
    box22  = new Box(990,260,50,50);
    box33  = new Box(1020,260,50,50);
    box44  = new Box(965,205,50,50);
    box55  = new Box(990,205,50,50);
    box66  = new Box(980,150,50,50)


    sling = new Slingshot(polygon1.body,{x:125,y:400});

	Engine.run(engine);
  
}


function draw() {
  if(backgroundImg)
        background(backgroundImg);
    Engine.update(engine);
    noStroke()
    textSize(35)
    fill("brown")
    text("SCORE : "+score,width-300,50)

  polygon1.display();
  groundObject.display();
  groundObject2.display();
  groundObject3.display();
 
  fill("magenta")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box111.display();
  box22.display(); 
  box33.display(); 
  box44.display();
  box55.display();
  box66.display();
  
  sling.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  
  box111.score();
  box22.score();
  box33.score();
  box44.score();
  box55.score();
  box66.score();
  
  textSize(20);
  fill("blue");
  text("Drag the ball to destroy the blocks",300,30);
}

function mouseDragged(){

  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

sling.fly()

}

async function  getDateTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13)
  if(hour >=6 && hour<=18)
  {
      bg = "day.jpg"
  }
  else
  {
      bg = "night.jpg"
  }

  backgroundImg = loadImage(bg)
}