//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
var c = 1;
var paddle;
var count = 0;
var score = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  for (let i = 0; i < c; i++){
    balls[i] = new Ball(random(0, 800), random(0, 400), random(-5, 5),random(-5, 5));
  }
    paddle = new Paddle (400, 700);
}

//  The draw function is called @ 30 fps
function draw(){
  background(5, 5, 5, 70);
  count++;
  if(count%300 === 0){
    balls.push(new Ball(random(0, 800), random(0, 400), random(-5, 5),random(-5, 5)));
  }
  for (let i = 0; i < balls.length; i++){
    balls[i].run();
  }
    paddle.run();
    textSize(50);
    text(score, 10, 50)
}
