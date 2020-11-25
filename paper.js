class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          'restitution':0.05,
          'friction':2,
          'density':1.5
      }
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      //ellipseMode(RADIUS);
     // strokeWeight(4);
      //stroke("purple");
      fill("purple");
      //ellipse(pos.x, pos.y, this.radius, this.radius);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.radius+25, this.radius+25);
      pop();
    }
  };
  