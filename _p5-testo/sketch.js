//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);


}

//  The draw function is called @ 30 fps
function draw() {
stroke(255, 255, 255); //used for borders
fill(200, 30, 150); //fill color
rect(300, 300, 200, 200); // x-position, y-position, width, height. Rectangle.

noStroke(); //removes any border
fill(230, 180, 20);
ellipse(150, 150, 200, 100); //x-position, y-position, horizontal diameter, vertical diameter. Circle.

stroke(33, 44, 55);
fill( random(255), random(255), random(255));
triangle(140, 170, 520, 562, 450, 720)
}
