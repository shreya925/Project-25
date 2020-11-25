class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':2.0,
          'density':1.9,
          'isStatic':true
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image1 = loadImage("dustbin.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      //rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill("white");
      //rect(0, 0, this.width, this.height);
      imageMode(CENTER);
      image(this.image1, pos.x, pos.y-70, 150, 150);
      pop();
    }
  };
  