let allBrush = [];

function setup() {
	createCanvas(500,500);
	background(0);
	
	for (let i = 0; i < 2; i++) {
		allBrush.push(new Brush(random(20,450), random(5,450), 5, 5, random(0,256), random(0,256), random(0,256), random(1,10), random(1,10)));
		
	}
}

function draw() {
	for (let i=0; i<2;i++) {
		allBrush[i].show();
		allBrush[i].update();
	}
}

function mouseReleased() {
	background(0);
}
