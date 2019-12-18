class Axis{

  constructor(){}

  run(){
    this.render();
  }

  render(){
    stroke(255, 0, 0);
    strokeWeight(2);
    line(0, -400, 0, 400); //x1, y1, x2, y2 vertical
    line(-400, 0, 400, 0); //horizontal
    strokeWeight(1);
  }

} //end of class
