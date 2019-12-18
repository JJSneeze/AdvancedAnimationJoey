//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
// var numSegments = 8
var headV;

function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  snake = new Snake()
  headV = createVector(snake.headVel.x, snake.headVel.y);
  snake.loadSegs();

}
//  The draw function is called @ 30 fps
function draw(){
  background(5, 5, 5, 70);
  headV = createVector(snake.headVel.x, snake.headVel.y);
  snake.run();
}
