function drawInstruct() {

	background('rgb(255,255,165)');
	fill('black')
	textAlign(CENTER, CENTER);
	textSize(25)
	text("INSTRUCTIONS", width / 2, height / 2 - 250)
	text("1. Use your MOUSE to control the SHIELD, this shield will protect Mr. Lam from DYING", width / 2, height / 2 - 150)
	text("2. Fling away the FALLING OBJECTS to prevent Mr. Lam from being harmed", width / 2, height / 2 - 100)
	text("3. If Mr. Lam gets HIT by ANY object, YOU LOSE", width / 2, height / 2 - 50)

	// Button parameters
	let xCenter = width - 150;
	let yBack = height * 0.9;
	let bW = width * 0.10;
	let bH = height * 0.10;

	rectMode(CENTER);


	fill('rgb(202,126,255)');
	rect(xCenter, yBack, bW, bH, 20);

	fill('black')
	text("Back", xCenter, yBack)

}
