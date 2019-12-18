// Joey Jacob
class Orbiter{

  constructor(dist, av, angle, id){
    this.dist = dist;
    this.av = av; //angular velocity
    this.angle = angle;
    this.clr = color(117, 224, 180);
    this.loc = createVector(0,0);
    this.id = id
  }

  run(){
    this.update();
    this.render();
  }

  update(){
    this.angle = this.av+this.angle;
    this.loc.x = (Math.cos(this.angle)*this.dist) + extend[this.id].loc.x;
    this.loc.y = (Math.sin(this.angle)*this.dist) + extend[this.id].loc.y;
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 5);
  }
}

//   constructor(x, y, dx, dy, stat){
//       this.loc = createVector(x, y)
//       this.vel = createVector(dx, dy)
//       this.acc = createVector(0, 0)
//       this.clr = color(0, 255, 244);
//       this.w = 15;
//       this.angle = 0
//   }
//   run(){
//     this.checkEdges();
//     this.update();
//     this.render();
//   //  this.checkPosition();
//   } //end of run
//
//   update(){
//     this.vel.add(this.acc)
//     this.vel.limit(4)
//     this.loc.add(this.vel)
//     this.acc = createVector(0,0)
//   } //end of update
//
//   render(){
//     fill(this.clr);
//     push();
//     translate(this.loc.x, this.loc.y);
//     rotate(this.vel.heading()+PI/2);
//     quad(5, 20, 10, 5, 15, 20, 10, 15);
//     pop();
//     } //end of render
//
//   //checkPosition(){
//
// } // end of code
