class Button{

constructor(boxX, boxY, w, h, txt, textX, textY, textSize, textColor){
    this.boxX = boxX;
    this.boxY = boxY;
    this.w = w;
    this.h = h;
    this.text = txt;
    this.textX = textX;
    this.textY = textY;
    this.textSize = textSize;
    this.textColor = textColor;
}
 run(){
   this.render();
 }

render(){
  fill(0);
  stroke(this.textColor);
  strokeWeight(2);
  rect(this.boxX, this.boxY, this.w, this.h)
  textSize(this.textSize);
  text(this.text, this.textX, this.textY);
  }
}
