//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var arrow = [];
var extend = [];
var ec = 3; //extender count
var oc = 5; //orbiter count
var ac = 5; //arrow count
var count = 0;
var count3 = 0;
var dir = 0;
var spawning = true;

function setup() {
  var cnv = createCanvas(1000, 1000);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  for (let i = 0; i < ac; i++){
    arrow[i] = new Arrow(random(0, 800), random(0, 800), random(-5, 5),random(-5, 5), i);
  }

  for (let i = 0; i < ec; i++){
    extend[i] = new Extender(random(0, 800), random(0, 800), random(-2, 2),random(-2, 2), i);
  }
}
//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 70);
  for (let i = 0; i < arrow.length; i++){
    arrow[i].run();
  }
  for (let i = 0; i < ec; i++){
    extend[i].run();
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
  count3++
  if(count3 % 200 === 0){
    if(spawning){
      arrow[arrow.length] = arrow[arrow.length] = new Arrow(random(0, 800), random(0, 800), random(-5, 5),random(-5, 5), arrow.length+1);
    }
  }
}
