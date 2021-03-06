class bassClass{
    constructor(x,y,width,height,angel){
    var option = {
        'restitution':0.8,
        'fcition':1.0,
        'density':1.0,
    }
    this.body = Bodies.rectengle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/bass.png");
    World.add(world, this,body);
}
display(){
    var angle = this.body.angle;
    Push();
    Translete(this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    Pop();
    }
}
