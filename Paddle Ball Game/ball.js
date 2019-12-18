// Joey Jacob
class Ball{

  constructor(x, y, dx, dy){
    this.loc = createVector(x, y)
    this.vel = createVector(dx, dy)
    //this.acc = createVector(0, 0.5)
    this.clr = color(0);
    this.w = 15;
  }
  run(){
    this.checkEdges()
    this.update()
    this.render()
  }
  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
      this.loc.x = 2;
    }

    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }

    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }

    if(this.loc.y > height){
      gameState = 2;
      setup();
    }

    if(this.ifCollisionTop()){
      this.vel.y = -this.vel.y;
      this.loc.y = this.loc.y-5;
      score = score + 1;
    }

    if(this.ifCollisionLeft()){
      this.vel.x = -this.vel.x;
      this.loc.x = this.loc.x-5;
      score = score +0;
    }

    if(this.ifCollisionRight()){
      this.vel.x = -this.vel.x;
      this.loc.x = this.loc.x+5
      score = score+0;
    }
  }

  update(){
    //this.vel.add(this.acc)
    this.loc.add(this.vel)
  }
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }

  ifCollisionTop(){
    if(this.loc.x+this.w > paddle.loc.x-paddle.w/2 &&
      this.loc.y+this.w > paddle.loc.y-paddle.h/2 &&
      this.loc.x-this.w < paddle.loc.x+paddle.w/2 &&
      this.loc.y-this.w < paddle.loc.y+paddle.h/2){
        return true
      }
      return false
    }

    ifCollisionRight(){
      if(this.loc.x+this.w > paddle.loc.x &&
        this.loc.y+this.w > paddle.loc.y-paddle.h/2 &&
        this.loc.x-this.w < paddle.loc.x+paddle.w/2 &&
        this.loc.y-this.w < paddle.loc.y+paddle.h/2){
          return  true
        }
        return false
      }

      ifCollisionLeft(){
        if(this.loc.x+this.w > paddle.loc.x-paddle.w/2 &&
          this.loc.y+this.w > paddle.loc.y-paddle.h/2 &&
          this.loc.x-this.w < paddle.loc.x &&
          this.loc.y-this.w < paddle.loc.y+paddle.h/2){
            return true
          }
          return false
        }
      } // end of code
