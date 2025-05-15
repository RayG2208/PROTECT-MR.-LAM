function drawStart() {
createCanvas(windowWidth, windowHeight);
background('rgb(162,162,255)');

	// Proportional parameters

	let bW = width * 0.35; // Makes the width of button be 25% of screen width
	let bH = height * 0.10; // Makes the height of button be 15% of screen height
	let xCenter = width / 2;
	
	
	rectMode(CENTER);
	// Play button
	let yPlay = height * 0.4; // Makes the button be 40% down the screen
	fill('rgb(244,189,208)');
	rect(xCenter, yPlay, bW, bH, 20);

	// Instructions button
	let yInstruct = height * 0.6; // 60% down the screen
	fill('rgb(255,255,165)');
	rect(xCenter, yInstruct, bW, bH, 20);

	// Texts
	fill('black');
	textAlign(CENTER, CENTER);
	textSize(width * 0.02); // Same concept with the buttons
	text("PLAY", xCenter, yPlay);
	text("How to play", xCenter, yInstruct);
	
	// logo
	imageMode(CENTER)
	image(logo, windowWidth/2, windowHeight / 5.75, logoSize, logoSize)
  
}
