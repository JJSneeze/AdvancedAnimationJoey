class Grid{

  constructor(){
  } //don't need anything in because you don't need a location vector (only translating)

  run(){
    this.render();
  }

  render(){
    stroke(255, 255, 255, 40);

    for (let i = -50; i < 50; i++){
      line(i * 10, -1000, i * 10, 1000);
    } //X lines

    for (let j = -50; j < 50; j++){
      line(-1000, j * 10, 1000, j *10);
    } //Y lines
  }
} //end of class
