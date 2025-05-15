function drawPlay() {

	background('rgb(250,184,206)');
	fill('black')
	textAlign(CENTER, CENTER);
	textSize(width * 0.02)


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

	// player controls circle
	playerCircle()
}

	function playerCircle() {
		// player controls circle
		fill('white')
		circle(mouseX, mouseY, 50)


	}
