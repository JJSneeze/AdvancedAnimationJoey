class Snake{

  constructor(x, y){
    this.headLoc = createVector(x, y);
    this.headVel = createVector(random(-5, 5), random(-5, 5));

    this.heads = [];
    this.tails = [];

    this.acc = createVector(0,0);

  }

  loadSegs(){
    this.heads[0] = createVector(this.headLoc.x, this.headLoc.y);
    this.tails[0] = createVector(this.heads[0].x-(headV.normalize()).mult(40).x, this.heads[0].y-(headV.normalize()).mult(40).y)
    for (let i = 1; i < 2; i++){
      this.heads[i] = createVector(this.tails[i-1].x, this.tails[i-1].y);
      this.tails[i] = createVector(this.heads[i].x-(headV.normalize()).mult(40).x, this.heads[i].y-(headV.normalize()).mult(40).y)
    }
  }

  render(){
    fill(123, 219, 160);
    ellipse(this.headLoc.x, this.headLoc.y, 18);
    for(let i = 0; i < this.heads.length-1; i++){
      strokeWeight(12);
      stroke(123, 219, 160, 70);
      line(this.heads[i].x, this.heads[i].y, this.tails[i].x, this.tails[i].y);
      strokeWeight(1);
    }
  }

  update(){
    this.headVel.add(this.acc);
    this.headVel.limit(10);
    this.headLoc.add(this.headVel);
    for (let i = this.heads.length-1; i > 0; i--){
      this.heads[i] = p5.Vector.sub(this.heads[i], this.heads[i-1]);
      this.heads[i].setMag(40);
      this.heads[i] = p5.Vector.add(this.heads[i], this.heads[i-1]);
      this.tails[i-1] = this.heads[i];
    }
    this.heads[0] = createVector(this.headLoc.x, this.headLoc.y);
    this.acc = createVector(0,0);
  }

  checkEdges(){
    if(this.headLoc.x < 0){
        this.headVel.x = -this.headVel.x;
        this.headLoc.x = 2;
      }

      if(this.headLoc.x > width){
        this.headVel.x = -this.headVel.x;
      }

      if(this.headLoc.y < 0){
        this.headVel.y = -this.headVel.y;
      }

      if(this.headLoc.y > height){
        this.headVel.y = -this.headVel.y;
        this.headLoc.y = height-2;
      }
  }


  run(){
    this.render();
    this.update();
    this.checkEdges();
  }

}
