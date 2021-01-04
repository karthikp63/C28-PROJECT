class Boy{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.image=loadImage("sprites/boy.png");
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        pop();
    }
}