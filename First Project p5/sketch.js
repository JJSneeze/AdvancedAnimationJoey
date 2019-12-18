//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var ball0, x0, y0, speedX0, speedY, balldiameter0
var ball1, x1, y1, speedX1, speedY1, balldiameter1
var ball2, x2, y2, speedX2, speedY2, balldiameter2

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
    balldiameter0 = random(15, 45)
    x0 = random(width);
    y0 = random(height);
    speedX0 = random (-20, 20);
    speedY0 = random (-20, 20);
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);

  fill(random(255), random(255), random(255));
  ellipse(x0, y0, balldiameter0);

if(x0 < 0){
  speedX0 = -speedX0;
}

if(x0> width){
  speedX0 = -speedX0;
}

if(y0 < 0){
  speedY0 = -speedY0;
}

if(y0 > height){
  speedY0 = -speedY0;
}

x0 = x0+speedX0;
y0= y0+speedY0;

}
