// Joey Jacob
class Triangle{

  constructor(x, y, dx, dy){
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.clr = color(random(255), random(255), random(255));
      this.w = random(10, 30);
  }
  run(){
    this.checkEdges()
    this.update()
    this.render()
  }
  checkEdges(){
    if(this.x < 0){
      //this.dx = -this.dx;
      this.x = width;
  }

  if(this.x > width){
    //this.dx = -this.dx;
    this.x = 0;
  }

  if(this.y < 0){
    //this.dy = -this.dy;
    this.y = height;
  }

  if(this.y > height){
    //this.dy = -this.dy;
    this.y = 0;
  }
}
  update(){
    this.x = this.x+this.dx;
    this.y = this.y+this.dy;
  }
  render(){
    fill(this.clr);
    triangle(this.x, this.y, this.x+this.w, this.y+this.w, this.x+this.w, this.y);
  }

} // end of code
