/*
 *write a  drawTarget() function makes it easy to draw many distinct 
 *targets. Each call to drawTarget() should specify the position, size, and number of
 *rings for each target.
*/
// var thing;

// function setup() {
//   createCanvas(1000, 1000);
//   background(51);
//   noStroke();
//   noLoop();
// }

// function draw() {
//   //this code draws one target with 8 rings
//   let size = width / 10;
//   let steps = size/8;
//   let grayvalues = 255/8;
  
//   for (i = 0; i < 8; i++) {
//     fill(i*grayvalues);
//     ellipse(width/2, height/2, size - i*steps, size - i*steps);
//   }
// 

function setup() {
  createCanvas(720, 400);
  background(51);
  noStroke();
  noLoop();
  target = new Jitter();

}

function draw() {
  drawTarget(width * 0.25, height * 0.4, 200, 4);
  drawTarget(width * 0.5, height * 0.5, 300, 10);
  drawTarget(width * 0.75, height * 0.3, 120, 6);
}

function drawTarget(xloc, yloc, size, num) {
  const grayvalues = 255 / num;
  const steps = size / num;
  for (let i = 0; i < num; i++) {
    fill(i * grayvalues);
    ellipse(xloc, yloc, size - i * steps, size - i * steps);
  }

  class Jitter {{
 constructor() 
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }
}
move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }


