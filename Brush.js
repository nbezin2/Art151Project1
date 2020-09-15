class Brush {
	constructor(x,y,w,h,cR,cG,cB,dx,dy) {
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
	
	update() {
		this.x += map(mouseX, 0,500, 1,5)*this.dx;
		this.y += map(mouseY, 0,500, 1,5)*this.dy;
		
		if (this.x+this.w >= width || this.x-this.w <= 0) {
			this.dx *= -1;
		}
		
		if (this.y+this.h >= height || this.y-this.h <= 0) {
			this.dy *= -1;
		} 
	}
	
	show() {
		fill(map(this.x, 0,500, 0,256), map(this.y, 0,500, 0,256),map(mouseX+mouseY, 0,1000, 0,256));
		stroke(map(this.x, 0,500, 0,256), map(this.y, 0,500, 0,256),map(mouseX+mouseY, 0,1000, 0,256));
		ellipse(this.x, this.y, this.w, this.h);
	}
}