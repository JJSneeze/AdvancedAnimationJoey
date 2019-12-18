//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
var squares = [];
var triangles = [];
var c = 100;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  for (let i = 0; i < c; i++){
    balls[i] = new Ball(random(width), random(height),random(-10, 10),random(-10, 10));
    triangles[i] = new Triangle(random(width), random(height),random(-10, 10),random(-10, 10));
    squares[i] = new Square(random(width), random(height),random(-10, 10),random(-10, 10));
  }
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
  for (let i = 0; i < c; i++){
    balls[i].run();
    triangles[i].run();
    squares[i].run();
  }
}
