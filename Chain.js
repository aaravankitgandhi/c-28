class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length:10,
            stiffness:0.05,
        }
        this.pointB=pointB;
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    fly(){
        this.chain.bodyA=null
    }
    display(){
        if(this.chain.bodyA){
        
        
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y);
    }}

    
}