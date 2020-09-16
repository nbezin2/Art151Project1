class Brush {
	
	constructor(x, y, w, h, cR, cG, cB, dx, dy) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.cR = cR;
		this.cG = cG;
		this.cB = cB;
		this.dx = 1;
		this.dy = 1;
	}	
	
	updatePos() {
		this.x += map(mouseX, 0,width, 1, 5)*this.dx;
		this.y += map(mouseY, 0,height, 1, 5)*this.dy;
		
		if (this.x+this.w >= width || this.x-this.w <= 0) {
			this.dx *= -1;
		}
		
		if (this.y+this.h >= height || this.y-this.h <= 0) {
			this.dy *= -1;
		}
	}
	
	show() {
		fill(map(this.x, 0,width,0,255), map(this.y, 0,height,0,255), map(mouseX+mouseY, 0,width+height,0,255));
		stroke(map(this.x, 0,width,0,255), map(this.y, 0,height,0,255), map(mouseX+mouseY, 0,width+height,0,255));
		ellipse(this.x, this.y, this.w, this.h);
	}
}