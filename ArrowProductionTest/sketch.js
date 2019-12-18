//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var arrow = [];
var ac = 15; //arrow count
var attrac;
var repel;
var dir = 0;
var count = 0;
// var count3 = 0;
// var spawning = true;


function setup() {
  var cnv = createCanvas(1920, 1028);
  cnv.position((windowWidth-width)/2, 30);
  background(84, 84, 84);

  attrac = new Pulser(random(0, width), random(0, height), random(-8, 8),random(-8, 8), -2);
  repel = new Pulser(random(0, width), random(0, height), random(-8, 8),random(-8, 8), -1);

  while (attrac.loc.x <= 300 && attrac.loc.y <= 300){
    attrac = new Pulser(random(0, width), random(0, height), random(-8, 8),random(-8, 8), -2);
  }
  while (repel.loc.x <= 300 && repel.loc.y <= 300){
    repel = new Pulser(random(0, width), random(0, height), random(-8, 8),random(-8, 8), -1);
  }

  for (let i = 0; i < ac; i++){
    arrow[i] = new Arrow(random(0, width), random(0, height), random(-3, 3),random(-3, 3), i);
  }
}
//  The draw function is called @ 30 fps
function draw() {
  background(84, 84, 84, 70);

  fill(177, 227, 127);
  rect(0, 0, 300, 300);

  for (let i = 0; i < arrow.length; i++){
    arrow[i].run();
  }

  attrac.run();
  repel.run();

  for (let i = 0; i < arrow.length; i++){
    arrow[i].run();
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

  // count3++
  // if(count3 % 400 === 0){
  //   if(spawning){
  //     arrow[arrow.length] = arrow[arrow.length] = new Arrow(random(0, 300), random(0, 300), random(-5, 5),random(-5, 5), arrow.length+1);
  //   }
  // }
}
