//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var ship = [];
var attrac;
var repel;
var c = 100;
var count = 0;
var dir = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  attrac = new Ball(random(0, 800), random(0, 800), random(-5, 5),random(-5, 5), -2)
  repel = new Ball(random(0, 800), random(0, 800), random(-5, 5),random(-5, 5), -1)

  for (let i = 0; i < c; i++){
    ship[i] = new Ship(790, 10, random(-5, 5),random(-5, 5), i);
  }
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 70);
  attrac.run();
  repel.run();
  for (let i = 0; i < c; i++){
    ship[i].run();
  }
  if(dir === 0){
    count++;
  } else if(dir === 1){
    count--;
  }

  if(count === 20){
    dir = 1;
  } else if(count === 0){
    dir = 0;
  }
}
