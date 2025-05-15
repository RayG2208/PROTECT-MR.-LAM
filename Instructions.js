function drawInstruct() {

   	background('rgb(255,255,165)');
	fill('black')
	textAlign(CENTER, CENTER);
	text("These are the instructions", width / 2, height / 2)
	
	// Button parameters
	let xCenter = width - 100;
	let yBack = height * 0.9;
	let bW = width * 0.10;
	let bH = height * 0.10;
	
	rectMode(CENTER);
	
	// Back button
	fill('rgb(219,219,255)');
	rect(xCenter, yBack, bW, bH, 20);
	
	fill('black')
	text("Back", xCenter, yBack)

}
