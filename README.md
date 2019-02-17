# hw3
Herman Fang Homework3

1. What code draws the blades of grass?
function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

2. What code makes the "lawnmower" come by? How often does it come by?
 if (random() > 0.999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }

3. What's the point of the h variable?
h+3 controls the growth of the grass blade.

4. What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
-10 set the same height of each grass blade

5. What's the point of an object?
an object is a container that can visualize data.

6. What's an example of a range you might use for the map function?
rect(mouseX, mouseY, 10, 10)
map(mouseX, 0, 400, 100, 200)

7. What line of code would give me a random year in the last century?
random(1900, 1999)
