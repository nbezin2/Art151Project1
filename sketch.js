
var x = 0;
var y = 1;


function setup() {
  // put setup code here
  createCanvas(400,400);
  
}

function draw() {
  //put drawing code here
  background(0);
  
	fill(150);
	stroke(25,61,81);
	rect(x, 20, 20,20);
	x += y;
	
	if (x+20 == width || x == 0) {
		y = -y;
	}
}