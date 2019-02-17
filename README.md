# hw3
Herman Fang Homework3

What code draws the blades of grass?
function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

What code makes the "lawnmower" come by? How often does it come by?
 if (random() > 0.999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }

What's the point of the h variable?
h+3 controls the growth of the grass blade.

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
-10 set the same height of each grass blade
