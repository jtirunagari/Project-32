class Box
{
    constructor(x,y,w,h)
{
    var boxFeatures = {
        restitution: 1,
        friction:2
      }
      this.body=Bodies.rectangle(x,y,w,h,boxFeatures);
      World.add(myWorld,this.body)
      this.w=w
      this.h=h
      this.image=loadImage("wood1.png")
      this.visibility=255
}
display(){
if(this.body.speed<6){
push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
fill("red")
imageMode(CENTER)
image(this.image,0,0,this.w,this.h);
pop()
}
else{
   World.remove(myWorld,this.body) 
   push()
   tint(255,this.visibility)
   image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    this.visibility=this.visibility-5;
    pop()
}
}
}