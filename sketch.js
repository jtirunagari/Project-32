const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var block1,block2,block3,block4,block5,block6,block7,block8,block9
var stand1
var b
function preload(){
  decideBackgroundImage()
}
function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  //top
  block1= new Box(390,155,30,40)
  //level 2
  block2= new Box(330,235,30,40)
  block3= new Box(360,235,30,40)
  block4= new Box(390,235,30,40)
  block5= new Box(420,235,30,40)
  block6= new Box(450,235,30,40)
  //level 3
  block7= new Box(360,195,30,40)  
  block8= new Box(390,195,30,40)
  block9= new Box(420,195,30,40)
  polygon=new Polygon(50,200,20);
  World.add(myWorld,polygon);
  slingShot=new Slingshot(polygon.body,{x:100,y:200});
  stand1=new Ground(390,300,200,10)
}

function draw() {
  if(b)
  background(b);  
  Engine.update(myEngine)
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  polygon.display()
  slingShot.display()
  stand1.display()
  drawSprites(); 
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
  console.log("hi")
}
function mouseReleased(){
  slingShot.breaktheConnection()
  console.log("oreo")
}
async function decideBackgroundImage(){
  var response= await fetch("http://worldclockapi.com/api/json/est/now")
  var data= await response.json()
  var time= data.currentDateTime
  var hour= time.slice(11,13)
  if (hour>6 && hour<15){
    b= "#0000ff"
  }
  else{
    b= "#FFC0CB"
  }
}