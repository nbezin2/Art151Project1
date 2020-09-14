class Brush {
	
	constructor(x, y, w, h, cR, cG, cB, dx, dy) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.cR = cR;
		this.cG = cG;
		this.cB = cB;
		this.dx = dx;
		this.dy = dy;
		this.dirX = 1;
		this.dirY = 1;
	}	
	
	updatePos() {
		this.x += map(mouseX, 0,400, 1, 3)*this.dirX; //this.dx;
		this.y += map(mouseY, 0,400, 1, 3)*this.dirY; //this.dy;
		
		if (this.x+this.w >= width || this.x-this.w <= 0) {
			this.dirX *= -1;
		}
		
		if (this.y+this.h >= height || this.y-this.h <= 0) {
			this.dirY *= -1;
		}
	}
	
	show() {
		fill(map(this.x, 0,400,0,255), map(this.y, 0,400,0,255), map(mouseX+mouseY, 0,800,0,255));
		stroke(map(this.x, 0,400,0,255), map(this.y, 0,400,0,255), map(this.x+this.y, 0,800,0,255));
		ellipse(this.x, this.y, this.w, this.h);
	}

}