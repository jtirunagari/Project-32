class Slingshot
{

    constructor(a,b)
    {
        var features= {
            bodyA: a,
            pointB: b,
            stiffness: 0.04,
            length:20
        }
        this.connection=Constraint.create(features)
        World.add(myWorld,this.connection)
        console.log(this.connection.pointB)
        
    }
    display(){
        if(this.connection.bodyA!= null){
            var a= this.connection.bodyA.position
            var b= this.connection.pointB
            stroke("white")
            strokeWeight(5)
    line(a.x,a.y,b.x,b.y);
        }
    }
    breaktheConnection(){
        this.connection.bodyA=null
    }
}