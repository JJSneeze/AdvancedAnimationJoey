//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var grid;
var axis;
var count = 0;

function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  translate(width/2, height/2); //translated so they get to the center
  push();
  count = 0
  axis = new Axis();
  grid = new Grid();
}

//  The draw function is called @ 30 fps
function draw(){
  background(5, 5, 5);
  pop();
  count++
  if(count >= 0 && count < 80){
  //push();
    translate(5, -5);
    rotate(PI/359);
  } else if(count >= 80 && count <= 160){
  //push();
    translate(-5, 5);
    rotate(-PI/360);

  } else if(count >= 200){
    setup();
  }
  console.log('count');

  grid.run();
  axis.run();

  stroke(0);
  fill(0, 0, 255);
  ellipse(-100, 100, 25);
push(); ;
}
