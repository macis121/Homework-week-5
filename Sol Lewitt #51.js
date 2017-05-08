function setup() { 
  createCanvas(400, 400);
	colorMode(HSB);
strokeWeight(1);
stroke(255, 204, 100);	
}

	
function draw() {


  background(255);		
	
	
	for(var x=30;x<=250;x=x+20){
      line(x,20,25,y);
			var y = x;


      line(350,y-10,x-200,250); 		 
		
    }
 }