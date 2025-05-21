function drawEnd() {

  background("rgb(239,35,35)")

	textSize(50);
	text("Balloon Popped", width / 2, height / 2);
	
	// Button parameters
	let xCenter = width - 100;
	let yBack = height * 0.9;
	let bW = width * 0.10;
	let bH = height * 0.10;

	rectMode(CENTER);

	// Back button
	fill('rgb(219,219,255)');
	rect(xCenter, yBack, bW, bH, 20);

	textSize(14)
	fill('black')
	text("Back", xCenter, yBack)
  
}
