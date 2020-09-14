let allBrush = [];
let allDX = [3,5];
let backC = 0;

function setup() {
	// put setup code here
	backC = map(mouseX+mouseY, 0,800, 0,255);
	
	createCanvas(1920,700);
	background(backC);
	
	for (let i = 0; i < 2; i++) {
		allBrush.push(new Brush(5, random(0,80)*5, 5, 5, random(0,256), random(0,256), random(0,256), allDX[i], allDX[i]/5));
	}
	
}

function draw() {
	//put drawing code here
	for (let i=0; i<2; i++) {
		allBrush[i].show();
		allBrush[i].updatePos();
	}
}

function mouseReleased() {
	background(0);
}
