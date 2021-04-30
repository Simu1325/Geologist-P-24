class Iron {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':30
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill("brown");
      stroke("DarkRed");
      strokeWeight(4);
      translate(pos.x,pos.y);
      rotate(angle);
      rect(0,0, this.width, this.height);
      pop();
    }
  };