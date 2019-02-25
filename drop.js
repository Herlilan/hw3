var x = 190;
var y = 100;
var z = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(180, 0, 20, 100);

  // draw drip
  ellipse(x, y, z);
  

  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 2
  
  z = z + 2
  
  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 100;
    z = 10;
  }   
}
