//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
var c = 1;
var paddle;
var count = 0;
var score = 0;
var roundNum = 1;
var gameState = 0;
var difficulty = 0;
var easy;
var medi;
var hard;
var instr;
var back;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  if(gameState === 0){

    easy = new Button(width/2-110, height/2+20, 220, 50, "Saber", width/2-50, height/2+60, 40, color(0, 255, 0));
    medi = new Button(width/2-110, height/2+105, 220, 50, "Rider", width/2-50, height/2+144, 40, color(0, 150, 255));
    hard = new Button(width/2-110, height/2+190, 220, 50, "Caster", width/2-60, height/2+230, 40, color(255, 0, 0));
    instr = new Button(width/2-110, height/2+275, 220, 50, "Contract", width/2-75, height/2+315, 40, color(150, 150, 150));

  } else if(gameState === 1){
    particles = new Array();
    noStroke();
    colorMode(HSB, 360, 100, 100);
    // blendMode(ADD);
    score = 0
    balls.splice(0, balls.length);
    for (let i = 0; i < c; i++){
      balls[i] = new Ball(random(0, 800), random(0, 400), random(-6, 6),random(-6, 6));
    }
    paddle = new Paddle (400, 700);
  } else if(gameState === 2){
    colorMode(RGB, 255, 255, 255);
  } else if(gameState === 3){
    back = new Button(width/2-110, height/2+105, 220, 50, "Return", width/2-50, height/2+144, 40, color(0, 150, 255));
  }
}
//  The draw function is called @ 30 fps
function draw(){
  if(gameState === 0){
    loadGame();
    easy.run();
    medi.run();
    hard.run();
    instr.run();
  } else if(gameState === 1){
    playGame();
  } else if(gameState === 2){
    endGame();
  } else if(gameState === 3){
    information();
    back.run();
  }
}

function loadGame(){
  fill(176,224,230);
  textSize(75);
  text("Fate / Pong", 205, 250);
  textSize(40);
  text("Choose Your Fate!", 230, 340);
  textSize(75);
}

function playGame(){
  background(100,0.05);
  count++;
  if(count%(300/difficulty) === 0){
    balls.push(new Ball(random(0, 800), random(0, 400), random(-6, 6),random(-6, 6)));
  }
  for (let i = 0; i < balls.length; i++){
    balls[i].run();
  }
  paddle.run();
  textSize(50);
  fill(255, 255, 255);
  text("Score = " + score, 10, 50);
  translate(width/2, height/2);

  particles.push(new Particle(createVector(5,0).rotate(cos(frameCount*frameCount/10000)*Math.PI+Math.PI/4),color(frameCount%360,40,100)));

  particles.forEach(element => {
    element.cnt++;
    element.position.add(element.vec);
    if(element.cnt<600){
      element.vec.rotate(0.0097);
    }

    fill(element.color);
    ellipse(element.position.x, element.position.y, 10, 10);
  });


  if(frameCount>1200){
    particles.shift();
  }
}

function endGame(){
  fill(0);
  strokeWeight(7);
  stroke(255)
  rect(width/2-375, height/2-270, 750, 150)
  strokeWeight(1);
  stroke(0);
  fill(176,224,230)

  fill(0);
  strokeWeight(7);
  stroke(255)
  rect(width/2-295, height/2-32, 570, 180)
  strokeWeight(1);
  stroke(0);
  fill(176,224,230)

  fill(255, 0, 0);
  textSize(125);
  text("New Contest", 40, 250);

  fill(176,224,230);
  textSize(150);
  text("Give Up", 120, 500);
  fill(255, 0, 0);
}

function mouseClicked(){
  if(mouseX > width/2-110 && mouseY > height/2+20 && mouseX < width/2+110 && mouseY < height/2+70 && gameState === 0){
    gameState = 1;
    difficulty = 1;
    setup();
  } else if(mouseX > width/2-110 && mouseY > height/2+105 && mouseX < width/2+110 && mouseY < height/2+155 && gameState === 0){
    gameState = 1;
    difficulty = 2;
    setup();
  } else if(mouseX > width/2-110 && mouseY > height/2+190 && mouseX < width/2+110 && mouseY < height/2+240 && gameState === 0){
    gameState = 1;
    difficulty = 3;
    setup();
  } else if(mouseX > width/2-110 && mouseY > height/2+270 && mouseX < width/2+110 && mouseY < height/2+320 && gameState === 0){
    gameState = 3;
    setup();
  } else if(mouseX > width/2-375 && mouseY > height/2-270 && mouseX < width/2+375 && mouseY < height/2-120 && gameState === 2){
    gameState = 1;
    setup();
  } else if(mouseX > width/2-295 && mouseY > height/2-32 && mouseX < width/2+295 && mouseY < height/2+148 && gameState === 2){
    gameState = 0;
    setup();
  } else if(mouseX > width/2-110 && mouseY > height/2+105 && mouseX < width/2+110 && mouseY < height/2+155 && gameState === 3){
    gameState = 0;
    setup();
  }
}

function information(){
  fill(176,224,230);
  textSize(50);
  strokeWeight(0);
  stroke(0);
  text("This is a game of skill.", 40, 100);
  text("Test yourself!", 40, 170);
  text("Fight for the Holy Grail...", 40, 240);
  text("By moving your mouse", 40, 310);
  text("'Left and Right'", 40, 380);
  text("Collect the highest score you can!", 40, 450);

  textSize(10);
  strokeWeight(0);
  stroke(0);
  text("You die when one of your opponents (the balls) hits the floor... Good Luck! P.S. Always read the fine print : )", 10, 790);
  textSize(50);
}
