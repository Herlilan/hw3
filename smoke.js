var x = 210;
var y = 290;
var r = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // darker as it gets closer to 0
  fill(y);
  
  translate(x, y);
  rotate(r);
  rect(-10, -10, 20, 20);

  // up 3 pixels
  y -= 3;

  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.1

  // if reach past the top a bunch
  if (y < -300) {
    y = 290;
  }
}
