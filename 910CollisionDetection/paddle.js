
class Paddle{

  constructor(x, y){
    this.loc = createVector(x, y)
    this.clr = color(255, 255, 255);
    this.w = 200;
    this.h = 100;
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
