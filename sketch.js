let allBrush = [];

function setup() {
	// put setup code here
	createCanvas(windowWidth,windowHeight);
	background(0);
	
	for (let i = 0; i < 2; i++) {
		allBrush.push(new Brush(random(20,450), random(5,450), 5, 5, random(0,256), random(0,256), random(0,256), random(1,10), random(1,10)));
	}
}

function draw() {
	//put drawing code here
	for (let i=0; i<2; i++) {
		allBrush[i].show();
		allBrush[i].updatePos();
	}
	
	if (windowWidth != width || windowHeight != height) {
		resizeCanvas(windowWidth, windowHeight);
		background(0);
	}
}

function mouseReleased() {
	background(0);
}
