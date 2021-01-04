class Stone{
  constructor(x, y, r, angle) {
    var options = {
        'friction':1.0,
        'density':1.0
    }
    
    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x, this.y,this.r,options);
    this.image = loadImage("sprites/stone.png");
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
  }
  
  