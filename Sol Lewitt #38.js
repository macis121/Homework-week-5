function setup() {
	createCanvas(400, 400);
	colorMode (HSB);

}

function draw() {
	var h=0
	background(0);
	for (var x = 10; x < 400; x = x + 25) {

		for (var y = 10; y < 400; y = y + 25) {
		

fill (h,100, 100); 
			h=h+10;
		
			ellipse(x, y, 5, 5);
			
		}
	}
}