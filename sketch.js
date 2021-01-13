const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,polygon
var score=0;

function preload() {
   polygonimage=loadImage("polygon.png") 
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    polygon= Bodies.circle(50,200,20)
    World.add(world,polygon)
    slingshot = new Slingshot(this.polygon,{ x:100, y:200 })

    ground = new Ground(600,height,1200,20)
    stand1=new Ground(300,160,150,20)
    stand2=new Ground(400,320,250,20)
  

    box1=new Box(200,120,30,40)
    box2=new Box(230,155,30,40)
    box3=new Box(260,155,30,40)
    box4=new Box(290,155,30,40)
    box5=new Box(320,155,30,40)
    box6=new Box(270,125,30,40)
    box7=new Box(310,125,30,40)
    box8=new Box(290,60,30,40)
    
    box9=new Box(460,230,30,40)
    box10=new Box(380,290,30,40)
    box11=new Box(420,280,30,40)
    box12=new Box(500,280,30,40)
    box13=new Box(340,280,30,40)
    box14=new Box(360,240,30,40)
    box15=new Box(410,240,30,40)
    box16=new Box(440,280,30,40)
    box17=new Box(410,200,30,40)
 

}


function draw(){
    background("lightblue");
    
imageMode (CENTER)
image(polygonimage,polygon.position.x,polygon.position.y,40,40)
textSize(30)
text("score "+ score,50,50)

    Engine.update(engine);
    fill ("pink")
   // box1.display();
   // box2.display();
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
    box16.display();
    box17.display();
    slingshot.display()

    stand1.display()
    stand2.display()

    ground.display();
//text(mouseX+","+mouseY,mouseX,mouseY)

box3.score()
box4.score()
box5.score()
box6.score()
box7.score()
box8.score()
box9.score()
box10.score()
box11.score()
box12.score()
box13.score()
box14.score()
box15.score()
box16.score()
box17.score()








    //slingshot.dislay()
}




// arrange boxes
//add mouse dragged , realsed,key preesed
// use text to display the score
// add box1.score() ( for all boxse)

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

        if(keyCode===32){
        slingshot.attach(polygon.body)     
         }

        }



