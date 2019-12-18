// Joey Jacob
class Ship{

  constructor(x, y, dx, dy, stat){
      this.loc = createVector(x, y)
      this.vel = createVector(dx, dy)
      this.acc = createVector(0, 0)
      this.clr = color(0, 255, 244);
      this.w = 15;
      this.angle = 0
      this.stat = stat
      if(this.stat == -2){
        this.clr = color(255, 255, 255);
        this.w = 50;
      }
      if(this.stat == -1){
        this.clr = color(240, 240, 240);
        this.w = 50;
      }
  }
  run(){
    this.checkEdges();
    this.update();
    this.render();
    this.checkPosition();
  } //end of run

  checkEdges(){
  if(this.loc.x < 0){
    if(this.stat > -1){
      this.vel.x = -this.vel.x;
      this.loc.x = 2;
    } else{
      this.loc.x = width
    }
  }

  if(this.loc.x > width){
    if(this.stat > -1){
      this.vel.x = -this.vel.x;
    } else{
      this.loc.x = 0
    }
  }

  if(this.loc.y < 0){
    if(this.stat > -1){
      this.vel.y = -this.vel.y;
    } else{
      this.loc.y = height
    }
  }

  if(this.loc.y > height){
    if(this.stat > -1){
      this.vel.y = -this.vel.y;
      this.loc.y = height-2;
    } else{
      this.loc.y = 0
    }
  }
} //end of checkEdges

  update(){
    this.vel.add(this.acc)
    this.vel.limit(4)
    this.loc.add(this.vel)
    this.acc = createVector(0,0)
  } //end of update

  render(){
    fill(this.clr);
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.vel.heading()+PI/2);
    triangle(-5, 0, 5, 0, 0, -15);
    pop();
    } //end of render

  checkPosition(){
    if(this.stat > -1){
    var dist1 = this.loc.dist(attrac.loc);//attrac
    var dist2 = this.loc.dist(repel.loc);//repel
      if(dist1 <= 85){
        this.acc = p5.Vector.sub(attrac.loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.5);
    }
      if(dist2 <= 85){
        this.acc = p5.Vector.sub(this.loc, repel.loc);
        this.acc.normalize();
        this.acc.mult(1);
      }
    } //end of if statement
  } //end of checkPosition
} // end of code
