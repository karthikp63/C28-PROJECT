class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/tree.png")

    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }
    
}