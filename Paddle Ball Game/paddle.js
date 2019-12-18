
class Paddle{

  constructor(x, y){
    this.loc = createVector(x, y);
    this.clr = color(0);
    this.w = 360;
    this.h = 18;
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    this.loc.x = mouseX;
  }

  render(){
    fill(this.clr);
    rect(this.loc.x-this.w/2, this.loc.y-this.h/2, this.w, this.h);
  }

} // end of code
